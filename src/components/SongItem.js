import React from 'react'

const SongItem = ({ item }) => {
    return (
        <div className='song-tab'>
            <span>{item.song}</span>
            <span>{item.artist}</span>
            <span>{item.time}</span>
        </div>
    )
}

export default SongItem
