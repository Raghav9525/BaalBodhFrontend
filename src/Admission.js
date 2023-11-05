import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function Admission() {
  // create state
  const [values, setValues] = useState({
    nam: '',
    mobile: '',
    gender: '',
    clas: '',
    payment: '',
  });

  const [insertionStatus, setInsertionStatus] = useState({
    isSuccess: false,
    message: '',
  });


  const submitForm = (event) => {
    event.preventDefault();

    // Send data to the database if there are no validation errors
    if (values.nam !== "") {
      axios.post("https://baalbodh.onrender.com/admission", values)
        .then((res) => {
          console.log("Data sent");
          setInsertionStatus({
            isSuccess: true,
            message: "Admission request successful! Congratulations!",
          });
        })
        .catch((err) => {
          console.log(err);
          setInsertionStatus({
            isSuccess: false,
            message: "Admission request failed. Please try again.",
          });
        });
    }
  }

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  return (
    <>
      <div id="admission" className='container-fluid  ' style={{ backgroundColor: "#d9e4fd" }}>
        <p class="fs-5 text-primary text-center mb-1" style={{ backgroundColor: "#d9e4fd" }}>Admission Form</p>

        <div className=' row  rounded ' style={{ backgroundColor: "#d9e4fd" }}>
          <div class="col-sm-3"></div>
          <div class="col-sm-6 mb-3">
            <div class="card p-4 " >
              <form onSubmit={submitForm}>
                <div className="mb-1">
                  <label htmlFor="exampleInputName" className="form-label">Name</label>
                  <input
                    type="text"
                    name="nam"
                    className="form-control"
                    id="exampleInputName"
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-1">
                  <label htmlFor="exampleInputMobile" className="form-label">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    className="form-control"
                    id="exampleInputMobile"
                    onChange={handleInput}
                  />
                </div>

                <div className="mb-2">
                  <label className="form-label">Gender</label>
                  <div className="d-flex">
                    <div className='me-4'>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="maleRadio"
                        value="male"
                        onChange={handleInput}
                      />
                      <label htmlFor="maleRadio" className="form-check-label">Male</label>
                    </div>

                    <div>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="femaleRadio"
                        value="female"
                        onChange={handleInput}
                      />
                      <label htmlFor="femaleRadio" className="form-check-label">Female</label>
                    </div>
                  </div>
                </div>

                <div className="mb-2">
                  <label htmlFor="clas" className="form-label">Class</label>
                  <select name="clas" id="clas" value={values.clas} onChange={handleInput}>
                    <option value="nursery">Nursery</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                  </select>
                </div>


                <div className="mb-1">
                  <label className="payment-method">Payment Method</label>
                  <div className="d-flex">
                    <div className='me-4'>
                      <input
                        className="payment-radio"
                        type="radio"
                        name="payment"
                        id="online"
                        value="online"
                        onChange={handleInput}
                      />
                      <label htmlFor="online" className="payment-radio">Online</label>
                    </div>

                    <div>
                      <input
                        className="payment-radio"
                        type="radio"
                        name="payment"
                        id="cash"
                        value="cash"
                        onChange={handleInput}
                      />
                      <label htmlFor="cash" className="payment-radio">Cash</label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

              </form>
              {insertionStatus.isSuccess && (
                <div>
                  {insertionStatus.message}
                </div>
              )}
            </div>
          </div>
          <div class="col-sm-3"></div>

        </div>
      </div>

    </>
  )
}

export default Admission;

