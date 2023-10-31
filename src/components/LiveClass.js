
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
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center vh-98">
          <div className="col-md-6 mt-4 mb-4">
              <label className='fs-4' htmlFor="meeting-id">Enter Number</label>
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control me-2"
                id="meeting-id"
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
                placeholder="Enter any 4 digit Number"
              />
              <button className="btn btn-primary rounded" onClick={joinMeeting}>Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Home