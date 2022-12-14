import { query, orderBy, where, collection, getDocs } from "@firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {db} from "/androbots-proyecto/src/utils/firebaseConfig.js"

export const firestoreFetch = async (idCategory) => {
  
      let q;
      if(idCategory){
          q = query(collection(db, 'productos'), where ('categoryId', '==' , idCategory ))

      } else {
          q = query (collection(db, "productos"), orderBy('precio'));
      }
     
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "productos", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      let result = {
        id: idItem,
        ...docSnap.data()
      }
   
      return result;
    } else {

      console.log("No such document!");
    }
}
