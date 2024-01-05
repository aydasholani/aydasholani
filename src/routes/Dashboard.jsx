import React from 'react'
import LogoutButton from '../components/LogoutButton'
import ImageUpload from '../components/ImageUpload'

export default function Dashboard() {

  return (
    <>
     <h1>Dashboard</h1>
     <section>
      <ImageUpload />
     </section>
     <hr />
     <section>
      <LogoutButton />
     </section>
    </>
  )
}
