import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Download from "./components/Download";
import Workflow from "./components/Workflow";

function App() {
  return (
    <div>
      <Header />
      <Category />
      <About />
      <Workflow />
      <Download />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;
