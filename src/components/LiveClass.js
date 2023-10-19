
import React, { useCallback, useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    const [value,setValue] = useState('')
    const navigate = useNavigate()

    const joinMeeting = useCallback(()=>{
        navigate("/meeting",{state: {value : value}})
    })

  return (
    <div>
        <input 
        type="text"
        value = {value}
        onChange={(e)=>{setValue(e.target.value)}} />

        <button onClick={joinMeeting}>Join</button>
    </div>
  )
}

export default Home