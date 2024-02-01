import { useEffect } from 'react';
import './App.css';
import Player from './components/Player';
import Playlist from './components/Playlist';

function App() {
  const handle = (e) => {
    e.preventDefault();
    const req = indexedDB.open("datastore", 1)
    req.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore("datastore", {
        autoIncrement: true,
      })
    }
    req.onerror = (event) => {
      console.error(event.target.result)
    }
    req.onsuccess = (event) => {
      const db = event.target.result;
      console.log(db)
      const transaction = db.transaction(["datastore"], "readwrite");
      const obStore = transaction.objectStore("datastore")
      obStore.add({ 1: e.target.files[0] })
    }
  }
  return (
    <>
      <input type="file" name="song" id="song" onChange={(e) => { handle(e) }} />
      <Playlist />
      <Player />
    </>
  );
}

export default App;
