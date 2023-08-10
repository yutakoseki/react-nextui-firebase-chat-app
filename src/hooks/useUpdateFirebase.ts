import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore"; // Firebase Firestore関連の必要な関数をインポート
import { db } from "../firebase";

interface User {
    userid: string;
    username: string;
}

const useUpdateFirebase = () => {

    // ドキュメントを取得
    const update = async (collectionName: string, documentid: string, saveData: User) => {
        try {
            console.log(saveData);
            updateDoc(doc(db, collectionName, documentid), { ...saveData });
            return true;
        } catch (error) {
            console.error("ドキュメントの更新中にエラーが発生しました:", error);
            return false;
        }
    };

    return {
        update,
    };
};

export default useUpdateFirebase;
