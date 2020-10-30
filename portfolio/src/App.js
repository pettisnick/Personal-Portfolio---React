import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Work from './pages/Work';
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={About} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Work" component={Work} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
