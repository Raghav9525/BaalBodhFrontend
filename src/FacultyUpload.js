import React, { useState } from 'react';
import axios from 'axios';

function FacultyUpload() {

  // fromdata state 
  const [formData, setFormData] = useState({
    name: '',
    qualification: '',
    mobile: '',
    myfile: null, // This will store the selected file
  });

  const [isInsertionSucessful, setIsInsertionSucessful] = useState(false)

  const handleChange = (event) => {
    // e.target obj stores input tag name, value, type etc
    const { name, value, type, files } = event.target;

    // Check if the input is a file
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
      console.log("file" + formData)
    } else {
      setFormData({ ...formData, [name]: value });
      console.log(formData)
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    // FormData  store data in key value pair it is necessay
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('qualification', formData.qualification);
    formDataToSend.append('mobile', formData.mobile);
    formDataToSend.append('myfile', formData.myfile);
    // Append the file
    if (formData.name !== "") {
      axios.post('https://baalbodh.onrender.com/admin/editfaculty', formDataToSend)
        .then((response) => {
          if (response.status === 200) {
            setIsInsertionSucessful(true);
            console.log('Form submitted:', response.data);
          }
        })
        .catch((error) => {
          console.error('Error while inserting data:', error);
        });
    }
  }

  return (
    <div id="admission" className='d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-white p-3 rounded w-50'>
        <form onSubmit={submitForm} encType="multipart/form-data">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          /><br />

          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          /><br />

          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          /><br />

          <label htmlFor="myfile">Image:</label>
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={handleChange}
          /><br />

          <button type="submit">Submit</button>
        </form>
        {isInsertionSucessful && (
          <div>
            <h4>Teacher data uploaded</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default FacultyUpload;
