# Car Brands App 🚗

Aplicativo em React Native com Expo que permite login, listagem de marcas de carros e visualização de seus modelos.

---

## 📦 Tecnologias usadas

- Expo + TypeScript
- React Navigation (Stack Navigator)
- Context API + AsyncStorage para autenticação
- React Hook Form para formulários
- Fetch API para consumo de APIs
- NativeWind para estilização
- Expo Linear Gradient para efeitos visuais

---

## 🚀 Funcionalidades

1. **Login**

   - Endpoint: `POST https://test-api-y04b.onrender.com/signIn`
   - Usuário: `teste`, Senha: `123`
   - Salvamento dos dados em `AsyncStorage` e `Context`

2. **Home**

   - Exibe o nome do usuário
   - Listagem de marcas via: `GET https://parallelum.com.br/fipe/api/v1/carros/marcas`

3. **Modelos de carros**

   - Após selecionar uma marca, são listados os modelos via:
     `GET https://parallelum.com.br/fipe/api/v1/carros/marcas/{brandId}/modelos`

4. **Logout**
   - Remove dados do AsyncStorage e limpa o Context, retorna ao login

---

## 🔧 Como rodar o projeto

### Pré-requisitos

- Node.js >= 16
- Expo CLI: `npm install -g expo-cli`

### Passos

```bash
git clone https://github.com/Rychillie/car-brands-app.git
cd car-brands-app

npm install
# ou
yarn install

npx expo start
```

Use o Expo Go para rodar no dispositivo ou emulador.

---

## 📝 Estrutura do Repositório

```
car-brands-app/
├── .gitignore
├── README.md
├── App.tsx
├── app.json
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── index.ts
├── metro.config.js
├── nativewind-env.d.ts
├── src/
│   ├── api/
│   │   ├── constants.ts
│   │   ├── index.tsx
│   │   └── use-fetch.tsx
│   ├── components/
│   │   ├── back-button.tsx
│   │   ├── header.tsx
│   │   ├── index.tsx
│   │   ├── item-list.tsx
│   │   ├── layout.tsx
│   │   ├── list-items.tsx
│   │   └── skeleton.tsx
│   ├── context/
│   │   └── auth-context.tsx
│   ├── screens/
│   │   ├── home-screen.tsx
│   │   ├── index.tsx
│   │   ├── login-screen.tsx
│   │   └── models-screen.tsx
│   ├── theme/
│   │   ├── colors.ts
│   │   └── index.ts
│   └── types/
│       ├── api.ts
│       ├── index.ts
│       └── navigation.ts
└── assets/
    ├── adaptive-icon.png
    ├── arrow-back.png
    ├── favicon.png
    ├── icon.png
    ├── rychillie.png
    ├── signout.png
    ├── splash-icon.png
    └── tailwind.css
```

---

## 🧩 Estrutura geral

- `src/context/auth-context.tsx` — Contexto de autenticação
- `src/screens/login-screen.tsx` — Tela de login
- `src/screens/home-screen.tsx` — Tela de listagem de marcas
- `src/screens/models-screen.tsx` — Tela de listagem de modelos de uma marca
- `src/api/` — Wrapper de chamadas HTTP via Fetch API
- `src/components/` — Componentes reutilizáveis (Layout, Header, ItemList, etc.)
- `src/types/` — Tipos TypeScript (ex.: `Brand`, `Model`, `User`, `Navigation`)

---

## 💬 Contato

- Github: `https://github.com/rychillie`
- Website: `https://rychillie.net/`

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
