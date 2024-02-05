import allContext from "./allContext";
import { useState } from "react";
const Allcontexts = (props) => {
    const [audioSrc, setAudioSrc] = useState()
    const [globalIndex, setGlobalIndex] = useState(0)
    const [names, setNames] = useState({ songname: '', artist: '' })
    const [alert, setAlert] = useState(false)
    const [cumulatedData, setCummulativeData] = useState(null)
    const [tempSong, setTempSong] = useState(null)
    return (
        <allContext.Provider value={{ audioSrc, setAudioSrc, globalIndex, setGlobalIndex, names, setNames, alert, setAlert, cumulatedData, setCummulativeData, tempSong, setTempSong }}>
            {props.children}
        </allContext.Provider>
    )
}

export default Allcontexts