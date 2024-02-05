import React, { useEffect, useState } from 'react'
import allContext from '../context/allContext';
import { useContext } from 'react';
const Alert = () => {
    const context = useContext(allContext)
    const { setAlert, tempSong } = context
    const [visible, setVisible] = useState("block")
    useEffect(() => {
        setTimeout(() => {
            setVisible("none")
            setAlert(false)
        }, 5000)
    })
    console.log(tempSong)
    return (
        <div className="alert" style={{ "display": visible }} >
            Playing {tempSong} now
        </div >
    )
}

export default Alert
