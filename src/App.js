import './App.css';
import { useContext, useEffect } from 'react';
import Player from './components/Player';
import Playlist from './components/Playlist';
import Upload from './components/Upload';
import allContext from './context/allContext';
import Alert from './components/Alert';
function App() {

  const context = useContext(allContext)
  const { alert, audioSrc } = context
  return (
    <>
      {alert && <Alert />}
      <Upload />
      <Playlist />
      <Player src={audioSrc} />
    </>
  );
}

export default App;
