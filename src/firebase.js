import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// 初期化
const firebaseConfig = {
    apiKey: "AIzaSyC_3glKPLvNQdaZbaPccLMAWdHE1navK48",
    authDomain: "chat-app-4548a.firebaseapp.com",
    projectId: "chat-app-4548a",
    storageBucket: "chat-app-4548a.appspot.com",
    messagingSenderId: "472561674327",
    appId: "1:472561674327:web:80c529551c5f991e7a9b12",
    measurementId: "G-QJBPXJP0VD"
};

// firebaseの初期化
const app = initializeApp(firebaseConfig);
// データベースの初期化
const db = getFirestore(app);
// 認証情報の初期化
const auth = getAuth(app);
// ストレージの初期化
const storage = getStorage(app);
// どこでも使えるようにする
export{db,auth,storage};
