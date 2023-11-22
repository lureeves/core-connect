import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home.jsx';
import CoreValuesTest from './pages/CoreValuesTest/CoreValuesTest.jsx';
import MentorProfile from './pages/MentorProfile/MentorProfile.jsx';


function App() {
  return (
    
    <Router>
        

      <Header />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/CoreValueTest" element={<CoreValuesTest/>} />
        <Route path="/MentorProfile" element={<MentorProfile/>} />
      </Routes>
     
      <Footer />


    </Router>
  );
}

export default App;