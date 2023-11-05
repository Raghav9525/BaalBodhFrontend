import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './faculty.css';

function FacultyDetails() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://baalbodh.onrender.com/facultydata`;
        const response = await axios.get(url);

        // Check if the response data is empty or undefined
        if (!response.data || response.data.length === 0) {
          setShowData(false);
          return;
        }

        setData(response.data);
        setShowData(true);
      } catch (error) {
        console.error('Error fetching data:', error);
        setShowData(false); // Handle error by setting showData to false
      }
    };

    fetchData(); // Fetch data when the component mounts
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="faculty-details" style={{ backgroundColor: "#d9e4fd" }}>
      {/* Principal details should show by default */}
      <div className="row">
        <div className="col-1"></div>
        <div className="col-5 fac1 order-lg-first">
          <img src={require(`./images/Principal.jpg`)} alt="Principal" className="img-fluid" />
        </div>
        <div className="col-5 details">
          <div className="row">
            <div className="col-12">
              <h3>Mukesh Kumar</h3>
              <h5>Bachelor of Science</h5>
              <h5>8340657136</h5>
            </div>
          </div>
        </div>
        <div className="col-1"></div>

      </div>

      {showData ? (
        data.map((data, index) => (
          <div key={index} className="row">
            <div className="col-lg-6 fac1 order-lg-first">
              <img src={require(`./upload/${data.image}`)} alt={`Faculty ${index + 1}`} className="img-fluid" />
            </div>
            <div className="col-lg-6 details">
              <div className="row">
                <div className="col-12">
                  <h3>{data.name}</h3>
                  <h5>{data.qualification}</h5>
                  <h5>{data.mobile}</h5>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Add Faculty</p>
      )}
    </div>
  );
  
}

export default FacultyDetails;
