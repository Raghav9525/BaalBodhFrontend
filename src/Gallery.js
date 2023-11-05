import React from 'react'

function Gallery() {
  return (
    <div>

      {/* <!-- Gallery Section --> */}
      <div class="containers gallery-section">
        <div class="gallery-title">
          <h1>Our Activities</h1>
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

      <div className="containers gallery-section mt-2">
        <div className="gallery-title">
          <h1 style={{ textAlign: "center" }}>Videos</h1>
        </div>
        <div className="gallery-images me-2 ms-2">
          <div className="video-row">
            <video className='mb-1 pe-1 rounded' controls width="100%" height="auto">
              <source src={require(`./Gallery/video1.mp4`)} type="video/mp4" />
            </video>
            <video className='mb-1 rounded' controls width="100%" height="auto">
              <source src={require(`./Gallery/video2.mp4`)} type="video/mp4" />
            </video>
          </div>
          <div className="video-row">
            <video className='mb-1 pe-1 rounded' controls width="100%" height="auto">
              <source src={require(`./Gallery/video3.mp4`)} type="video/mp4" />
            </video>
            <video className='mb-1 rounded' controls width="100%" height="auto">
              <source src={require(`./Gallery/video4.mp4`)} type="video/mp4" />
            </video>
          </div>
          <div className="video-row">
            <video className='mb-1 pe-1 rounded' controls width="100%" height="auto">
              <source src={require(`./Gallery/video5.mp4`)} type="video/mp4" />
            </video>
            <video className='mb-1 rounded' controls width="100%" height="auto">
              <source src={require(`./Gallery/video6.mp4`)} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Gallery


