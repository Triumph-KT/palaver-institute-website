# Developer Onboarding Guide

Welcome to the Palaver Institute development team! This guide will help you get up and running with our codebase and development practices.

## 🎯 Project Overview

The Palaver Institute platform is a comprehensive system for managing research, fellows, directors, and alumni. We're building intellectual sovereignty through indigenous-centered research and pan-African collaboration.

### Architecture
- **Frontend**: Next.js 14 with TypeScript (SEO-optimized)
- **Backend**: FastAPI with SQLAlchemy (Python)
- **Database**: PostgreSQL (production) / SQLite (development)
- **Deployment**: Vercel (frontend) + backend hosting
- **Monorepo**: Organized for scalability and team collaboration

## 🚀 Quick Start

### Prerequisites
```bash
# Required software
Node.js 18+
Python 3.9+
Git
PostgreSQL (for production setup)
```

### Initial Setup
```bash
# 1. Clone the repository
git clone <repository-url>
cd palaver-institute

# 2. Install all dependencies
npm run setup

# 3. Setup environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# 4. Initialize database
npm run db:init

# 5. Start development servers
npm run dev
```

This starts:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

## 📁 Project Structure

```
palaver-institute/
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/             # App router pages
│   │   ├── components/      # Reusable UI components
│   │   ├── lib/             # Utilities and configurations
│   │   ├── types/           # TypeScript type definitions
│   │   ├── hooks/           # Custom React hooks
│   │   ├── contexts/        # React context providers
│   │   └── styles/          # Global styles and themes
│   └── public/              # Static assets
│
├── backend/                  # FastAPI application
│   ├── api/
│   │   ├── routes/          # API route handlers
│   │   └── dependencies/    # Dependency injection
│   ├── database/            # Database configuration
│   ├── models/              # SQLAlchemy models
│   ├── schemas/             # Pydantic schemas
│   ├── services/            # Business logic
│   ├── utils/               # Utility functions
│   └── tests/               # Backend tests
│
├── shared/                   # Shared code and types
│   ├── types/               # TypeScript interfaces
│   ├── constants/           # Shared constants
│   └── utils/               # Shared utilities
│
└── docs/                     # Documentation
    ├── onboarding/          # Developer guides
    ├── features/            # Feature specifications
    ├── api/                 # API documentation
    └── deployment/          # Deployment guides
```

## 🔧 Development Workflow

### 1. Creating New Features

```bash
# 1. Create a feature branch
git checkout -b feature/your-feature-name

# 2. Make your changes following our conventions
# - Add tests for new functionality
# - Update documentation if needed
# - Follow code style guidelines

# 3. Test your changes
npm run test
npm run lint

# 4. Commit with conventional commits
git commit -m "feat: add user profile management"

# 5. Push and create pull request
git push origin feature/your-feature-name
```

### 2. Code Style Guidelines

#### TypeScript/JavaScript
```typescript
// ✅ Good: Clear naming and documentation
/**
 * Validates user application data and returns formatted errors
 * @param applicationData - The application form data to validate
 * @returns Promise resolving to validation result
 */
async function validateApplication(
  applicationData: ApplicationForm
): Promise<ValidationResult> {
  // Implementation here
}

// ❌ Bad: Unclear naming and no documentation
async function validate(data: any): Promise<any> {
  // Implementation here
}
```

#### Python
```python
# ✅ Good: Clear docstrings and type hints
async def create_application(
    application_data: ApplicationCreate,
    user: User,
    db: AsyncSession
) -> Application:
    """
    Create a new application for a user.
    
    Args:
        application_data: The application data to create
        user: The user creating the application
        db: Database session
        
    Returns:
        The created application instance
        
    Raises:
        ValueError: If application data is invalid
    """
    # Implementation here

# ❌ Bad: No documentation or type hints
async def create_app(data, user, db):
    # Implementation here
```

### 3. Database Changes

```bash
# 1. Modify models in backend/models/
# 2. Generate migration
cd backend && alembic revision --autogenerate -m "Add user profile fields"

# 3. Review the generated migration
# 4. Apply migration
npm run db:migrate

# 5. Update corresponding TypeScript types in shared/types/
```

### 4. Testing

```bash
# Run all tests
npm run test

# Run specific test suites
npm run test:frontend
npm run test:backend

# Run tests in watch mode during development
npm run test:watch
```

## 🎨 UI/UX Guidelines

### Design System
We use a consistent design system based on African-inspired colors and modern UI principles.

```css
/* Primary colors from our brand */
--primary-orange: #C17A47;
--secondary-orange: #D4924F;
--accent-blue: #4A6B8A;
--deep-blue: #2D4B6B;
--warm-purple: #7A5B8A;
```

### Component Structure
```typescript
// ✅ Good component structure
interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  className?: string;
}

/**
 * UserCard displays user information in a consistent card format
 * Used throughout the application for user listings and profiles
 */
export function UserCard({ user, onEdit, className }: UserCardProps) {
  return (
    <div className={`card ${className}`}>
      {/* Component implementation */}
    </div>
  );
}
```

### Accessibility
- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation works
- Maintain color contrast ratios
- Test with screen readers

## 🔐 Security Best Practices

### Authentication
```typescript
// ✅ Always validate user permissions
async function updateApplication(id: string, data: ApplicationUpdate) {
  const user = await getCurrentUser();
  const application = await getApplication(id);
  
  // Check permissions before allowing update
  if (!canUserEditApplication(user, application)) {
    throw new UnauthorizedError('Cannot edit this application');
  }
  
  return await updateApplicationData(id, data);
}
```

### Data Validation
```python
# ✅ Always validate input data
from pydantic import BaseModel, validator

class ApplicationCreate(BaseModel):
    position_applied: str
    motivation_letter: str
    
    @validator('motivation_letter')
    def validate_motivation_letter(cls, v):
        if len(v) < 100:
            raise ValueError('Motivation letter must be at least 100 characters')
        return v
```

## 📊 Performance Guidelines

### Frontend Optimization
```typescript
// ✅ Use React.memo for expensive components
const ExpensiveUserList = React.memo(({ users }: { users: User[] }) => {
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
});

// ✅ Implement proper loading states
function UserDashboard() {
  const { data: users, isLoading, error } = useUsers();
  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return <ExpensiveUserList users={users} />;
}
```

### Backend Optimization
```python
# ✅ Use database indexes for frequent queries
class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, index=True)  # Indexed for lookups
    role = Column(Enum(UserRole), index=True)        # Indexed for filtering

# ✅ Use pagination for large datasets
async def get_applications(
    skip: int = 0, 
    limit: int = 20,
    db: AsyncSession = Depends(get_db)
) -> List[Application]:
    return await db.execute(
        select(Application)
        .offset(skip)
        .limit(limit)
        .order_by(Application.created_at.desc())
    ).scalars().all()
```

## 🐛 Debugging and Troubleshooting

### Common Issues

#### 1. Database Connection Errors
```bash
# Check if PostgreSQL is running
sudo systemctl status postgresql

# Reset database if needed
npm run db:reset
npm run db:seed
```

#### 2. Frontend Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Check for TypeScript errors
npm run type-check
```

#### 3. API Connection Issues
```bash
# Verify backend is running
curl http://localhost:8000/health

# Check environment variables
cat .env.local
```

### Debugging Tools
- **Frontend**: React DevTools, Next.js DevTools
- **Backend**: FastAPI automatic docs at `/docs`
- **Database**: PostgreSQL logs, SQLAlchemy echo mode
- **Network**: Browser DevTools Network tab

## 📚 Learning Resources

### Required Reading
1. **Next.js Documentation**: https://nextjs.org/docs
2. **FastAPI Documentation**: https://fastapi.tiangolo.com/
3. **SQLAlchemy Documentation**: https://docs.sqlalchemy.org/
4. **React Query Documentation**: https://tanstack.com/query/latest

### Recommended Learning Path
1. **Week 1**: Understand project structure and run local setup
2. **Week 2**: Complete a small feature (e.g., add a new field to user profile)
3. **Week 3**: Work on a medium feature (e.g., implement a new dashboard widget)
4. **Week 4**: Contribute to a major feature with mentorship

### Code Review Checklist
- [ ] Code follows style guidelines
- [ ] Tests are included and passing
- [ ] Documentation is updated
- [ ] Performance considerations addressed
- [ ] Security best practices followed
- [ ] Accessibility requirements met
- [ ] Error handling implemented
- [ ] TypeScript types are accurate

## 🤝 Getting Help

### Team Communication
- **Daily Standups**: 9 AM EAT (East Africa Time)
- **Code Reviews**: All PRs require at least one approval
- **Architecture Decisions**: Discuss in team meetings
- **Urgent Issues**: Use team Slack channel

### Mentorship Program
- **New Developers**: Assigned a senior developer mentor
- **Interns**: Structured learning path with regular check-ins
- **Code Pairing**: Regular pair programming sessions
- **Knowledge Sharing**: Weekly tech talks and learning sessions

### Resources
- **Internal Wiki**: Detailed technical documentation
- **Code Examples**: Reference implementations in the codebase
- **Video Tutorials**: Screen recordings of common workflows
- **Office Hours**: Weekly open Q&A sessions with tech leads

## 🎯 Next Steps

After completing this guide:

1. **Set up your development environment** following the Quick Start
2. **Read through the codebase** to understand existing patterns
3. **Pick up your first issue** labeled `good-first-issue`
4. **Schedule a mentorship session** with your assigned mentor
5. **Join the team communication channels**

Welcome to the team! We're excited to have you contribute to building the intellectual infrastructure for African independence.

---

**Questions?** Reach out to the development team lead or create an issue in the repository.
