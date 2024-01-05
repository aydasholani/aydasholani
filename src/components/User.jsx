import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function User() {
  const { userId } = useParams();

  return (
    <>
    <h1>User Profile</h1>
    <h2>{userId}</h2>
    {/* <p>{user}</p> */}

    <Link to="/users">Back to Users</Link>
    </>
  )
}
