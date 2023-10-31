import React from 'react'
import Navbar from './Navbar'
import './faculty.css'

function About() {

    return (
        <div>
            {/* <div class="containers">
                <div class="left-content">
                    <img src={require(`./images/bg.png`)} alt="BaalBodh School" class="school-image" />
                </div>
                <div class="right-content">
                    <h1>Our School</h1>
                    <p>Welcome to BaalBodh School, where education meets excellence.</p>
                    <p>At BaalBodh School, we are committed to providing high-quality education to our students and nurturing their talents and potential.</p>
                    <p>Our dedicated team of educators and staff work tirelessly to create a nurturing and inspiring learning environment.</p>
                    <button class="btn-know-more">Know More About BaalBodh School</button>
                </div>
            </div> */}

            <div class="containers mb-2 ">
                <div class="row">
                    <h1 class="fs-1 text-primary text-center" style={{ backgroundColor: "#d9e4fd" }}>About</h1>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-4">
                        <div class="fac1 card" style={{ backgroundColor: "#d9e4fd", border: "none" }}>
                            <img className="rounded d-block w-100 img-fluid" src={require(`./images/Principal.jpg`)} style={{ height: "350px", maxWidth: "350px" }} alt="" />
                            <h4 className='mt-4'>Principal:- Muskesh Kumar</h4>
                        </div>

                    </div>
                    <div class="col-sm-6">
                        <div class="card">

                            <p className="p-2" style={{ textAlign: 'justify' }}>
                                <h4>Welcome to BaalBodh SCHOOL</h4>
                                Welcome to Baalbodh School, where we nurture young minds with care and creativity. Our dedicated principal, Mr. Mukesh Kumar leads the way in shaping a bright future for your little ones. With a gentle touch and a warm smile, he ensures that every child's first steps into education are full of joy and discovery.
                            </p>
                        </div>

                        <div class="card">
                            <h4 className='mt-2'>Our Vision</h4>

                            <p className="p-2" style={{ textAlign: 'justify' }}>
                                At Baalbodh School, we create a playful environment where learning is an exciting adventure. Our principal, a true visionary, believes in the power of early education. With a team of caring teachers, we focus on building strong foundations in reading, writing, and arithmetic. We understand that every child is unique and encourage their individuality, sparking curiosity and imagination.
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-1'></div>
                </div>
            </div>

            {/* <!-- Gallery Section --> */}
            <div class="containers gallery-section">
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

        </div>

    )
}

export default About