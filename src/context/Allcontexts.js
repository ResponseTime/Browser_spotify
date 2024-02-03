import allContext from "./allContext";

const Allcontexts = (props) => {
    const [audioSrc, setAudioSrc] = useState()
    return (
        <allContext.Provider value={{ audioSrc, setAudioSrc }}>
            {props.children}
        </allContext.Provider>
    )
}

export default Allcontexts