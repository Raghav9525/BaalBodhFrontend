import React from 'react'
import ImageBoot from './ImageBoot';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JavaScript

function Home() {
  return (
    <div className=''>
      <Navbar />
      {/* <ImageBoot /> */}
      <div id="carouselExampleControls" className="carousel slide img-fluid carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          {/* Display the first image without sliding effect on large screens (lg) */}
          <div className=" d-lg-block d-none">
            <img id="home" src={require("./images/bg.png")} className=" d-block w-100 img-fluid mx-auto" alt="..." />
            <div className="content position-absolute top-0 start-0">
              <div className="school-name">BaalBodh School</div>
            </div>
          </div>
          {/* Display the other two images with sliding effect on screens smaller than large */}
          <div className="carousel-item active d-lg-none">
            <img src={require("./images/bg_mobile.jpg")} className="d-block w-100 img-fluid mx-auto" alt="..." />
            <div className="content position-absolute top-0 start-0">
              <div className="school-name">BaalBodh School</div>
            </div>
          </div>
          <div className="carousel-item d-lg-none">
            <img src={require("./images/bg_mobile1.jpg")} className="d-block w-100 mx-auto" alt="..." />
            <div className="content position-absolute top-0 start-0">
              <div className="school-name">BaalBodh School</div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}

export default Home