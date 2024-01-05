import {useEffect, useState} from 'react'
import LogoutButton from '../components/LogoutButton'
import axios from 'axios'


export default function Admin() {
  return (
    <div>
      Admin
      <LogoutButton />
    </div>
  )
}
