Here's your updated `README.md` with detailed documentation for the `Button` and `Card` components included under the **📚 Components** section:



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
      <Card
        companyName="Devflow"
        jobTitle="Frontend Engineer"
        salary="$80k - $100k"
        location="Remote"
        jobTags={['React', 'TypeScript', 'Tailwind']}
        primaryActionLabel="Apply Now"
      />
    </div>
  );
}
```

---

## 📚 Components

### 🔘 `Button`

A flexible button component supporting multiple variants, sizes, icons, and loading state.

#### Props

| Prop          | Type                          | Default     | Description                                  |
|---------------|-------------------------------|-------------|----------------------------------------------|
| `children`    | `React.ReactNode`             | —           | Button text or content                       |
| `variant`     | `'primary' \| 'secondary' \| 'gradient'` | `'primary'` | Style variant                                |
| `size`        | `'sm' \| 'md' \| 'lg'`        | `'md'`      | Size of the button                           |
| `className`   | `string`                      | `""`        | Additional Tailwind/utility classes          |
| `onClick`     | `() => void`                  | —           | Click handler                                |
| `icon`        | `React.ReactNode`             | —           | Optional icon to display                     |
| `iconPosition`| `'left' \| 'right'`           | `'left'`    | Position of the icon                         |
| `isLoading`   | `boolean`                     | `false`     | Show loading spinner                         |
| `disabled`    | `boolean`                     | `false`     | Disable the button                           |

#### Example

```tsx
<Button
  variant="gradient"
  icon={<FiLogOut />}
  iconPosition="left"
  onClick={() => console.log('Logging out')}
>
  Logout
</Button>
```

---

### 💼 `Card`

A job listing card with company info, job title, tags, and action button.

#### Props

| Prop                 | Type                      | Description                                      |
|----------------------|---------------------------|--------------------------------------------------|
| `companyName`        | `string`                  | Name of the company                              |
| `companyLogo`        | `string \| ReactNode`     | Company logo image URL or custom element        |
| `postedTime`         | `string`                  | When the job was posted                          |
| `jobTitle`           | `string`                  | Title of the job                                 |
| `jobTags`            | `string[]`                | Skills or tags                                   |
| `salary`             | `string`                  | Salary range                                     |
| `location`           | `string`                  | Job location                                     |
| `primaryActionLabel` | `string`                  | Label of the call-to-action button               |
| `primaryActionHref`  | `string`                  | Link for the action button                       |
| `isSaved`            | `boolean`                 | Whether the job is saved                         |
| `className`          | `string`                  | Additional Tailwind classes for card             |
| `titleClassName`     | `string`                  | Classes for title                                |
| `tagClassName`       | `string`                  | Classes for tags                                 |

#### Example

```tsx
<Card
  companyName="Devflow Inc."
  companyLogo={<FiLogOut />} // Supports both image URL or JSX
  postedTime="2 days ago"
  jobTitle="Senior Full Stack Developer"
  jobTags={['React', 'Node.js', 'GraphQL']}
  salary="$120k - $140k"
  location="San Francisco, CA"
  primaryActionLabel="Apply Now"
  primaryActionHref="/jobs/123"
  isSaved={true}
/>
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



Let me know if you want to add badges, contribution guidelines, or docs for more components like `Input`, `Modal`, etc.