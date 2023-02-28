import { useState } from "react";
import storage from "./firebaseConfig";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";

function App() {
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  }

  const handleUpload = () => {
    if(!file){
      alert('Please choose a file first');
    }

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        //update progress 
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  }

  console.log(file);
  return (
    <div>
      <input type="file" accept="image/*"  onChange={handleChange}/>
      <button onClick={handleUpload}>Upload to Firebase</button>
      <p>{percent} % done</p>
    </div>
  );
}

export default App;
