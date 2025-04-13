Here’s a clean and professional `README.md` you can use for your **devflow-ui** component library. It includes setup instructions, usage examples, and development notes:

---

```md
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
# If published to npm
npm install devflow-ui

# OR for local development, link it
cd devflow-ui
npm link

# In your consuming project
npm link devflow-ui
```

---

## 📦 Usage

```tsx
import { Button, Card } from 'devflow-ui';

export default function App() {
  return (
    <div className="p-4">
      <Card>
        <Button variant="primary" onClick={() => alert('Hello!')}>
          Click Me
        </Button>
      </Card>
    </div>
  );
}
```

---

## 🛠 Local Development

To test locally:

1. Build the library:
   ```bash
   npm run build:ui
   ```

2. Link the package:
   ```bash
   npm link
   ```

3. Link it in your consuming project:
   ```bash
   npm link devflow-ui
   ```

4. Restart your dev server in the consuming app (e.g., Next.js).

---

## 📂 Project Structure

```
devflow-ui/
│
├── src/
│   └── lib/
│       └── ui/
│           ├── Button.tsx
│           ├── Card.tsx
│           └── index.ts     # Exports all components
│
├── dist/                    # Output directory from build
├── package.json
└── tsconfig.json
```

---

## 🔧 Scripts

- `npm run build:ui` - Build the component library (ESM + CJS + types)
- `npm run dev` - Start Next.js dev server for previewing
- `npm run lint` - Lint the code
- `npm version patch/minor/major` - Bump version

---

## 📤 Publishing (Optional)

```bash
# Automatically builds and publishes with new version
npm version patch    # or minor / major
npm publish --access public
```

Make sure to:
- Update the version before each publish.
- The `dist/` directory is included in `files`.

---

## 📃 License

MIT © [Your Name]
```

---

Let me know if you'd like it tailored to a monorepo setup or include badges (like version, license, etc.).