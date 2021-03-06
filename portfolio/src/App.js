import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";
import Project from "./components/Project/index";
import Footer from "./components/Footer/index"
import Wrapper from "./components/Wrapper/index";
import About from "./pages/About/index";
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
    <Router>
    <div>
      
      
      <Navbar />
      {/* <Wrapper>   */}
        <Route exact path="/" component={Header} />    
      <Route exact path="/" component={Project} />    
      
      <Route exact path="/about" component={About} />      
      {/* </Wrapper> */}
      <Footer />      
      {/* <Body /> */}      
    </div>
    </Router>
  );
}

export default App;
