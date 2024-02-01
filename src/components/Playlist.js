import React from 'react'
import SongItem from './SongItem'

const Playlist = () => {
    const playlist = [
        {
            "song": "mourning",
            "artist": "post malone",
            "time": new Date().toISOString()
        },
        {
            "song": "mourning",
            "artist": "post malone",
            "time": new Date().toISOString()
        },
        {
            "song": "mourning",
            "artist": "post malone",
            "time": new Date().toISOString()
        },
        {
            "song": "mourning",
            "artist": "post malone",
            "time": new Date().toISOString()
        }
    ]
    return (
        <div className='playlist-wrapper'>
            {playlist.map((play) => {
                return <SongItem item={play} />
            })}
        </div>
    )
}

export default Playlist
