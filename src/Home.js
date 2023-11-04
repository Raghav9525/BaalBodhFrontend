import React from 'react'
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JavaScript
import About from './About';
import Contact from './Contact';

function Home() {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide img-fluid carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          {/* Display the first image without sliding effect on large screens (lg) */}
          <div className="d-lg-block d-none" style={{ position: 'relative' }}>
            <img id="home" src={require("./images/bg.png")} className="d-block w-100 img-fluid mx-auto" alt="..." />
            <div className="content position-absolute top-0 start-0" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(61, 49, 49, 0.74))',width: '100%', height: '100%' }}>
              <div className="school-name mt-4 pt-4">BaalBodh School</div>
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

      {/* <About /> */}
      <div class="containers gallery-section mt-1">
        <div class="gallery-title">
          <h1>Our Activities</h1>
        </div>
        <div class="gallery-images">
          <img src={require(`./images/scoolActivity/activity1.webp`)} alt="Image 1" class="gallery-image" title="[ACtivities Name]" />
          <img src={require(`./images/scoolActivity/activity2.webp`)} alt="Image 3" class="gallery-image" title="[ACtivities Name]" />
          <img src={require(`./images/scoolActivity/activity3.jpg`)} alt="Image 2" class="gallery-image" title="[ACtivities Name]" />
          <img src={require(`./images/scoolActivity/activity4.jpg`)} alt="Image 4" class="gallery-image" title="[ACtivities Name]" />
          <img src={require(`./images/scoolActivity/activity5.webp`)} alt="Image 5" class="gallery-image" title="[ACtivities Name]" />
          <img src={require(`./images/scoolActivity/activity6.webp`)} alt="Image 6" class="gallery-image" title="[ACtivities Name]" />
        </div>
      </div>

      
      {/* <!-- Gallery Section --> */}
      <div class="containers gallery-section">
        <div class="gallery-title">
          <h1>Our Students</h1>
        </div>
        <div class="gallery-images">
          <img src={require(`./Gallery/9.jpg`)} alt="Image 1" class="gallery-image" title="[ACtivities Name]" />
          <img src={require(`./Gallery/1.jpg`)} alt="Image 3" class="gallery-image" title="[ACtivities Name]" />
          <img src={require(`./Gallery/2.jpg`)} alt="Image 2" class="gallery-image" title="[ACtivities Name]" />
          <img src={require(`./Gallery/10.jpg`)} alt="Image 4" class="gallery-image" title="[ACtivities Name]" />
          <img src={require(`./Gallery/3.jpg`)} alt="Image 5" class="gallery-image" title="[ACtivities Name]" />
          <img src={require(`./Gallery/5.jpg`)} alt="Image 6" class="gallery-image" title="[ACtivities Name]" />
        </div>
      </div>

      <div class="containers gallery-section mt-2">
        <div class="gallery-title">
          <h1>ClassRoom Image</h1>
        </div>
        <div class="gallery-images">
          <img src={require(`./Gallery/class2.jpg`)} alt="Image 1" class="gallery-image" title="[ACtivities Name]" />
          <img src={require(`./Gallery/class4.jpg`)} alt="Image 3" class="gallery-image" title="[ACtivities Name]" />
          <img src={require(`./Gallery/class1.jpg`)} alt="Image 2" class="gallery-image" title="[ACtivities Name]" />
          <img src={require(`./Gallery/class3.jpg`)} alt="Image 4" class="gallery-image" title="[ACtivities Name]" />
          <img src={require(`./Gallery/4.jpg`)} alt="Image 5" class="gallery-image" title="[ACtivities Name]" />
          <img src={require(`./Gallery/9.jpg`)} alt="Image 6" class="gallery-image" title="[ACtivities Name]" />
        </div>
      </div>


      <Contact />
    </>
  )
}

export default Home