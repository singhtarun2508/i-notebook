import React, { useContext } from 'react'
import Inputform from './Inputform';
import Notes from './Notes';
import notescontext from '../context/notes/notescontext';
import vid from '../media/vid.mp4'

export default function Home() {
    const array =[{"img":vid}]
    console.log(array[1])
  
    const note= useContext(notescontext)
    return (
        <>
        <video src={array[0].img} />
            <div className='container my-3'>
                <h2>Add notes here</h2>
                <Notes/>
            </div>
        </>
    )
}
 