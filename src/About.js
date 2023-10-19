import React from 'react'
import Navbar from './Navbar'

function About() {

    return (
        <div>
            <Navbar />
            <div class="containers">
                <div class="left-content">
                    <img src={require(`./images/bg.png`)} alt="BaalBodh School" class="school-image" />
                </div>
                <div class="right-content">
                    <h1>Our School</h1>
                    <p>Welcome to BaalBodh School, where education meets excellence.</p>
                    <p>At BaalBodh School, we are committed to providing high-quality education to our students and nurturing their talents and potential.</p>
                    <p>Our dedicated team of educators and staff work tirelessly to create a nurturing and inspiring learning environment.</p>
                    <button class="btn-know-more" onclick="showSchoolInfo()">Know More About BaalBodh School</button>
                </div>
            </div>
            <div class="containers">
                <div class="left-content">
                    <img src={require(`./images/Principal.jpg`)} alt="BaalBodh School" class="school-image" id="principal" title="Mr.[Name of Principal]" />
                    <h5>Mr.['Name of Principal']</h5>
                </div>
                <div class="right-content">
                    <h1>Principal(Director)</h1>
                    <h3>Welcome to BaalBodh SCHOOL</h3>
                    <p>As the proud Principal of 'BaalBodh SCHOOL', it is my privilege to welcome you to our vibrant educational community. Our school is not just a place of learning; it's a place of transformation, growth, and boundless possibilities.</p>
                    <h3>Our Vision</h3>
                    <p>At 'BaalBodh SCHOOL', we are committed to nurturing young minds and empowering them to become responsible, confident, and compassionate individuals who make a positive impact on the world. Our vision is to create a dynamic and inclusive learning environment that fosters a lifelong love of learning and equips our students with the skills they need to excel in an ever-changing future.</p>
                    <h3>Our Mission</h3>
                    <p>Our mission is to provide a holistic education that goes beyond the classroom. We believe in fostering intellectual curiosity, promoting creativity, and nurturing a strong sense of character. We aim to prepare our students not only for academic success but also for a life filled with integrity, resilience, and empathy.</p>

                </div>
            </div>

            {/* <!-- Gallery Section --> */}
            <div class="containers gallery-section">
                <div class="gallery-title">
                    <h1>Our Activities</h1>
                </div>
                <div class="gallery-images">
                    <img src={require(`./images/bg.png`)} alt="Image 1" class="gallery-image" title="[ACtivities Name]" />
                    <img src={require(`./images/bg.png`)} alt="Image 3" class="gallery-image" title="[ACtivities Name]" />
                    <img src={require(`./images/bg.png`)} alt="Image 2" class="gallery-image" title="[ACtivities Name]" />
                    <img src={require(`./images/bg.png`)} alt="Image 4" class="gallery-image" title="[ACtivities Name]" />
                    <img src={require(`./images/bg.png`)} alt="Image 5" class="gallery-image" title="[ACtivities Name]" />
                    <img src={require(`./images/bg.png`)} alt="Image 6" class="gallery-image" title="[ACtivities Name]" />
                </div>
            </div>

        </div>
                          
    )
}

export default About