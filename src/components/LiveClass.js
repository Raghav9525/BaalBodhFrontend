
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'

function Home() {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const joinMeeting = useCallback(() => {
    navigate("/meeting", { state: { value: value } })
  })

  return (
    <div>
      <Navbar />
      <div className='body-container'>
        <div className='input-button'>
          <div className='meeting-id'>
            <label htmlFor=''>Enter Number</label>
            <input
              type="text"
              value={value}
              onChange={(e) => { setValue(e.target.value) }} />
          </div>
          <button onClick={joinMeeting}>Join</button>
        </div>
      </div>
    </div>
  )
}

export default Home