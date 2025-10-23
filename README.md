# 🌍 Palaver Institute Platform

**Where African Minds Convene to Solve Global Challenges**

🎉 **LIVE WEBSITE**: [https://palaverinstitute.org](https://palaverinstitute.org) (SSL-secured, mobile-optimized)

Building intellectual sovereignty through indigenous-centered research and pan-African collaboration. Currently deployed as a professional website with plans for full-stack application development.

---

## 🚀 **PROJECT STATUS (October 2025)**

### ✅ **PRODUCTION READY:**
- **🌍 Live Website**: https://palaverinstitute.org
- **📱 Mobile Responsive**: Perfect navigation and user experience
- **⚡ Auto-Deployment**: Push to GitHub → Live in 2-5 minutes
- **🔒 SSL Security**: HTTPS with auto-renewing certificates
- **🎨 Professional Design**: African-inspired branding and modern UI
- **🚀 Global CDN**: Fast loading worldwide via Netlify

### 🔄 **CURRENT DEVELOPMENT PHASE:**
**MVP Expansion**: Moving from successful frontend-only website to full-stack application with user authentication, application management, and director dashboards.

---

## 🏗️ **CURRENT ARCHITECTURE**

```
palaver-institute/
├── frontend/          # Next.js 14 + TypeScript (DEPLOYED ✅)
│   ├── src/app/       # App Router pages (live website)
│   ├── src/components/ # React components (mobile-optimized)
│   └── public/        # Static assets and branding
├── backend/           # FastAPI + SQLAlchemy (MVP ready 🔄)
├── docs/              # Comprehensive documentation 📚
├── shared/            # Shared types and utilities
└── legacy-html/       # Original HTML (archived)
```

---

## 🎯 **FOR NEW DEVELOPERS: GET STARTED IN 5 MINUTES**

### **Prerequisites**
```bash
Node.js 18+ (https://nodejs.org/)
Git (https://git-scm.com/)
GitHub account with repository access
Code editor (VS Code recommended)
```

### **Quick Setup**
```bash
# 1. Clone the repository
git clone https://github.com/Triumph-KT/palaver-institute-website.git
cd palaver-institute

# 2. Switch to development branch
git checkout mvp-branch
git pull origin mvp-branch

# 3. Install and run
cd frontend
npm install
npm run dev

# 4. Open browser
# Visit: http://localhost:3000
# Compare with live site: https://palaverinstitute.org
```

### **Your First Contribution**
```bash
# 1. Create feature branch
git checkout -b feature/your-name-first-contribution

# 2. Make a small change (e.g., update a text or color)
# Edit files in frontend/src/app/

# 3. Test locally
npm run dev  # Check http://localhost:3000

# 4. Commit and push
git add .
git commit -m "feat: your improvement description"
git push origin feature/your-name-first-contribution

# 5. Create Pull Request to merge into mvp-branch
```

---

## 🔄 **DEVELOPMENT WORKFLOW**

### **Branch Strategy**
- **`main`**: Production branch (auto-deploys to https://palaverinstitute.org)
- **`mvp-branch`**: Main development branch for new features
- **`feature/*`**: Individual feature branches (merge to mvp-branch)

### **For New Features (Standard Workflow)**
```bash
# Always work from mvp-branch for new development
git checkout mvp-branch
git pull origin mvp-branch
git checkout -b feature/your-feature-name

# Develop, test, commit, push
# Create PR to merge into mvp-branch
```

### **For Urgent Live Site Fixes**
```bash
# Only for critical fixes to production
git checkout main
git pull origin main
# Make fix, test, commit, push to main
# Goes live immediately
```

---

## 📁 **PROJECT STRUCTURE (WHAT YOU'LL WORK WITH)**

### **Frontend (Currently Live) ✅**
```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Homepage (live)
│   │   ├── story/page.tsx     # Story page (live)
│   │   ├── team/page.tsx      # Team page (live)
│   │   ├── layout.tsx         # Root layout + SEO
│   │   └── globals.css        # Styling (African-inspired colors)
│   └── components/            # React components
│       ├── Navigation.tsx     # Mobile navigation (working)
│       ├── ContactForm.tsx    # Contact form (needs backend)
│       └── sections/          # Reusable sections
├── public/
│   └── logo.png              # Palaver Institute branding
├── package.json              # Dependencies
├── next.config.js            # Next.js configuration
└── tailwind.config.js        # Tailwind CSS setup
```

### **Backend (MVP Ready) 🔄**
```
backend/
├── main.py                   # FastAPI application entry
├── requirements.txt          # Python dependencies
└── requirements-simple.txt   # Minimal MVP requirements
```

### **Documentation (Comprehensive) 📚**
```
docs/
├── onboarding/
│   └── developer-guide.md    # Detailed developer guide
├── features/
│   ├── mvp-roadmap.md       # Development roadmap
│   └── director-dashboard.md # Feature specifications
└── deployment/              # Deployment documentation
```

---

## 🎨 **DESIGN SYSTEM (AFRICAN-INSPIRED)**

### **Brand Colors**
```css
:root {
  /* African Heritage Color Palette */
  --primary-orange: #C17A47;     /* Main brand color */
  --secondary-orange: #D4924F;   /* Secondary accent */
  --accent-blue: #4A6B8A;        /* Professional blue */
  --deep-blue: #2D4B6B;          /* Navigation headers */
  --warm-purple: #7A5B8A;        /* Accent highlights */
  --earth-brown: #8B5A3C;        /* Supporting earth tone */
  --light-cream: #F5F1EB;        /* Background sections */
}
```

### **Typography**
- **Font**: Inter (Google Fonts) - clean, modern, readable
- **Mobile First**: Responsive scaling across all devices
- **Accessibility**: High contrast ratios, readable sizes

---

## 🛠️ **DEVELOPMENT COMMANDS**

### **Frontend Development**
```bash
cd frontend

# Development (hot reload)
npm run dev              # http://localhost:3000

# Production build test
npm run build            # Test before deploying

# Code quality
npm run lint             # ESLint + Prettier
npm run type-check       # TypeScript validation

# Deployment test
npm run start            # Test production build locally
```

### **Useful Git Commands**
```bash
# Check status
git status
git branch -a            # See all branches

# Stay updated
git pull origin mvp-branch

# Clean commits
git log --oneline -5     # See recent commits
```

---

## 📱 **MOBILE-FIRST RESPONSIVE DESIGN**

### **Mobile Navigation (Recently Fixed) ✅**
- **Hamburger Menu**: Fully functional touch interface
- **Smooth Animations**: Professional slide-in/out transitions
- **Auto-Close**: Menu closes when navigating to new pages
- **Touch Optimized**: Large, accessible touch targets

### **Responsive Breakpoints**
```css
/* Mobile first approach */
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1920px) { /* Large screens */ }
```

### **Testing Requirements**
- ✅ Test on actual mobile devices (not just browser tools)
- ✅ Verify touch interactions work properly
- ✅ Check text readability on small screens
- ✅ Ensure no horizontal scrolling

---

## 🚀 **DEPLOYMENT & PRODUCTION**

### **Current Deployment (Netlify)**
- **Platform**: Netlify (automatic deployments)
- **Domain**: palaverinstitute.org (custom domain + SSL)
- **Build**: Automatic on push to `main` branch
- **Speed**: 2-5 minutes from push to live
- **Performance**: Global CDN, optimized loading

### **Deployment Process**
```bash
# Automatic (main branch only)
git push origin main
# → Netlify detects push
# → Runs npm run build
# → Deploys to https://palaverinstitute.org
# → Live in 2-5 minutes

# Monitor deployment
# Visit: https://app.netlify.com
# Check: Deploy logs and status
```

---

## 🎯 **MVP ROADMAP (WHERE WE'RE HEADING)**

### **Phase 1: Frontend Foundation ✅ (COMPLETED)**
- ✅ Professional website design and branding
- ✅ Mobile-responsive navigation and UI
- ✅ Custom domain with SSL certificate
- ✅ Automatic deployment pipeline
- ✅ SEO optimization and performance

### **Phase 2: Backend Integration (CURRENT FOCUS)**
- 🔄 FastAPI backend with database
- 🔄 User authentication system (JWT)
- 🔄 Working contact form with email
- 🔄 Application submission system
- 🔄 Basic admin interface

### **Phase 3: Application Management (Next 2-3 months)**
- 🔄 Director recruitment and onboarding
- 🔄 Fellow application portal
- 🔄 Application review and scoring system
- 🔄 Email notifications and workflows
- 🔄 File upload and document management

### **Phase 4: Dashboards & Community (3-6 months)**
- 🔄 Role-based director dashboards
- 🔄 Alumni network and community features
- 🔄 Research publication management
- 🔄 Analytics and reporting system
- 🔄 Advanced collaboration tools

---

## 🐛 **TROUBLESHOOTING FOR DEVELOPERS**

### **Local Development Issues**
```bash
# Port already in use
lsof -ti:3000 | xargs kill -9    # Kill process on port 3000
npm run dev                      # Restart server

# Dependencies issues
rm -rf node_modules package-lock.json
npm install                      # Fresh install

# TypeScript errors
npm run type-check              # Check for errors
# Fix errors in code (don't ignore them)
```

### **Build/Deployment Issues**
```bash
# Test build locally first
cd frontend
npm run build                   # Must succeed without errors

# Check deployment logs
# Visit Netlify dashboard → Deploys
# Click on failed deploy to see logs

# Common fixes:
# - Fix TypeScript errors
# - Add missing dependencies to package.json
# - Use relative import paths
```

---

## 📚 **LEARNING RESOURCES FOR NEW DEVELOPERS**

### **Essential Reading (Priority Order)**
1. **This README**: Current project status and workflow
2. **Developer Guide**: `/docs/onboarding/developer-guide.md`
3. **Live Website**: https://palaverinstitute.org (see what we've built)
4. **Next.js App Router**: https://nextjs.org/docs/app
5. **Tailwind CSS**: https://tailwindcss.com/docs

### **Learning Path**
```bash
# Week 1: Setup and Understanding
- Clone repo, run locally, explore live site
- Read documentation, understand current architecture
- Make small styling change, deploy successfully

# Week 2: First Feature
- Create new component or page section
- Follow established patterns and design system
- Test responsively, submit pull request

# Week 3: Backend Integration
- Set up FastAPI locally
- Connect frontend to backend API
- Work with database models and authentication

# Week 4: Complex Features
- Build application management components
- Implement user dashboards
- Add comprehensive testing and documentation
```

---

## 🔐 **SECURITY & BEST PRACTICES**

### **Code Quality Standards**
```typescript
// ✅ Always use TypeScript with proper types
interface User {
  id: string;
  email: string;
  role: 'admin' | 'director' | 'fellow' | 'alumni';
  createdAt: Date;
}

// ✅ Validate user input
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ✅ Use proper error handling
try {
  const result = await submitApplication(data);
  return result;
} catch (error) {
  console.error('Application submission failed:', error);
  throw new Error('Failed to submit application');
}
```

### **Performance Guidelines**
```typescript
// ✅ Use React.memo for expensive components
const UserList = React.memo(({ users }: { users: User[] }) => {
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
});

// ✅ Implement proper loading states
function Dashboard() {
  const { data, isLoading, error } = useUsers();
  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return <UserList users={data} />;
}
```

---

## 🤝 **TEAM COLLABORATION**

### **Code Review Process**
1. **Create Feature Branch**: `feature/your-feature-name`
2. **Develop and Test**: Ensure code works locally
3. **Push and PR**: Create pull request to `mvp-branch`
4. **Review**: Team member reviews code
5. **Merge**: After approval and CI passes

### **Communication Guidelines**
- **GitHub Issues**: Track bugs and feature requests
- **Pull Requests**: Code review and technical discussion
- **Commit Messages**: Use conventional commits (`feat:`, `fix:`, `docs:`)
- **Documentation**: Keep guides updated with changes

### **Quality Checklist**
```bash
# Before submitting any code:
✅ npm run lint        # No linting errors
✅ npm run type-check  # No TypeScript errors
✅ npm run build       # Build succeeds
✅ Test on mobile      # Responsive design works
✅ Test on live site   # Verify after deployment
```

---

## 🆘 **GETTING HELP**

### **When You're Stuck**
1. **Check Documentation**: Most answers are in `/docs/`
2. **Examine Existing Code**: Follow established patterns
3. **Test on Live Site**: See how features currently work
4. **GitHub Issues**: Search existing issues or create new one
5. **Ask Team**: Create discussion or reach out directly

### **Emergency Procedures**
```bash
# If you accidentally break the live site
git checkout main
git revert HEAD~1              # Revert problematic commit
git push origin main           # Fix goes live immediately

# If build is failing
# Check Netlify dashboard for specific error
# Fix locally first, then push
```

---

## 🎉 **SUCCESS METRICS & ACHIEVEMENTS**

### **Current Achievements ✅**
- **Professional Website**: Live at custom domain with SSL
- **Mobile Optimized**: Perfect mobile user experience
- **Fast Performance**: Global CDN with <1 second load times
- **SEO Ready**: Comprehensive meta tags and optimization
- **Developer Friendly**: Clean codebase with documentation
- **Deployment Pipeline**: Automated, reliable, fast

### **Impact Metrics**
- **Global Accessibility**: Website accessible worldwide
- **Professional Credibility**: Investor and partner ready
- **Development Velocity**: Features can be deployed in minutes
- **Code Quality**: TypeScript, linting, and best practices
- **Documentation**: Comprehensive guides for team scaling

---

## 🌍 **MISSION & VISION**

### **What We're Building**
The Palaver Institute is **building intellectual sovereignty for Africa** through indigenous-centered research and pan-African collaboration. Our platform will manage:

- **Research Directors**: 8 leaders across different fields
- **Fellows**: Brilliant African researchers and scholars
- **Alumni Network**: Growing community of past fellows
- **Research Output**: Publications, findings, and knowledge
- **Applications**: Streamlined recruitment and selection

### **Why This Matters**
We're creating the intellectual infrastructure for African independence - a platform where African minds convene to solve global challenges using indigenous knowledge systems as sophisticated scientific frameworks.

---

## 🚀 **JOIN US!**

### **For New Developers**
You're joining a **live, successful project** with:
- ✅ **Real Impact**: Building intellectual sovereignty for Africa
- ✅ **Modern Tech Stack**: Next.js, TypeScript, Tailwind CSS
- ✅ **Professional Standards**: Clean code, documentation, best practices
- ✅ **Growth Opportunity**: Expand from frontend to full-stack
- ✅ **Meaningful Work**: Contributing to African intellectual independence

### **Get Started Today**
```bash
git clone https://github.com/Triumph-KT/palaver-institute-website.git
cd palaver-institute
git checkout mvp-branch
cd frontend && npm install && npm run dev
# Visit http://localhost:3000 and start building the future!
```

---

**Built with ❤️ by the Palaver Institute development team**

*Where African Minds Convene to Solve Global Challenges*

🌍 **Live Site**: https://palaverinstitute.org  
📚 **Documentation**: `/docs/onboarding/developer-guide.md`  
🔄 **Development Branch**: `mvp-branch`  
📧 **Contact**: info@palaverinstitute.org

---

*Last updated: October 23, 2025 - Post successful deployment and MVP branch setup*