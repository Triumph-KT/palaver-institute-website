# 🎣 Custom Hooks

React hooks for the Palaver Institute application.

## Available Hooks:

- `useAuth` - Authentication state and methods

## Usage:

```tsx
import { useAuth } from '@/hooks';

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();
  
  if (isAuthenticated) {
    return <div>Welcome {user?.firstName}!</div>;
  }
  
  return <button onClick={() => login(credentials)}>Login</button>;
}
```

## Adding New Hooks:

1. Create hook file: `useNewHook.ts`
2. Export in `index.ts`
3. Use in components with proper TypeScript types
