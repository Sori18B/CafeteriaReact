import db from "./FBconfig";
import {collection, getDocs, query, doc,addDoc, deleteDoc, updateDoc} from "firebase/firestore";

export const guardar= (nom, ed, contra, correo)=>{
  addDoc(collection(db, 'usuarios'), {Nombre:nom,Edad:ed, Contraseña:contra, Correo:correo });  
}
export const consultarCarrito = async () => {
    const result = await getDocs(collection(db, 'carrito'));
    return result.docs.map(doc => doc.data());
}

export const borrar = async (id) => {
    await deleteDoc(doc(db, 'carrito', id));
};

export const actualizar =async(id, nom,contra)=>{
    await updateDoc(doc(db, 'usuarios', id), {Nombre:nom,Contraseña:contra})
}
