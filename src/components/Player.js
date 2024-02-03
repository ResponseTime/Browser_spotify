import React from 'react'

const Player = ({ src }) => {
    return (
        <div className="player-wrapper">
            <audio controls src={src}></audio>
        </div>
    )
}

export default Player
