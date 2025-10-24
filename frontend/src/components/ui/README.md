# 🎨 UI Component Library

Base UI components following the Palaver Institute design system.

## Available Components:

- `Button` - Flexible button with variants
- `Card` - Compound card component
- `ErrorBoundary` - Error handling wrapper
- `Loading` - Various loading states

## Usage:

```tsx
import { Button, Card } from '@/components/ui';

<Button variant="solid" color="primary" size="lg">
  Click me
</Button>

<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
  <Card.Content>
    Content here
  </Card.Content>
</Card>
```

## Design System:

All components use Tailwind CSS with Palaver brand colors:
- `palaver-orange-500` (primary)
- `palaver-blue-500` (secondary)  
- `palaver-purple-500` (accent)
