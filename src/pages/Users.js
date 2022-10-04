import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Users() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const userToken = localStorage.getItem('userToken')

    fetch('http://localhost:4040/', {
      headers: { Authentication: userToken },
    })
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err))
  }, [])

  const handleLogOut = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <>
      <h2>All users here</h2>
      <button onClick={handleLogOut}>Log Out</button>
      {users.map(user => (
        <p>{user.email}</p>
      ))}
    </>
  )
}
