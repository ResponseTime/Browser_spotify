import './App.css';
import { useContext, useEffect } from 'react';
import Player from './components/Player';
import Playlist from './components/Playlist';
import Upload from './components/Upload';
import allContext from './context/allContext';
function App() {

  const context = useContext(allContext)
  const { audioSrc } = context
  return (
    <>
      <Upload />
      <Playlist />
      <Player src={audioSrc} />
    </>
  );
}

export default App;
