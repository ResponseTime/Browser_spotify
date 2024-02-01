import React from 'react'

const Player = () => {
    return (
        <div className="player-wrapper">
            <audio controls className="player">
                <source src="t.mp3" />
            </audio>
        </div>
    )
}

export default Player
