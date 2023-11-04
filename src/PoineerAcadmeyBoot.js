import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import Login from './Login';
import Admission from './Admission'; // Import your Admission component here
import Home from './Home';
import Admin from './Admin';
import StudentData from './StudentData';
import FacultyDetails from './FacultyDetails';
import FacultyUpload from './FacultyUpload';
import About from './About';
import LiveClass from './components/LiveClass'
import MeetingPage from './components/MeetingPage';
import Gallery from './Gallery';



function PoineerAcadmeyBoot() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admission" element={<Admission />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/facultydata" element={<FacultyDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/liveclass" element={<LiveClass />} />
                <Route path="/meeting" element={<MeetingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path='/admin/studentdata' element={<StudentData />} />
                <Route path='admin/editfaculty' element={<FacultyUpload />} />
            </Routes>
        </>
    );
}


export default PoineerAcadmeyBoot;
