import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home.jsx';
import CoreValuesTest from './pages/CoreValuesTest/CoreValuesTest.jsx';
import MentorProfile from './pages/MentorProfile/MentorProfile.jsx';
import Profile from './pages/UserProfile/Profile.jsx';
import ContactUs from './pages/Contact/ContactUs.jsx';


function App() {
  return (
    
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/CoreValueTest" element={<CoreValuesTest/>} />
          <Route path="/MyProfile" element={<Profile/>} />
          <Route path='/ContactUs' element={<ContactUs/>} />
          <Route path="/MentorProfile/:id" Component={MentorProfile} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;