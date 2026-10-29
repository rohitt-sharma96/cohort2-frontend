import React, { useState, useEffect } from 'react'
import MacWindow from './MacWindow'
import Markdown from 'react-markdown'
import './note.scss'

const Note = () => {

    const [markdown, setMarkdown] = useState(null)

    useEffect(  () => {
        // fetch('./note.txt')
        //     .then(res => res.text())
        //     .then(text => setMarkdown(text))
           async function getData(){
                const response = await fetch('./note.txt')
                const text = await response.text()
                setMarkdown(text)
            }

            getData();  
    }, [])

    return (
        <MacWindow>
            <div className='note-window'>
                {markdown ? <Markdown>{markdown}</Markdown> : <p>Loading...</p>}
            </div>
        </MacWindow>
    )
}

export default Note