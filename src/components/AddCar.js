import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddCar() {
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const handleFormSubmit = e => {
    // stop the page from refreshing
    e.preventDefault()

    const userToken = localStorage.getItem('userToken')

    // send data/body to API
    fetch('http://localhost:4040/add-car', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authentication: userToken,
      },
      body: JSON.stringify(form),
    })
  }

  return (
    <>
      <form action='submit' onSubmit={handleFormSubmit} method='post'>
        <h2>Sign up</h2>
        <label htmlFor=''>make: </label>
        <input type='text' onChange={e => setForm({ ...form, make: e.target.value })} />
        <br />
        <label htmlFor=''>model: </label>
        <input type='text' onChange={e => setForm({ ...form, model: e.target.value })} />
        <br />
        <label htmlFor=''>price: </label>
        <input type='text' onChange={e => setForm({ ...form, price: e.target.value })} />
        <br />
        <label htmlFor=''>sold: </label>
        <input type='text' onChange={e => setForm({ ...form, sold: e.target.value })} />
        <button type='submit'>Add Car</button>
      </form>
      <br />
      <br />
      already have an account?
      <button onClick={() => navigate('/')}>Login</button>
    </>
  )
}
