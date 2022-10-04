import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const handleFormSubmit = e => {
    // stop the page from refreshing
    e.preventDefault()

    // send data/body to API
    fetch('http://localhost:4040/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
  }

  return (
    <>
      <form action='submit' onSubmit={handleFormSubmit} method='post'>
        <h2>Sign up</h2>
        <label htmlFor=''>Email: </label>
        <input type='email' onChange={e => setForm({ ...form, email: e.target.value })} />
        <br />
        <label htmlFor=''>Password: </label>
        <input type='password' onChange={e => setForm({ ...form, password: e.target.value })} />
        <button type='submit'>Sign up</button>
      </form>
      <br /><br />
      already have an account?
      <button onClick={() => navigate('/')}>Login</button>
    </>
  )
}
