# 🚀 Palaver Institute Frontend

**Modern Next.js 14 Application with TypeScript & Tailwind CSS**

## 🎯 **Quick Start for New Developers**

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Visit: http://localhost:3000
```

## 📁 **Project Structure**

```
src/
├── app/                    # Next.js App Router (pages)
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── story/page.tsx     # Story page
│   ├── team/page.tsx      # Team page
│   └── globals.css        # Global styles (Tailwind + essentials)
│
├── components/            # React Components
│   ├── ui/               # Base UI components (Button, Card, etc.)
│   ├── layout/           # Layout components (Navigation, Footer)
│   ├── sections/         # Page sections (Hero, About, etc.)
│   └── ContactForm.tsx   # Contact form component
│
├── hooks/                # Custom React hooks
│   ├── useAuth.ts        # Authentication hook
│   └── index.ts          # Hook exports
│
├── lib/                  # Utility libraries
│   ├── design-tokens.ts  # Design system tokens
│   └── index.ts          # Library exports
│
├── types/                # TypeScript type definitions
│   ├── common.ts         # Common types
│   ├── user.ts           # User-related types
│   ├── auth.ts           # Authentication types
│   └── index.ts          # Type exports
│
└── _legacy/              # 🗂️ ARCHIVED: Old HTML/CSS code (DO NOT USE)
```

## 🎨 **Design System**

### **Colors (Palaver Brand)**
```tsx
// Use these Tailwind classes:
bg-palaver-orange-500    // Primary orange
bg-palaver-blue-500      // Accent blue  
bg-palaver-purple-500    // Warm purple
text-palaver-orange-500  // Orange text
```

### **Components**
```tsx
import { Button, Card } from '@/components/ui';
import { Navigation, Footer } from '@/components/layout';
import { Hero, About } from '@/components/sections';

// Usage:
<Button variant="solid" color="primary" size="lg">
  Click me
</Button>

<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
  <Card.Content>Content here</Card.Content>
</Card>
```

## 🛠️ **Development Commands**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run type-check   # Check TypeScript errors
npm run lint         # Run ESLint
npm run test         # Run tests
```

## 📝 **Adding New Features**

### **New Page:**
```bash
# 1. Create page file
src/app/new-page/page.tsx

# 2. Use existing components
import { Navigation, Footer } from '@/components/layout';
```

### **New Component:**
```bash
# 1. Create component
src/components/ui/NewComponent/NewComponent.tsx

# 2. Export in index
src/components/ui/index.ts
```

### **New Section:**
```bash
# 1. Create section
src/components/sections/NewSection.tsx

# 2. Use in pages
import { NewSection } from '@/components/sections';
```

## ⚠️ **Important Notes**

- **Use Lucide React icons** (not Font Awesome)
- **Use Tailwind CSS classes** (not custom CSS)
- **All components are TypeScript** with proper interfaces
- **`_legacy/` folder is archived** - DO NOT USE for new development

## 🎯 **Current Features**

- ✅ **Homepage** with Hero, About, Research, Team, Contact sections
- ✅ **Story page** with timeline and founding story
- ✅ **Team page** with founder profile and team structure
- ✅ **Navigation** with mobile menu
- ✅ **Contact form** with validation
- ✅ **Error boundaries** for robust error handling
- ✅ **Loading states** for future API integration
- ✅ **TypeScript** throughout for type safety

## 🚀 **Ready for Extension**

The architecture is ready for:
- Authentication systems
- Dashboard components
- API integration  
- State management
- Advanced features

---

**Built with ❤️ for African intellectual sovereignty**
