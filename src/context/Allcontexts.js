import allContext from "./allContext";
import { useState } from "react";
const Allcontexts = (props) => {
    const [audioSrc, setAudioSrc] = useState()
    const [globalIndex, setGlobalIndex] = useState(0)
    const [names, setNames] = useState({ songname: '', artist: '' })
    return (
        <allContext.Provider value={{ audioSrc, setAudioSrc, globalIndex, setGlobalIndex, names, setNames }}>
            {props.children}
        </allContext.Provider>
    )
}

export default Allcontexts