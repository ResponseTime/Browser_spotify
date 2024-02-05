import React from 'react'
import allContext from '../context/allContext';
import { useContext } from 'react';
const SongItem = ({ item }) => {
    const context = useContext(allContext)
    const { setAudioSrc, setAlert, setTempSong } = context
    const handle = (item) => {
        setTempSong(item.songname)
        setAudioSrc(item.data)
        setAlert(true)
    }

    return (
        <div className='song-tab'>
            <div className="info">
                <span>{item.songname}</span>
                <span>{item.artist}</span>
                <span>{item.time}</span>
            </div>
            <div className="play" onClick={() => { handle(item) }}>
                <span class="material-symbols-outlined">
                    play_circle
                </span>
            </div>
        </div>
    )
}

export default SongItem
