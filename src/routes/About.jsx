import React from 'react'
const apiKey = process.env.REACT_APP_API_KEY;

export default function About() {
  return (
    <>
      <h1>About page 1.0, Secret: {apiKey}</h1>
    </>
  )
}
