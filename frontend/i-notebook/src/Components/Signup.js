import React from 'react'
import { useState,useContext } from 'react'
import notescontext from '../context/notes/notescontext'


export default function Signup() {
  const context = useContext(notescontext)
  const { signup } = context
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")

    
    const emailChange=(e)=>{
        setemail(e.target.value)
    }
    const passwordChange=(e)=>{
        setpassword(e.target.value)
    }
    const nameChange=(e)=>{
        setname(e.target.value)
    }
        

  return (
    <div>
      <div className='container my-3'>
      <form onSubmit={onclick=(e)=>{e.preventDefault();signup(name,email,password)}}>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" aria-describedby="emailHelp" minLength="3" onChange={nameChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" minLength="3" onChange={emailChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" minLength="5" onChange={passwordChange} />
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    </div>
    </div>
  )
}
