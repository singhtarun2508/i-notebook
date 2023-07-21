// import React from 'react'
// import { useContext, useState } from 'react'
// import notescontext from '../context/notes/notescontext'



// export default function Inputform() {
//   const context = useContext(notescontext)
//   const { note, setNote,addNote } = context
//   const [title, settitle] = useState("")
//   const [description, setdescription] = useState("")
//   const [tag, settag] = useState("")

  

//   const titleChange = (e) => {
//     settitle(e.target.value)
//   }
//   const descChange = (e) => {
//     setdescription(e.target.value)

//   }
//   const tagChange = (e) => {
//     settag(e.target.value)

//   }

//   return (
//     <div >
//       <form onSubmit={(e)=>{e.preventDefault();addNote(title,description,tag);e.target.reset();}}>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
//           <input type="text" className="form-control" id="title" aria-describedby="emailHelp" minLength="3" onChange={titleChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="description" className="form-label">Description</label>
//           <input type="text" className="form-control" id="description" minLength="5" onChange={descChange} />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
//           <input type="text" className="form-control" id="tag" onChange={tagChange} />
//         </div>
//         <button type="submit" className="btn btn-primary">Add Note</button>
//       </form>
//     </div>
//   )
// }
