import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout({children}) {
  return (
    <main>
      <Outlet />
    </main>
  )
}

export default Layout
