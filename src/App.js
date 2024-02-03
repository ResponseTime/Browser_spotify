import allContext from './context/allContext';
import { useContext } from 'react';
import './App.css';
import Player from './components/Player';
import Playlist from './components/Playlist';
import Allcontexts from './context/Allcontexts';

function App() {
  const context = useContext(allContext)
  const { audioSrc, setAudioSrc } = context
  const handle = (e) => {
    const filereader = new FileReader();
    filereader.addEventListener('load', () => {
      const data = filereader.result;
      setAudioSrc(data)
      console.log(data)
    })
    filereader.readAsDataURL(e.target.files[0])
  }
  return (
    <>
      <Allcontexts>
        <input type="file" name="song" id="song" onChange={(e) => { handle(e) }} />
        <Playlist />
        <Player src={audioSrc} />
      </Allcontexts>
    </>
  );
}

export default App;
