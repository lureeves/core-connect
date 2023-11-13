import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import AboutUs from './pages/AboutUs';
// import ContactUs from './pages/ContactUs';

function App() {
  return (
    

    <Router>
        
      {/* <Header /> */}
      <Switch>
        {/* <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} /> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
