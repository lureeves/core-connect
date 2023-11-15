import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './pages/Home/Home.jsx';
import CoreValuesTest from './pages/CoreValuesTest/CoreValuesTest.jsx'
// import ContactUs from './pages/ContactUs';

function App() {
  return (
    

    <Router>
        
      <Header />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/CoreValueTest" element={<CoreValuesTest/>} />
      </Routes>
     
      
     
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
/* <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} /> */