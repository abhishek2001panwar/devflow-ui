

# 🧩 Devflow UI

A lightweight and reusable component library built with **React** and **Tailwind CSS**, designed to speed up UI development across Devflow projects.

## ✨ Features

- ⚛️ Built with React 19+
- 🎨 Styled using Tailwind CSS 4
- ⚡️ Bundled with tsup (ESM + CJS)
- 📦 TypeScript support with `.d.ts` typings
- 🛠 Easy to develop and extend

---

## 🚀 Installation

```bash
npm install devflow-ui

## 📦 Usage

import { Button } from 'devflow-ui';

export default function App() {
  return (
    <div className="p-4">
      <Button variant="gradient" size="lg" onClick={() => alert('Clicked')} icon={<FiSend />}>
        Click Me
      </Button>
    </div>
  );
}
```

---

## 📚 Components

### 🔘 `Button`

A highly customizable button component using inline styles with hover animations, gradients, and loading state.

#### Props

| Prop           | Type                              | Default     | Description                                      |
|----------------|-----------------------------------|-------------|--------------------------------------------------|
| `children`     | `React.ReactNode`                 | —           | The content inside the button                   |
| `variant`      | `'primary' \| 'secondary' \| 'gradient'` | `'primary'` | Visual style of the button                      |
| `size`         | `'sm' \| 'md' \| 'lg'`            | `'md'`      | Button size                                     |
| `style`        | `React.CSSProperties`             | —           | Inline custom styles                            |
| `onClick`      | `() => void`                      | —           | Button click handler                            |
| `icon`         | `React.ReactNode`                 | —           | Optional icon                                   |
| `iconPosition` | `'left' \| 'right'`               | `'left'`    | Icon placement relative to children             |
| `isLoading`    | `boolean`                         | `false`     | Shows a spinning loader                         |
| `disabled`     | `boolean`                         | `false`     | Disables the button                             |

#### Example

```tsx
import { FiSend } from 'react-icons/fi';
import { Button } from 'devflow-ui';

<Button
  variant="primary"
  size="sm"
  icon={<FiSend />}
  isLoading={false}
  onClick={() => console.log('Sent')}
>
  Send
</Button>
```

---
## 🧪 Example Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="gradient">Gradient</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button isLoading>Loading...</Button>
<Button disabled>Disabled</Button>
```

---

## 📁 File Structure

```bash
components/
└── Button.tsx
```

---

## 🧠 Notes

- You can easily extend the styling by integrating Tailwind, Styled Components, or external CSS frameworks.
- Icon support is optional and works well with libraries like `react-icons`.

---

## 📝 License

MIT License. Free to use in personal and commercial projects.


