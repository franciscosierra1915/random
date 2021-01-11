import React, {useState} from 'react';
import './App.css';
import { storage } from './firebase';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {

  const [fileURL, setFileURL] = useState(null);
  // const [users, setUsers] = useState([]);

  const onChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file)
    setFileURL(await fileRef.getDownloadURL())
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const username = e.target.username.value;
  //   if(!username){
  //     return
  //   }
  //   db.collection("users").doc(username).set({
  //     name: username
  //   })
  // }

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const usersCollection = await db.collection("users").get();
  //     setUsers(usersCollection.docs.map(doc => {
  //       return doc.data()
  //     }))
  //   };
  //   fetchUsers();
  // }, [])

  const screen = document.getElementById('App');
  html2canvas(screen).then((canvas) => {const imgData = canvas.toDataURL('image/png'); const pdf = new jsPDF(); pdf.addImage(imgData, 'PNG', 0, 0); pdf.save("download.pdf");});
  return (
    <div className="App" id="App">
      <button onClick={onChange}>Click!</button>
      <ul>
      <a href={fileURL}><p>{fileURL}</p></a>
      </ul>
    </div>
  );
}

export default App;
