import notescontext from "./notescontext";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'



const Notestate = (props) => {
  const navigate = useNavigate();


  const initialNote = []
  const checkLogin = () => {
    if (localStorage.getItem("authToken")) {
      return localStorage.getItem("authToken");
    }
  }
  const [note, setNote] = useState(initialNote)
  const [Token, setToken] = useState(checkLogin())


  const login = async (email, password) => {
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const authToken = await response.json()
    setToken(authToken)
    localStorage.setItem("authToken", Token)
    navigate('/')
  }

  const signup = async (name, email, password) => {
    const response = await fetch(`http://localhost:5000/api/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })
    const authToken = await response.json()
    setToken(authToken)
    localStorage.setItem("authToken", Token)
    // navigate('/')
  }





const getNotes = async () => {
  const response = await fetch("http://localhost:5000/api/notes/fetchnotes", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": Token
    }
  });
  const json = await response.json()
  return json
}



const deleteNote = async (id) => {
  await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": Token
    }
  })
  return true;
}

const editNote = async (title, description, tag, id) => {

  const response = await fetch(`http://localhost:5000/api/notes/updatenotes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": Token
    },
    body: JSON.stringify({ title, description, tag })
  })
}

const addNote = async (title, description, tag) => {
  const response = await fetch("http://localhost:5000/api/notes/addnotes", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": Token
    },
    body: JSON.stringify({ title, description, tag })
  })
  const json = response.json()
  return json
}
return (
  <notescontext.Provider value={{ note, setNote, deleteNote, getNotes, editNote, addNote, login, signup }}>
    {props.children}
  </notescontext.Provider>
)
}

export default Notestate