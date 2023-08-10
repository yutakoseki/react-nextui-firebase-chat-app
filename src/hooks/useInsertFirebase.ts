import { updateDoc, doc, setDoc } from "firebase/firestore"; // Firebase Firestore関連の必要な関数をインポート
import { db } from "../firebase";

interface User {
    userid: string;
    username: string;
    password: string;
    photoURL: string;
}

const useInsertFirebase = () => {

    // ドキュメントを取得
    const signup = async (collectionName: string, documentid: string, saveData: User) => {
        try {
            await setDoc(doc(db, collectionName, documentid), { ...saveData });
            return true;
        } catch (error) {
            console.error("登録に失敗しました:", error);
            return false;
        }
    };

    return {
        signup,
    };
};

export default useInsertFirebase;
