# React-native-app-test

## Is this setup correct?

Yes — your current project is a valid **Expo + TypeScript + NativeWind** starter.

You currently have:

- Expo SDK 54 + React Native 0.81
- TypeScript config
- NativeWind + Tailwind configured
- A basic `App.tsx` entry screen

That is a good baseline for building UI.

---

## How to move forward

Right now your app uses a single `App.tsx` file. To add **multiple pages, route groups, and dynamic routes**, the cleanest path is to adopt **Expo Router**.

### 1) Install and enable Expo Router

```bash
npm install expo-router
```

Update `package.json`:

```json
{
  "main": "expo-router/entry"
}
```

Update `app.json`:

```json
{
  "expo": {
    "plugins": ["expo-router"],
    "experiments": {
      "typedRoutes": true
    }
  }
}
```

Update `babel.config.js` plugins to include:

```js
plugins: ['expo-router/babel', 'react-native-worklets/plugin'];
```

> Keep `react-native-worklets/plugin` because your project already uses it.

### 2) Create the `app/` folder and pages

Example structure:

```txt
app/
  _layout.tsx
  index.tsx
  about.tsx
```

- `app/index.tsx` → `/`
- `app/about.tsx` → `/about`

### 3) Group routes (without URL segment)

Use parentheses in folder names:

```txt
app/
  (tabs)/
    _layout.tsx
    index.tsx
    discover.tsx
```

`(tabs)` is for code organization/layout; it does not appear in URL.

### 4) Dynamic routes

Use square brackets:

```txt
app/blog/[slug].tsx
```

This matches URLs like `/blog/first-post`.

Read param in screen:

```tsx
const { slug } = useLocalSearchParams<{ slug: string }>();
```

### 5) Nested layouts

Each folder can define its own `_layout.tsx` (Stack, Tabs, etc.).

---

## Recommended migration sequence

1. Keep current `App.tsx` working.
2. Install/enable Expo Router.
3. Add `app/index.tsx` first.
4. Add one static page (`about.tsx`).
5. Add one dynamic page (`blog/[slug].tsx`).
6. Add route groups/tabs once basic routing is stable.

---

## Troubleshooting tip

If imports from `expo-router` fail, make sure package installation completed and restart Metro with cache clear:

```bash
npx expo start -c
```
