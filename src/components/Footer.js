import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer-black aa-footer">
            <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-12"><a className="btn btn-link btn-neutral" href="#"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a><a className="btn btn-link btn-neutral" href="#"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a><a className="btn btn-link btn-neutral" href="#"><i className="fa fa-google-plus fa-2x" aria-hidden="true"></i></a><a className="btn btn-link btn-neutral" href="#"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a></div>
          <div className="col-md-12">
            <p className="mt-3">Copyright &copy; FreshChoice App. All rights reserved.<br/>Design - <a className="credit" href="https://enrichtechnosoft.com/" target="_blank">EnrichTechnosoft</a>
            </p>
          </div>
          <div className="col-md-12">
            <a href="privacypolicy.html">Privacy Policy</a>&nbsp;&nbsp;|&nbsp;
            <a href="termsandcondition.html">Terms and Conditions</a>
          </div>
        </div>
        </div>
    </footer>
        </div>
    )
}

export default Footer
