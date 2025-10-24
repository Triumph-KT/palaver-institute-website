# 🚀 NEW DEVELOPER ONBOARDING

**Welcome to the Palaver Institute Frontend - Modern Next.js Application**

## ⚡ **5-Minute Quick Start**

```bash
# 1. Install dependencies
npm install

# 2. Start development
npm run dev

# 3. Open http://localhost:3000
```

**You should see a beautiful website with working navigation!**

## 📁 **Understanding the Codebase**

### **What You're Working With:**
- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** throughout (100% type-safe)
- ✅ **Tailwind CSS** for styling
- ✅ **Lucide React** for icons
- ✅ **Component-based architecture**

### **Key Files to Know:**

```
src/
├── app/
│   ├── page.tsx          # 📄 Homepage (26 lines)
│   ├── story/page.tsx    # 📄 Story page (44 lines)  
│   └── team/page.tsx     # 📄 Team page (44 lines)
│
├── components/
│   ├── ui/               # 🎨 Base components (Button, Card, etc.)
│   ├── layout/           # 🏗️ Layout (Navigation, Footer)
│   └── sections/         # 📦 Page sections (Hero, About, etc.)
│
├── hooks/                # 🎣 Custom React hooks
├── lib/                  # 🛠️ Utilities & design tokens
└── types/                # 📝 TypeScript definitions
```

## 🎯 **Your First Task (5 minutes)**

**Add a new button to the homepage:**

1. **Open**: `src/app/page.tsx`
2. **Find**: The Hero section
3. **Import**: `import { Button } from '@/components/ui';`
4. **Add**: `<Button variant="solid" color="primary">My Button</Button>`
5. **Save**: See it live reload!

## 🎨 **Using the Design System**

### **Colors:**
```tsx
// Use Palaver brand colors:
className="bg-palaver-orange-500"    // Primary orange
className="text-palaver-blue-500"     // Accent blue
className="bg-palaver-purple-500"     // Warm purple
```

### **Components:**
```tsx
import { Button, Card } from '@/components/ui';

<Button variant="solid" color="primary" size="lg">
  Professional Button
</Button>

<Card>
  <Card.Header>
    <Card.Title>My Card</Card.Title>
  </Card.Header>
  <Card.Content>
    Card content here
  </Card.Content>
</Card>
```

## 🛠️ **Development Workflow**

### **Adding a New Page:**
```bash
# 1. Create page file
src/app/my-page/page.tsx

# 2. Use existing components
import { Navigation, Footer } from '@/components/layout';

export default function MyPage() {
  return (
    <div>
      <Navigation />
      <main>
        <h1>My New Page</h1>
      </main>
      <Footer />
    </div>
  );
}
```

### **Adding a New Component:**
```bash
# 1. Create component
src/components/ui/MyComponent/MyComponent.tsx

# 2. Export it
src/components/ui/index.ts
```

## 🚨 **Important Rules**

### **✅ DO:**
- Use Tailwind CSS classes for styling
- Import from `@/components/ui` for base components
- Add TypeScript interfaces for all props
- Use Lucide React for icons
- Follow the existing patterns

### **❌ DON'T:**
- Touch anything in `_legacy/` folder (it's archived)
- Use custom CSS classes (use Tailwind instead)
- Use Font Awesome icons (use Lucide React)
- Create components without TypeScript types

## 🎓 **Learning the Codebase**

### **Study These Files (in order):**
1. `src/app/page.tsx` - See how pages are structured
2. `src/components/sections/Hero.tsx` - See modern components
3. `src/components/ui/Button/Button.tsx` - See component patterns
4. `src/types/common.ts` - Understand TypeScript patterns

### **Key Patterns:**
```tsx
// 1. Every component has TypeScript interfaces
interface MyComponentProps {
  title: string;
  children: React.ReactNode;
}

// 2. Components use Tailwind classes
<div className="bg-white rounded-lg shadow-lg p-6">

// 3. Error boundaries wrap everything
<ErrorBoundary context="My Component">
  <MyComponent />
</ErrorBoundary>

// 4. Imports use path aliases
import { Button } from '@/components/ui';
import { useAuth } from '@/hooks';
```

## 🚀 **You're Ready!**

The codebase is **clean, modern, and ready for development**. Every file follows the same patterns, uses the same tools, and has clear organization.

**Start with the 5-minute task above, then explore the components!**

---

**Questions? Check the README files in each folder for specific guidance.**
