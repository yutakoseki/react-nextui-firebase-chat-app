import { collection, query, where, getDocs } from "firebase/firestore"; // Firebase Firestore関連の必要な関数をインポート
import { db } from "../firebase";

interface User {
    userid: string;
    username: string;
    password: string;
    photoURL: string;
    language: string;
}

// セレクト系全般
const useSelectFirebase = () => {
    // ドキュメントを取得
    const select = async (collectionName: string, fieldName: string, fieldValue: string) => {
        // コレクションを指定
        const usersRef = collection(db, collectionName);
        // フィールドの条件を指定
        const q = query(usersRef, where(fieldName, "==", fieldValue));
        // 取得したものをスナップショットに格納
        const querySnapshot = await getDocs(q);
        // 展開したdocデータを格納する配列
        const data:User[] = [];
        // 取得したものを表示
        querySnapshot.forEach((doc) => {
            const userData = doc.data() as User;
            data.push(userData);
        });
        return data;
    };

    return {
        select,
    };
};


// ユーザーIDとパスワードでログインユーザーを取得
const useLoginUserFirebase = () => {
        // ドキュメントを取得
        const selectLoginUser = async (collectionName: string, userid: string, useridValue: string, password: string, passwordValue: string) => {
            // コレクションを指定
            const usersRef = collection(db, collectionName);
            // フィールドの条件を指定
            const q = query(usersRef, where(userid, "==", useridValue), where(password, "==", passwordValue));
            // 取得したものをスナップショットに格納
            const querySnapshot = await getDocs(q);
            // 展開したdocデータを格納する配列
            const data:User[] = [];
            // 取得したものを表示
            querySnapshot.forEach((doc) => {
                const userData = doc.data() as User;
                data.push(userData);
            });
            return data;
        };
    
        return {
            selectLoginUser,
        };
}

export {useSelectFirebase, useLoginUserFirebase};
