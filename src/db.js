// // Import the functions you need from the SDKs you need


const firebaseConfig = {
    apiKey: "AIzaSyCTi_vh1CEEGOw_LCNxTYTaTHxVZjcqekY",
    authDomain: "bgp-web.firebaseapp.com",
    projectId: "bgp-web",
    storageBucket: "bgp-web.appspot.com",
    messagingSenderId: "123922962453",
    appId: "1:123922962453:web:8fb575a6d1d93f9d04561c",
    measurementId: "G-Q2BCZXTP3Q"
};

import { async } from "@firebase/util";
// // Initialize Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, addDoc, setDoc, writeBatch, deleteDoc, orderBy, query, startAfter, limit, where } from "firebase/firestore";


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();


// 取得集合
export const getCollectionList = async (params) => {
    const Col = collection(db, ...params);
    const Snapshot = await getDocs(Col);
    const returnList = Snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return returnList;
}



// 分頁取得集合
export const lazyGetCollectionList = async (params, orderBy_key = null, limit_count = 10, lastVisible = null) => {
    let query_list = [collection(db, ...params), limit(limit_count)]
    if (orderBy_key) {
        query_list.push(orderBy(orderBy_key))
    }
    if (lastVisible) {
        query_list.push(startAfter(lastVisible))
    }
    const Col = query(...query_list);
    const Snapshot = await getDocs(Col);
    const returnList = Snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    lastVisible = Snapshot.docs[Snapshot.docs.length - 1];
    return { current: returnList, next: lastVisible };
}


// 關鍵字的方式拿到集合
export const getCollectionListWithQuery = async (params_db, params_query = null, orderBy_key = null, lastVisible = null, limit_count = 10) => {
    let query_list = [collection(db, ...params_db), limit(limit_count)]

    if (orderBy_key) {
        if (typeof (orderBy_key) == typeof ("")) {

            query_list.push(orderBy(orderBy_key))
        } else {
            query_list.push(orderBy(...orderBy_key))

        }
    }

    if (params_query) {
        params_query.forEach(item => {
            query_list.push(where(...item))
        });
    }


    if (lastVisible) {
        query_list.push(startAfter(lastVisible))
    }
    console.log('query_list', query_list);
    const Col = query(...query_list);
    const Snapshot = await getDocs(Col);
    const returnList = Snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    lastVisible = Snapshot.docs[Snapshot.docs.length - 1];
    return { current: returnList, next: lastVisible };
}

// 新增文件到集合中PUSH
export const pushDocument2Collection = async (col_params, obj_data) => {
    try {
        let docRef = await addDoc(collection(db, ...col_params), obj_data);
        return docRef.id;
    } catch (err) {
        console.error("Error: ", err);
    }
}

// 新增用id新增文件到collection
export const setDocument2Collection = async (col_params, obj_data, merge = true) => {
    if ('id' in obj_data) {
        const id = obj_data.id;
        delete obj_data.id;
        try {
            return await setDoc(doc(db, ...col_params, id), obj_data, { merge });
        } catch (err) {
            // console.error("Error: ", err);
        }
    }
}

// 批次更新文件到collection
export const batchSetDocument2Collection = async (col_params, docs_array) => {
    docs_array = JSON.parse(JSON.stringify(docs_array));
    const batch = writeBatch(db);

    docs_array.forEach(doc_obj => {
        let id = doc_obj.id ?? _uuid();
        if ('id' in doc_obj) {
            delete doc_obj.id;
        }
        batch.set(doc(db, ...col_params, id), doc_obj, { merge: true });
        doc_obj.id = id;
    });
    try {
        await batch.commit();
    } catch (err) {
        console.error("Error: ", err);
    }

}


// 取得文件
export const getDocumentObject = async (params) => {
    const docRef = doc(db, ...params);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return ({ id: docSnap.id, ...docSnap.data() });
    } else {
        // doc.data() will be undefined in this case
        return null;
    }
}

export const deleteDocument = async (params) => {
    await deleteDoc(doc(db, ...params));
}

// 取的文件中的集合
export const getDocWithInsideCollection = async (doc_params, inside_col_params) => {
    const returnDocObj = await getDocumentObject(doc_params);
    const insideCollection = await getCollectionList([...doc_params, ...inside_col_params])
    return {
        ...returnDocObj,
        'collection': insideCollection
    }
}

// 上傳檔案
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
const _uuid = () => {
    let d = Date.now();
    if (
        typeof performance !== "undefined" &&
        typeof performance.now === "function"
    ) {
        d += performance.now(); //use high-precision timer if available
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
    );
};
export const uploadFile = async (file) => {
    const metadata = {
        contentType: 'image/png'
    };
    const file_name = _uuid();
    const storage = getStorage();
    const storageRef = ref(storage, `images/${file_name}.png`);
    const snapshot = await uploadBytesResumable(storageRef, file, metadata);
    // console.log('Uploaded a blob or file!', snapshot);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;

}

// 刪除檔案
export const deleteFile = async (file_path) => {
    const file_name = file_path.split("images%2F")[1].split("?")[0];
    console.log(`images/${file_name}`);
    const storage = getStorage();
    // Create a reference to the file to delete
    const desertRef = ref(storage, `${file_path}`);
    try {
        await deleteObject(desertRef);
        return true;
    } catch (error) {
        return false;
    }

}


