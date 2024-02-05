import React, { useState, useEffect } from 'react'
import SongItem from './SongItem'
import allContext from '../context/allContext';
import { useContext } from 'react';
const Playlist = () => {
    const context = useContext(allContext)
    const { globalIndex } = context
    const [playlist, setPlaylist] = useState([])
    useEffect(() => {
        const req = indexedDB.open("datastore", 1)
        req.onupgradeneeded = (event) => {
            const db = event.target.result
            if (!db.objectStoreNames.contains("datastore")) {
                db.createObjectStore("datastore", { keyPath: "id" })
            }
        }
        req.onerror = (event) => {
            console.error(event.target.result)
        }
        // eslint-disable-next-line
        req.onsuccess = async (event) => {
            const db = event.target.result
            const transaction = await db.transaction("datastore", "readonly")
            const object = await transaction.objectStore("datastore")
            const newPlaylist = [];
            object.openCursor().onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    if (!playlist.some(item => item.id === cursor.value.id)) {
                        newPlaylist.push(cursor.value);
                    }
                    cursor.continue();
                } else {
                    setPlaylist([...playlist, ...newPlaylist]);
                }
            };
        }
        // eslint-disable-next-line
    }, [globalIndex])

    return (
        <div className='playlist-wrapper'>
            <h1>Your playlist</h1>
            {playlist.map((play) => {
                return <SongItem key={play.id} item={play} />
            })}
        </div>
    )
}

export default Playlist
