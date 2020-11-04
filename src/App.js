import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
// import Resume from "./components/pages/Resume";
import Work from "./pages/Work";
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "lightgray" }}>
        <Header />
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
