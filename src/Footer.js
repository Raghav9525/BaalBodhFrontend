

import React from 'react'
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <footer class="text-center text-lg-start text-white">
                <section class="d-flex justify-content-center justify-content p-4 border-bottom">

                    {/* <!-- Right --> */}
                    <div className="d-flex justify-content-center text-dark"> {/* Center-align icons */}
                        <a href="#" className="me-4 text-reset">
                            <FaFacebook />
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <FaTwitter />
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <FaGoogle />
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <FaInstagram />
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="me-4 text-reset">
                            <FaGithub />
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Links  --> */}
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4 text-dark">BaalBodh</h6>
                                <p className="p-1" style={{textAlign:'justify'}}>
                                Baalbodh School create a playful environment where learning is an exciting adventure
                                </p>
                            </div>

                            <div class="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4 ">
                                <h6 class="text-uppercase fw-bold mb-4 text-dark">Useful links</h6>
                                <p>
                                    <Link to="/" class="text-reset">Home</Link>
                                </p>
                                <p>
                                    <Link to="/admission" class="text-reset">Admission</Link>
                                </p>
                                <p>
                                    <Link to="/about" class="text-reset">About</Link>
                                </p>
                              
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4 text-dark">Contact</h6>
                                <p><i class="fas fa-home me-3"></i> Darbhanga Bihar</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    kshubham9525@gmail.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i>7542061065</p>
                                <p><i class="fas fa-phone me-3"></i>6201852087</p>

                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer