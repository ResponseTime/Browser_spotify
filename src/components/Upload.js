import React, { useState, useEffect } from 'react'
import allContext from '../context/allContext';
import { useContext } from 'react';
const Upload = () => {
    const context = useContext(allContext)
    const { setAudioSrc, globalIndex, setGlobalIndex, names, setNames, setAlert, cumulatedData, setCummulativeData, setTempSong } = context
    const handle = (e) => {
        const filereader = new FileReader();
        filereader.addEventListener('load', () => {
            const data = filereader.result;
            setCummulativeData({ id: globalIndex, songname: names?.songname, artist: names?.artist, seekTime: "test", length: "test", fileSize: data.length, timeUploaded: "test", data: data })
            setAudioSrc(data)
            setGlobalIndex(globalIndex + 1)
            setAlert(true)
            setTempSong(names?.songname)
        })
        filereader.readAsDataURL(e.target.files[0])
    }
    useEffect(() => {
        if (cumulatedData != null) {
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
            req.onsuccess = async (event) => {
                const db = event.target.result
                const transaction = await db.transaction("datastore", "readwrite")
                const object = await transaction.objectStore("datastore")
                object.add(cumulatedData)
            }
        }
    }, [cumulatedData])
    const change = (e) => {
        setNames({ ...names, [e.target.name]: e.target.value })
    }
    return (
        <div className='upload-wrapper'>
            <input type="file" name="song" id="song" onChange={(e) => { handle(e) }} />
            <input type="text" name="songname" id="" placeholder='Song Name' onChange={(e) => { change(e) }} value={names.songname} />
            <input type="text" name="artist" id="" placeholder='artist' onChange={(e) => { change(e) }} value={names.artist} />
        </div>
    )
}

export default Upload
