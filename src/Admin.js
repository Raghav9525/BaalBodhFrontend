import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar'
import { useNavigate } from 'react-router-dom';


function Admin() {
  const [admission_accept,setAdmission_accept] = useState(0)
  const [data, setData] = useState([]);
  const [admission_req, setAdmission_req] = useState(false);
  // to navigate to studentdata route
  const navigate = useNavigate();

  //fetch admission request student data
  
  useEffect( ()=>{
    const fetchData = async () => {
      console.log("page rendered");

      try {
        const response = await axios.get('https://baalbodh.onrender.com/admin/admission');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData ();
  },[admission_accept]);


  const handleButtonClick = (roll, clas) => {
    axios.post(`https://baalbodh.onrender.com/admin/approve/${roll}/${clas}`)
      .then((res) => {
        console.log('handleButtonClicked');
        // You can also refresh the data here if needed
        setAdmission_accept(!admission_accept)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  //fetch student data
  function fetchStudent() {
    navigate('/admin/studentdata'); // Use navigate to navigate to the route
  }

  function editFaculty(){
    navigate('/admin/editfaculty'); // Use navigate to navigate to the route

  }

  return (
    <div>
      <AdminNavbar />
      <div class="adminpage">

        <h2>Admin Panel</h2>
        <br /><br />
        {/* here fetch data should called */}
        <button onClick={()=>{setAdmission_req(!admission_req)}}>Admission Request</button>
        {/* <button onClick={fetchData}>Admission Request</button> */}
        <button onClick={fetchStudent}>Student Details</button>
        <button onClick={editFaculty}>EditFaculty</button>

        <br />
        <br />
        {admission_req && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Payment Method</th>
                <th>Button</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.roll}>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>{item.gender}</td>
                  <td>{item.class}</td> {/* Render class value once */}
                  <td>{item.pay_method}</td>
                  <td>
                    <button onClick={() => handleButtonClick(item.roll, item.class)}>Accept admission</button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Admin;
