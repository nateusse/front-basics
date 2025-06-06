##  🔥 Firebase + ⚛️  react restaurant app

## 🧱 Stack 
| Tech | Version |
|------| -------|
| Vite | ^6.3.5 |
|React | ^19.1.0|
| Firebase | ^11.8.1 |

## ⚙️ Getting Started

Clone the repository and run the following commands to start the project:

```
# Install dependencies
npm install

# Start the development server
npm run dev

```

Once running, open your browser and go to:
```
http://localhost:5173/ 
```

## 📦 Project Structure

```
/
├── .vite/               # Vite internal cache (auto-generated)
├── node_modules/        # Dependencies
├── public/              # Static assets
├── src/                 # Application source code
│   └── ...              # Add components, pages, Firebase config here
├── .gitignore
├── eslint.config.js     # ESLint configuration
├── index.html           # Main HTML entry
├── package.json
├── vite.config.js       # Vite configuration
└── README.md

```

## 🔐 Firebase Integration

This project includes Firebase. To use it:

1. Set up your Firebase project in the Firebase Console

2. Create a file at src/firebase/config.js and add your config:

```
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MSG_ID",
  appId: "YOUR_APP_ID"
};

export const app = initializeApp(firebaseConfig);
```


## 📜 License

MIT — free to use and modify.


