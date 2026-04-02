# React-native-app-test

This project is configured with **Expo Router + TypeScript + NativeWind**.

## Routing structure

```txt
app/
  _layout.tsx
  about.tsx
  blog/
    [slug].tsx
  users/
    [id].tsx
  (auth)/
    login.tsx
  (tabs)/
    _layout.tsx
    index.tsx
    discover.tsx
    settings.tsx
```

## What's implemented

- **Static pages**
  - `/` (Home)
  - `/about`
- **Route group**
  - `/login` (file is `app/(auth)/login.tsx`; route group name is hidden from URL)
- **Dynamic pages**
  - `/blog/[slug]`
  - `/users/[id]`
- **Tabs group**
  - Home, Discover, Settings tabs under `app/(tabs)`

Each page includes content and links to demonstrate navigation between static and dynamic routes.

## Configuration checklist

- `package.json` uses `"main": "expo-router/entry"`
- `app.json` includes `"plugins": ["expo-router"]`
- `app.json` enables `"typedRoutes": true`
- `babel.config.js` includes:
  - `expo-router/babel`
  - `react-native-worklets/plugin`

## Run

```bash
npm install
npm run start
```

If Metro cache issues appear:

```bash
npx expo start -c
```
