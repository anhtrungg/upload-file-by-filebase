import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";

const app = initializeApp ({
    apiKey: "AIzaSyC60OgxZVaguYRRokSWCGOlkhGXP4gq-8A",
   authDomain: "bird-trading.firebaseapp.com",
   projectId: "bird-trading",
   storageBucket: "bird-trading.appspot.com",
   messagingSenderId: "835603862110",
   appId: "1:835603862110:web:c3aa32636c05ecc76d9acf",
   measurementId: "G-KYH307QWZ0"
});

const storage = getStorage(app);

export default storage;