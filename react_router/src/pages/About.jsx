import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate()
  return (
    <div>
        About
        <button onClick={() => {
            navigate('/');
        }}>
            Go Home
        </button>
    </div>
  )
}

export default About