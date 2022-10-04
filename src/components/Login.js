import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const handleFormSubmit = e => {
    // stop the page from refreshing
    e.preventDefault()

    // send data/body to API
    fetch('http://localhost:4040/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('userToken', data.accessToken)
        navigate('/users')
      })
      .catch(err => console.error(err))
  }

  return (
    <>
      <form action='submit' onSubmit={handleFormSubmit} method='post'>
        <h2>Log in</h2>
        <label htmlFor=''>Email: </label>
        <input type='email' onChange={e => setForm({ ...form, email: e.target.value })} />
        <br />
        <label htmlFor=''>Password: </label>
        <input type='password' onChange={e => setForm({ ...form, password: e.target.value })} />
        <button type='submit'>Login</button>
      </form>
      <br /><br />
      Don't have an account? 
      <button onClick={() => navigate('/signup')}>Sign up</button>
    </>
  )
}
