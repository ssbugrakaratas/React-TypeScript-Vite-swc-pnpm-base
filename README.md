# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

<!-- my-app/
│── src/
│   ├── api/               # API çağrıları (axios, fetch vb.)
│   │   ├── index.ts       # Genel API ayarları
│   │   ├── userApi.ts     # Örnek API modülü
│   │   ├── eventApi.ts    # Başka bir API modülü
│   │
│   ├── assets/            # Statik dosyalar (resimler, ikonlar, fontlar)
│   │   ├── images/
│   │   ├── icons/
│   │   ├── fonts/
│   │
│   ├── components/        # UI Bileşenleri (button, card, modal vb.)
│   │   ├── common/        # Genel bileşenler (Button, Input, Modal vb.)
│   │   ├── layout/        # Sayfa düzeni bileşenleri (Header, Sidebar)
│   │   ├── ui/            # Özel UI bileşenleri
│   │   ├── index.ts       # Bileşenleri dışa aktarma
│   │
│   ├── config/            # Uygulama konfigürasyonları (env, constants vb.)
│   │   ├── constants.ts   # Sabit değerler
│   │   ├── routes.ts      # Route path’leri
│   │
│   ├── hooks/             # Özel React Hook'ları (custom hooks)
│   │   ├── useAuth.ts     # Kullanıcı yetkilendirme hook'u
│   │   ├── useFetch.ts    # API çağrıları için hook
│   │
│   ├── pages/             # Sayfa bileşenleri
│   │   ├── Home/          # Home Page bileşeni
│   │   ├── Login/         # Login Page bileşeni
│   │   ├── Dashboard/     # Dashboard Page bileşeni
│   │
│   ├── services/          # İş mantığını yöneten servisler
│   │   ├── authService.ts # Kullanıcı yetkilendirme servisi
│   │   ├── eventService.ts# Etkinlik servisleri
│   │
│   ├── store/             # Global state yönetimi (Redux, Zustand vb.)
│   │   ├── slices/        # Redux slice'ları
│   │   ├── store.ts       # Store yapılandırması
│   │
│   ├── styles/            # Genel ve global stiller
│   │   ├── globals.css    # Global CSS dosyası
│   │   ├── theme.ts       # Tema ayarları (styled-components, tailwind vb.)
│   │
│   ├── types/             # TypeScript arayüzleri ve türleri
│   │   ├── userTypes.ts   # Kullanıcı ile ilgili tipler
│   │   ├── eventTypes.ts  # Event ile ilgili tipler
│   │
│   ├── utils/             # Yardımcı fonksiyonlar (dateFormatter, debounce vb.)
│   │   ├── dateUtils.ts   # Tarih formatlama fonksiyonları
│   │   ├── storage.ts     # LocalStorage ve SessionStorage yönetimi
│   │
│   ├── App.tsx            # Uygulamanın ana bileşeni
│   ├── index.tsx          # React'in kök bileşeni
│
│── public/                 # HTML şablonu ve statik dosyalar
│── .env                     # Çevresel değişkenler
│── tsconfig.json             # TypeScript yapılandırması
│── package.json              # Bağımlılıklar
│── README.md                 # Proje açıklaması -->
