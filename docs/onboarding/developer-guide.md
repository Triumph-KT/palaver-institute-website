  # 🚀 Palaver Institute Developer Onboarding Guide

Welcome to the Palaver Institute development team! This guide will get you up and running with our **live, production website** and development practices.

## 🌟 **CURRENT PROJECT STATUS (October 2025)**

### ✅ **WHAT'S ALREADY LIVE:**
- **🌍 Production Website**: https://palaverinstitute.org (SSL secured)
- **📱 Mobile Responsive**: Perfect mobile navigation with working hamburger menu
- **🚀 Auto-Deployment**: Push to GitHub = Live in 2-5 minutes
- **⚡ Global CDN**: Fast loading worldwide via Netlify
- **🎨 Professional Design**: African-inspired branding and modern UI

### 🏗️ **CURRENT ARCHITECTURE:**
```
palaver-institute/
├── frontend/          # Next.js 14 + TypeScript (LIVE ✅)
│   ├── src/app/       # App Router pages (deployed)
│   ├── src/components/ # React components (working)
│   └── public/        # Static assets + logo
├── backend/           # FastAPI setup (MVP ready 🔄)
├── docs/              # Documentation (comprehensive)
└── legacy-html/       # Original HTML (archived)
```

## 🎯 **PROJECT OVERVIEW**

The Palaver Institute platform is building **intellectual sovereignty through indigenous-centered research and pan-African collaboration**. We're currently in the **MVP expansion phase** - moving from a successful frontend-only website to a full-stack application.

### **Mission**: Where African Minds Convene to Solve Global Challenges
### **Vision**: Decolonize human intelligence research through African epistemologies
### **Current Focus**: Application management system for Directors and Fellows

---

## 🚀 **DEVELOPER QUICK START**

### **Prerequisites**
```bash
# Required software
Node.js 18+ (https://nodejs.org/)
Git (https://git-scm.com/)
Code Editor (VS Code recommended)
GitHub account with access to repository
```

### **1. Clone and Setup**
```bash
# Clone the repository
git clone https://github.com/Triumph-KT/palaver-institute-website.git
cd palaver-institute

# Install frontend dependencies
cd frontend
npm install

# Start development server
npm run dev
# Visit http://localhost:3000
```

### **2. Understand the Current Deployment**
- **Live Site**: https://palaverinstitute.org
- **Deployment**: Automatic via Netlify (connected to main branch)
- **Domain**: Custom domain with SSL certificate
- **Updates**: Push to `main` branch = Live in 2-5 minutes

### **3. Development Workflow**
```bash
# Create feature branch (we'll use mvp-branch for main development)
git checkout -b feature/your-feature-name

# Make your changes
# Edit files in frontend/src/

# Test locally
npm run dev

# Commit and push
git add .
git commit -m "feat: your feature description"
git push origin feature/your-feature-name

# Create Pull Request to merge into mvp-branch
```

---

## 📁 **CURRENT PROJECT STRUCTURE**

### **Frontend (LIVE and Working) ✅**
```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Homepage (LIVE)
│   │   ├── story/page.tsx     # Story page (LIVE)
│   │   ├── team/page.tsx      # Team page (LIVE)
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles (African-inspired colors)
│   └── components/            # React components
│       ├── Navigation.tsx     # Mobile-friendly navigation (WORKING)
│       ├── ContactForm.tsx    # Contact form (needs backend)
│       └── sections/          # Page sections
├── public/
│   └── logo.png              # Palaver Institute logo
├── package.json              # Dependencies
├── next.config.js            # Next.js config (static export)
├── tailwind.config.js        # Tailwind CSS config
└── tsconfig.json             # TypeScript config
```

### **Backend (MVP Ready) 🔄**
```
backend/
├── main.py                   # FastAPI entry point
├── requirements.txt          # Python dependencies
└── requirements-simple.txt   # Minimal requirements for MVP
```

### **Documentation (Comprehensive) 📚**
```
docs/
├── onboarding/
│   └── developer-guide.md    # This file
├── features/
│   ├── mvp-roadmap.md       # Development roadmap
│   └── director-dashboard.md # Dashboard specifications
└── deployment/              # Deployment guides
```

---

## 🎨 **DESIGN SYSTEM & BRAND**

### **African-Inspired Color Palette**
```css
:root {
  /* Primary brand colors */
  --primary-orange: #C17A47;     /* Main brand color */
  --secondary-orange: #D4924F;   /* Secondary accent */
  --accent-blue: #4A6B8A;        /* Professional blue */
  --deep-blue: #2D4B6B;          /* Navigation/headers */
  --warm-purple: #7A5B8A;        /* Accent color */
  --earth-brown: #8B5A3C;        /* Supporting color */
  --light-cream: #F5F1EB;        /* Background/sections */
}
```

### **Typography & Fonts**
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body Text**: Regular (400) and Medium (500)
- **Mobile First**: Responsive scaling

### **Component Patterns**
```typescript
// ✅ Good component structure
interface ComponentProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Reusable component following our design system
 * Used throughout the application for consistency
 */
export function CustomComponent({ title, children, className }: ComponentProps) {
  return (
    <div className={`bg-palaver-cream-light rounded-lg p-6 ${className}`}>
      <h2 className="text-palaver-orange-primary font-bold text-xl mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}
```

---

## 🔄 **DEVELOPMENT WORKFLOW**

### **Current Branching Strategy**
- **`main`**: Production branch (auto-deploys to https://palaverinstitute.org)
- **`mvp-branch`**: Main development branch for new features
- **`feature/*`**: Individual feature branches (merge to mvp-branch)

### **Making Changes to Live Website**
```bash
# For urgent fixes to live site
git checkout main
git pull origin main

# Make your fix
# Edit files, test locally

# Push directly to main (goes live immediately)
git add .
git commit -m "fix: urgent issue description"
git push origin main
# Live in 2-5 minutes at https://palaverinstitute.org
```

### **Making New Features**
```bash
# For new features and development
git checkout mvp-branch
git pull origin mvp-branch

# Create feature branch
git checkout -b feature/user-authentication

# Develop your feature
# Test thoroughly locally

# Push and create PR to mvp-branch
git add .
git commit -m "feat: add user authentication system"
git push origin feature/user-authentication
# Create Pull Request to merge into mvp-branch
```

---

## 🛠️ **DEVELOPMENT TOOLS & COMMANDS**

### **Frontend Development**
```bash
cd frontend

# Development server (hot reload)
npm run dev              # http://localhost:3000

# Production build (test before deploying)
npm run build            # Builds static site

# Type checking
npm run type-check       # Check TypeScript errors

# Linting
npm run lint             # ESLint + Prettier

# Start production build locally
npm run start            # Test production build
```

### **Useful Development Commands**
```bash
# Check current branch and status
git status
git branch -a

# See recent commits
git log --oneline -10

# Test build locally before pushing
cd frontend && npm run build

# View live deployment logs (Netlify dashboard)
# Visit: https://app.netlify.com (login required)
```

---

## 📱 **RESPONSIVE DESIGN & MOBILE**

### **Mobile Navigation (Recently Fixed) ✅**
- **Hamburger Menu**: Fully functional on mobile devices
- **Touch Targets**: Optimized for mobile interaction
- **Smooth Animations**: Menu slides in/out properly
- **Auto-Close**: Menu closes when navigating to new pages

### **Responsive Breakpoints**
```css
/* Mobile first approach */
.container {
  padding: 1rem;          /* Mobile */
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;        /* Tablet */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 3rem;        /* Desktop */
  }
}
```

### **Testing Responsive Design**
```bash
# Always test on actual devices
# Use browser dev tools for initial testing
# Test these breakpoints: 320px, 768px, 1024px, 1920px
```

---

## 🚀 **DEPLOYMENT & PRODUCTION**

### **Current Deployment Setup (Netlify)**
- **Platform**: Netlify (automatic deployments)
- **Domain**: palaverinstitute.org (custom domain)
- **SSL**: Let's Encrypt (auto-renewal)
- **Build Command**: `npm run build` (in frontend directory)
- **Deploy Previews**: Available for pull requests (paid feature)

### **Deployment Process**
```bash
# Automatic deployment (main branch only)
git push origin main
# Triggers: Build → Deploy → Live (2-5 minutes)

# Manual deployment (if needed)
# 1. Go to Netlify dashboard
# 2. Click "Deploy site"
# 3. Drag and drop frontend/out folder
```

### **Environment Variables**
```bash
# For local development
cp env.example .env.local
# Edit .env.local with your configuration

# For production (Netlify dashboard)
# Set environment variables in Netlify dashboard
# Site Settings → Environment Variables
```

---

## 🎯 **MVP ROADMAP & NEXT STEPS**

### **Phase 1: Frontend Foundation ✅ (COMPLETED)**
- ✅ Professional website design
- ✅ Mobile responsive navigation
- ✅ Custom domain with SSL
- ✅ Automatic deployment pipeline
- ✅ SEO optimization

### **Phase 2: Backend Integration (CURRENT FOCUS)**
- 🔄 FastAPI backend setup
- 🔄 Database design (SQLite → PostgreSQL)
- 🔄 User authentication (JWT)
- 🔄 Contact form functionality
- 🔄 Application submission system

### **Phase 3: Application Management (Next 2-3 months)**
- 🔄 Director recruitment system
- 🔄 Fellow application portal
- 🔄 Application review interface
- 🔄 Email notifications
- 🔄 File upload handling

### **Phase 4: Dashboards & Community (3-6 months)**
- 🔄 Role-based dashboards
- 🔄 Alumni network portal
- 🔄 Research management system
- 🔄 Analytics and reporting
- 🔄 Advanced community features

---

## 🐛 **TROUBLESHOOTING COMMON ISSUES**

### **Local Development Issues**
```bash
# Port already in use
lsof -ti:3000 | xargs kill -9    # Kill process on port 3000
npm run dev                      # Restart development server

# Node modules issues
rm -rf node_modules package-lock.json
npm install                      # Reinstall dependencies

# TypeScript errors
npm run type-check              # Check for type errors
# Fix errors in the code, don't ignore them
```

### **Build/Deployment Issues**
```bash
# Test build locally first
cd frontend
npm run build                   # Should complete without errors

# Check Netlify build logs
# Visit Netlify dashboard → Deploys → Click on failed deploy
# Check build logs for specific errors

# Common issues:
# - TypeScript errors (fix in code)
# - Missing dependencies (add to package.json)
# - Import path errors (use relative paths)
```

### **Mobile Issues**
```bash
# Test on actual devices, not just browser dev tools
# Common issues:
# - Touch targets too small (min 44px)
# - Text too small (min 16px)
# - Horizontal scrolling (check container widths)
```

---

## 📚 **LEARNING RESOURCES**

### **Essential Reading (Priority Order)**
1. **This README.md**: Current project status and workflow
2. **Next.js App Router**: https://nextjs.org/docs/app
3. **Tailwind CSS**: https://tailwindcss.com/docs
4. **TypeScript Handbook**: https://www.typescriptlang.org/docs/

### **Project-Specific Resources**
1. **Live Website**: https://palaverinstitute.org (see what we've built)
2. **MVP Roadmap**: `/docs/features/mvp-roadmap.md`
3. **Director Dashboard Specs**: `/docs/features/director-dashboard.md`
4. **Netlify Dashboard**: https://app.netlify.com (deployment monitoring)

### **Learning Path for New Developers**
```bash
# Week 1: Understanding the Current System
- Set up local development environment
- Explore the live website
- Read through existing components
- Make a small styling change and deploy

# Week 2: First Feature
- Add a new section to an existing page
- Create a reusable component
- Test responsive design
- Submit pull request

# Week 3: Backend Integration
- Set up FastAPI locally
- Connect a simple API endpoint
- Test full-stack functionality
- Work with database models

# Week 4: Complex Feature
- Work on application system
- Implement user authentication
- Create dashboard components
- Add comprehensive testing
```

---

## 🔐 **SECURITY & BEST PRACTICES**

### **Frontend Security**
```typescript
// ✅ Always validate user input
function ContactForm() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    
    // Submit to API
    submitContactForm({ email });
  };
}

// ✅ Use TypeScript for type safety
interface User {
  id: string;
  email: string;
  role: 'admin' | 'director' | 'fellow' | 'alumni';
}
```

### **Backend Security (Future)**
```python
# ✅ Always use type hints and validation
from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    role: Optional[str] = "fellow"
    
    class Config:
        # Validate assignment
        validate_assignment = True
```

---

## 🤝 **TEAM COLLABORATION**

### **Code Review Process**
1. **Create Feature Branch**: `git checkout -b feature/your-feature`
2. **Develop and Test**: Ensure code works locally
3. **Push Branch**: `git push origin feature/your-feature`
4. **Create Pull Request**: Target `mvp-branch` for new features
5. **Code Review**: At least one team member reviews
6. **Merge**: After approval and tests pass

### **Communication**
- **GitHub Issues**: Track bugs and feature requests
- **Pull Requests**: Code review and discussion
- **Documentation**: Keep this guide updated
- **Commit Messages**: Use conventional commits (feat:, fix:, docs:)

### **Quality Standards**
```bash
# Before submitting any code:
npm run lint        # No linting errors
npm run type-check  # No TypeScript errors
npm run build       # Build succeeds
# Test on mobile device
# Test on live site after deployment
```

---

## 🆘 **GETTING HELP**

### **When You're Stuck**
1. **Check this documentation** - most answers are here
2. **Look at existing code** - follow established patterns
3. **Check GitHub issues** - someone may have faced this before
4. **Test on the live site** - see how it currently works
5. **Ask the team** - create a GitHub issue or discussion

### **Emergency Procedures**
```bash
# If you break the live site
git checkout main
git revert HEAD~1              # Revert last commit
git push origin main           # Fixes live site immediately

# If build is failing
# Check Netlify dashboard for error logs
# Fix locally first, then push
```

---

## 🎉 **WELCOME TO THE TEAM!**

You're joining a project that's already **live and successful**:
- ✅ **Professional website** serving the global community
- ✅ **Modern tech stack** with best practices
- ✅ **Clear documentation** and development workflow
- ✅ **Meaningful mission** - building intellectual sovereignty for Africa

### **Your First Tasks**
1. **Set up local environment** and run the website
2. **Explore the live site** at https://palaverinstitute.org
3. **Read the MVP roadmap** to understand where we're heading
4. **Make your first contribution** - even a small improvement counts
5. **Join our development branch** - `mvp-branch` is where the action happens

**We're building something important together - the intellectual infrastructure for African independence. Welcome aboard!** 🌍

---

*Last updated: October 23, 2025 - Post successful deployment and MVP branch setup*
*Questions? Create a GitHub issue or reach out to the development team.*