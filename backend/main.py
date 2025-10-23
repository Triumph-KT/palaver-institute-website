"""
Palaver Institute Backend API

Main FastAPI application entry point that configures and runs the entire backend system.
This file orchestrates all the components including authentication, database, routes, and middleware.

Author: Palaver Institute Development Team
Version: 1.0.0
"""

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse
import time
import logging
from contextlib import asynccontextmanager

# Import our custom modules
from api.routes import (
    auth_routes,
    user_routes,
    application_routes,
    contact_routes,
    research_routes,
    dashboard_routes,
    admin_routes
)
from database.connection import init_database
from utils.config import settings
from utils.logging_config import setup_logging

# Setup logging
setup_logging()
logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Application lifespan manager
    
    Handles startup and shutdown events for the FastAPI application.
    - Startup: Initialize database, create tables, seed initial data
    - Shutdown: Close database connections, cleanup resources
    """
    # Startup
    logger.info("🚀 Starting Palaver Institute API...")
    try:
        # Initialize database connection and create tables
        await init_database()
        logger.info("✅ Database initialized successfully")
    except Exception as e:
        logger.error(f"❌ Database initialization failed: {str(e)}")
        raise
    
    yield
    
    # Shutdown
    logger.info("🛑 Shutting down Palaver Institute API...")
    logger.info("✅ Shutdown completed")

# Create FastAPI application instance
app = FastAPI(
    title="Palaver Institute API",
    description="""
    ## Palaver Institute Platform API
    
    Where African Minds Convene to Solve Global Challenges
    
    This API powers the Palaver Institute platform, providing endpoints for:
    
    ### Core Features
    * **Authentication & Authorization** - JWT-based auth with role management
    * **User Management** - Registration, profiles, and role assignment
    * **Application System** - Director and Fellow application processing
    * **Research Management** - Schools, labs, and publication tracking
    * **Contact & Communication** - Contact forms and messaging
    * **Dashboard Analytics** - Role-based dashboards and statistics
    * **Admin Tools** - Comprehensive administrative functionality
    
    ### User Roles
    * **Public** - Website access and application submission
    * **Applicant** - Application tracking and profile management  
    * **Fellow** - Research access and community features
    * **Director** - Application review and research coordination
    * **Alumni** - Community access and deliverable tracking
    * **Admin** - Full system administration
    
    ### Technical Details
    * **Framework**: FastAPI with SQLAlchemy ORM
    * **Database**: PostgreSQL (production) / SQLite (development)
    * **Authentication**: JWT tokens with refresh mechanism
    * **Documentation**: Auto-generated OpenAPI/Swagger docs
    * **Testing**: Comprehensive test suite with pytest
    
    Built with ❤️ by the Palaver Institute team
    """,
    version="1.0.0",
    contact={
        "name": "Palaver Institute",
        "url": "https://palaverinstitute.org",
        "email": "info@palaverinstitute.org",
    },
    license_info={
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT",
    },
    lifespan=lifespan,
    # Custom OpenAPI configuration
    openapi_tags=[
        {
            "name": "Authentication",
            "description": "User authentication and authorization endpoints",
        },
        {
            "name": "Users", 
            "description": "User management and profile operations",
        },
        {
            "name": "Applications",
            "description": "Director and Fellow application management",
        },
        {
            "name": "Research",
            "description": "Schools, labs, and publication management",
        },
        {
            "name": "Contact",
            "description": "Contact forms and communication",
        },
        {
            "name": "Dashboard",
            "description": "Analytics and dashboard data",
        },
        {
            "name": "Admin",
            "description": "Administrative operations (admin only)",
        },
    ],
)

# CORS Middleware Configuration
# Allows frontend applications to make requests to the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,  # Frontend URLs
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "PATCH"],
    allow_headers=["*"],
    expose_headers=["*"],
)

# Trusted Host Middleware for security
# Prevents Host header attacks
app.add_middleware(
    TrustedHostMiddleware, 
    allowed_hosts=settings.ALLOWED_HOSTS
)

# Static files middleware for serving uploaded files
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# Custom middleware for request logging and performance monitoring
@app.middleware("http")
async def log_requests(request: Request, call_next):
    """
    Request logging and performance monitoring middleware
    
    Logs all incoming requests with timing information and handles errors gracefully.
    Useful for debugging and monitoring API performance.
    """
    start_time = time.time()
    
    # Log incoming request
    logger.info(f"📥 {request.method} {request.url.path} - Client: {request.client.host if request.client else 'unknown'}")
    
    try:
        # Process the request
        response = await call_next(request)
        
        # Calculate processing time
        process_time = time.time() - start_time
        
        # Log response
        logger.info(f"📤 {request.method} {request.url.path} - Status: {response.status_code} - Time: {process_time:.3f}s")
        
        # Add performance header
        response.headers["X-Process-Time"] = str(process_time)
        
        return response
        
    except Exception as e:
        # Log errors
        process_time = time.time() - start_time
        logger.error(f"❌ {request.method} {request.url.path} - Error: {str(e)} - Time: {process_time:.3f}s")
        
        # Return structured error response
        return JSONResponse(
            status_code=500,
            content={
                "error": "Internal server error",
                "message": "An unexpected error occurred. Please try again later.",
                "request_id": str(int(time.time() * 1000))  # Simple request ID
            }
        )

# API Routes Registration
# Each route module handles a specific domain of functionality

# Authentication routes - login, register, token refresh
app.include_router(
    auth_routes.router, 
    prefix="/api/auth", 
    tags=["Authentication"]
)

# User management routes - profiles, settings, preferences  
app.include_router(
    user_routes.router, 
    prefix="/api/users", 
    tags=["Users"]
)

# Application routes - director/fellow applications, reviews
app.include_router(
    application_routes.router, 
    prefix="/api/applications", 
    tags=["Applications"]
)

# Contact routes - contact forms, inquiries
app.include_router(
    contact_routes.router, 
    prefix="/api/contact", 
    tags=["Contact"]
)

# Research routes - schools, labs, publications
app.include_router(
    research_routes.router, 
    prefix="/api/research", 
    tags=["Research"]
)

# Dashboard routes - analytics, statistics, role-based data
app.include_router(
    dashboard_routes.router, 
    prefix="/api/dashboard", 
    tags=["Dashboard"]
)

# Admin routes - system administration, user management
app.include_router(
    admin_routes.router, 
    prefix="/api/admin", 
    tags=["Admin"]
)

# Root endpoint - API health check and basic information
@app.get("/", tags=["Root"])
async def root():
    """
    API Root Endpoint
    
    Provides basic API information and health status.
    Useful for monitoring and verifying the API is running correctly.
    
    Returns:
        dict: API information including name, version, status, and links
    """
    return {
        "message": "Palaver Institute API",
        "version": "1.0.0",
        "status": "active",
        "description": "Where African Minds Convene to Solve Global Challenges",
        "documentation": "/docs",
        "health_check": "/health",
        "contact": {
            "email": "info@palaverinstitute.org",
            "website": "https://palaverinstitute.org"
        }
    }

# Health check endpoint for monitoring and load balancers
@app.get("/health", tags=["Health"])
async def health_check():
    """
    Health Check Endpoint
    
    Provides detailed health information about the API and its dependencies.
    Used by monitoring systems and load balancers to verify service health.
    
    Returns:
        dict: Health status of API components
    """
    try:
        # TODO: Add database health check
        # db_healthy = await check_database_health()
        
        return {
            "status": "healthy",
            "timestamp": int(time.time()),
            "version": "1.0.0",
            "components": {
                "api": "healthy",
                "database": "healthy",  # TODO: Implement actual check
                "file_storage": "healthy"  # TODO: Implement actual check
            }
        }
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        raise HTTPException(
            status_code=503, 
            detail="Service temporarily unavailable"
        )

# Global exception handlers
@app.exception_handler(404)
async def not_found_handler(request: Request, exc: HTTPException):
    """Handle 404 Not Found errors with consistent response format"""
    return JSONResponse(
        status_code=404,
        content={
            "error": "Not Found",
            "message": f"The requested resource {request.url.path} was not found.",
            "status_code": 404
        }
    )

@app.exception_handler(422)
async def validation_exception_handler(request: Request, exc: HTTPException):
    """Handle validation errors with user-friendly messages"""
    return JSONResponse(
        status_code=422,
        content={
            "error": "Validation Error",
            "message": "The request data is invalid. Please check your input and try again.",
            "status_code": 422,
            "details": exc.detail if hasattr(exc, 'detail') else None
        }
    )

@app.exception_handler(500)
async def internal_error_handler(request: Request, exc: Exception):
    """Handle internal server errors with logging"""
    logger.error(f"Internal server error on {request.url.path}: {str(exc)}")
    return JSONResponse(
        status_code=500,
        content={
            "error": "Internal Server Error",
            "message": "An unexpected error occurred. Our team has been notified.",
            "status_code": 500
        }
    )

# Development server configuration
if __name__ == "__main__":
    import uvicorn
    
    # Run the development server
    logger.info("🔧 Starting development server...")
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,  # Auto-reload on code changes
        log_level="info",
        access_log=True
    )
