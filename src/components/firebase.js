
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database";


const firebaseConfig = {
        apiKey: "AIzaSyACe5GJSoUUIHpbkSiZkclwXwe9welFDOU",
        authDomain: "adoptuj-zwierzaka.firebaseapp.com",
        databaseURL: "https://adoptuj-zwierzaka-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "adoptuj-zwierzaka",
        storageBucket: "adoptuj-zwierzaka.appspot.com",
        messagingSenderId: "124043145125",
        appId: "1:124043145125:web:485f522898be28234d024c",
        measurementId: "G-TXP8LBD2CJ"
};


export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

