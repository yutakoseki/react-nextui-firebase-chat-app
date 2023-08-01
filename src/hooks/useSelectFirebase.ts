import { collection, query, where, getDocs } from "firebase/firestore"; // Firebase Firestore関連の必要な関数をインポート
import { db } from "../firebase";

interface User {
    userid: string;
    username: string;
    password: string;
    photoURL: string;
    language: string;
}

const useSelectFirebase = () => {

    // ドキュメントを取得
    const getDocument = async (collectionName: string, userid: string, fieldName: string) => {
        // コレクションを指定
        const usersRef = collection(db, collectionName);
        // フィールドの条件を指定
        const q = query(usersRef, where(fieldName, "==", userid));
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
        getDocument,
    };
};

export default useSelectFirebase;
