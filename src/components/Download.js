import React from 'react';

const Download = () => {
    return (
        <>
            <div className="container">
        <hr/>
        </div>
      <div className="aa-download-section section bg-gradient" id="download">         
        <div className="container">
          <div className="h2 text-center text-title text-white pb-5">Download FreshChoice App Now </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 col-sm-12"><a className="aa-android" href="#" style={{textDecoration:"none"}}>
                <div className="card">
                  <div className="row pb-3">
                    <div className="col-lg-3 col-md-12 aa-download-icon"><i className="pt-4 fa fa-android fa-4x" aria-hidden="true"></i></div>
                    <div className="col-lg-9 col-md-12 aa-download-icon-detail">
                      <div className="h4 pb-1">Download</div>
                      <p className="text-muted">Download from Play Store</p>
                    </div>
                  </div>
                </div></a></div>
          </div>
        </div>
      </div>
     
        </>
    )
}

export default Download
