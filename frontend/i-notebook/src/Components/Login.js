import React from 'react'
import {useContext, useState } from 'react'
import notescontext from '../context/notes/notescontext'


export default function Login() {
  const context = useContext(notescontext)
  const { login } = context

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const emailChange=(e)=>{
        setemail(e.target.value)
    }
    const passwordChange=(e)=>{
        setpassword(e.target.value)
    }
  return (
    <div className='container my-3'>
      <form onSubmit={(e)=>{e.preventDefault();login(email,password);}}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="title" aria-describedby="emailHelp" minLength="3" onChange={emailChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Password</label>
          <input type="password" className="form-control" id="description" minLength="5" onChange={passwordChange} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}
