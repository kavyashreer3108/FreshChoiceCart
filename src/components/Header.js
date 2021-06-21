import React from 'react';
import logo from '../img/logo.jpg';
import image1 from '../img/Group 26291.png';

const Header = () => {
  return (
    <>
       <header>
      <div className="aa-header">
        <nav className="navbar navbar-expand-md navbar-transparent">
          <div className="container"><a href="index.html"><img className="img-fluid pr-3 aa-logo-img" src={logo} alt="logo" style={{height: "60px"}}/></a><a className="navbar-brand px-0 py-0" href="index.html">FreshChoice App</a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                <li className="nav-item"><a className="nav-link" href="#screen">Screenshots</a></li>
                <li className="nav-item"><a className="btn btn-outline-neutral btn-round" href="#download">Download Now</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container aa-header-content text-left text-white">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h1 className="text-white mb-4">Fresh Choice App</h1>
              <ul className="py-1 list-unstyled">
                <li className="py-2"><i className="fa fa-check-circle pr-4" aria-hidden="true"></i> Vacuum sealed & chilled Meats between 0-45 C</li>
                <li className="py-2"><i className="fa fa-check-circle pr-4" aria-hidden="true"></i> Passed over 150 rigorous Quality Checks</li>
                <li className="py-2"><i className="fa fa-check-circle pr-4" aria-hidden="true"></i> Finest Cuts of Premium Meats</li>
              </ul>
              <a className="mt-4 btn btn-outline-neutral btn-round" href="#features">Start Exploring</a>
            </div>
            <div className="col-md-6 col-sm-12 text-center">
              <img className="img-fluid" src={image1} alt="Image" style={{height: "400px"}}/>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
