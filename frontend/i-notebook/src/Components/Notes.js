import React from 'react'
import { useContext, useState, useEffect } from 'react'
import notescontext from '../context/notes/notescontext'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Notes() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [tag, settag] = useState("")



  const titleChange = (e) => {
    settitle(e.target.value)
  }
  const descChange = (e) => {
    setdescription(e.target.value)

  }
  const tagChange = (e) => {
    settag(e.target.value)
  }


  const context = useContext(notescontext)
  const { getNotes, deleteNote, editNote, addNote } = context
  const [updatedTitle, setupdatedTitle] = useState("")
  const [updatedDescription, setupdatedDescription] = useState("")
  const [updatedTag, setupdatedTag] = useState("")
  const [id, setid] = useState("")

  const initialNote = []

  const [note, setNote] = useState(initialNote)

  const handleShow = (note) => {
    setShow(true);
    setupdatedTitle(note.title)
    setupdatedDescription(note.description)
    setupdatedTag(note.tag)
    setid(note._id)
  }

  const handleUpdate = (updatedTitle, updatedDescription, updatedTag, id) => {
    setShow(false);
    for (var i = 0; i < note.length; i++) {
      if (note[i]._id === id) {
        note[i].title = updatedTitle
        note[i].description = updatedDescription
        note[i].tag = updatedTag
      }
    }
  }
  const updatedtitleChange = (e) => {
    setupdatedTitle(e.target.value)

  }
  const updateddescChange = (e) => {
    setupdatedDescription(e.target.value)
  }
  const updatedtagChange = (e) => {
    setupdatedTag(e.target.value)
  }


  useEffect(() => {
    const fetchData = async () => {
      const json = await getNotes();
      setNote(json)
    }
    fetchData()
  }, [])

  const clearNote = (id) => {
    const newNotes = note.filter((note) => { return note._id !== id })
    setNote(newNotes)
  }

  const addData = async (json) => {
    var newNote=[];
    newNote = note.concat(json);
    setNote(newNote)
  }

  return (
    <div key={note._id}>
      <div >
        <form onSubmit={async (e) => {
          e.preventDefault();
          const json = await addNote(title, description, tag);
          var jsonArray = [];
          jsonArray.push(json);
          e.target.reset();
          addData(jsonArray);
        }}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="emailHelp" minLength="3" onChange={titleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" minLength="5" onChange={descChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" onChange={tagChange} />
          </div>
          <button type="submit" className="btn btn-primary">Add Note</button>
        </form>
      </div>
      <h2 className='my-3'>Your Notes</h2>
      <div>
        {note.map((note) => {
          return (
            <div key={note._id}>
              <div className="card mx-3 my-3" >
                <div className="card-header">
                  {note.tag}
                  <i role='button' onClick={() => { deleteNote(note._id); clearNote(note._id); }} className="fa-solid fa-trash float-end"></i>
                  <i role='button' onClick={() => { handleShow(note) }} className=" mx-3 fa-solid fa-sharp fa-file-pen float-end"></i>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form onSubmit={(e) => { e.preventDefault(); editNote(updatedTitle, updatedDescription, updatedTag, id); handleUpdate(updatedTitle, updatedDescription, updatedTag, id) }}>
                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                          <input type="text" value={updatedTitle} className="form-control" id="title" aria-describedby="emailHelp" minLength="3" onChange={updatedtitleChange} />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="description" className="form-label">Description</label>
                          <input type="text" value={updatedDescription} className="form-control" id="description" minLength="5" onChange={updateddescChange} />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
                          <input type="text" value={updatedTag} className="form-control" id="tag" onChange={updatedtagChange} />
                        </div>
                        <button className="btn btn-primary float-start">Update</button>
                      </form>
                      <Button variant="secondary" className='float-end' onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Body>
                  </Modal>
                </div>
                <div className="card-body" >
                  <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">{note.description}</p>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Notes
