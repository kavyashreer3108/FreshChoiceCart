import React from 'react';
import abtImg from '../img/Group 26293.png';

const About = () => {
  return (
    <>
      <div class="container">
  <hr/>
</div>
<div className="aa-product-features section" id="about">
  <div className="container">
    <div className="row">
      <div className="col-md-5 col-sm-12 text-center"><img className="img-fluid" src={abtImg} alt="Image" style={{height: "65vh"}}/></div>
      <div className="col-md-7 col-sm-12">
        <h2 className="title mb-2">Why FreshChoice App?</h2>
        <p className="pt-2">FreshChoice will build the most loved meat brand by delighting the world with an unmatched range of meat and meat products</p>
        <p className="pt-5 pb-1">India's Most Loved Meat,Seafood</p>
        <ul className="py-1 list-unstyled">
          <li className="py-1"><i className="fa fa-check-circle pr-4" aria-hidden="true"></i> Vacuum sealed & chilled Meats between 0-45 C</li>
          <li className="py-2"><i className="fa fa-check-circle pr-4" aria-hidden="true"></i> Passed over 150 rigorous Quality Checks</li>
          <li><i className="fa fa-check-circle pr-4" aria-hidden="true"></i> Finest Cuts of Premium Meats</li>
        </ul>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default About
