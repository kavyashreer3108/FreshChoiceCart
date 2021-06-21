import React from 'react'

const Contact = () => {
    return (
        <section>
        <div className="container">
          <div className="row" style={{marginBottom: "30px"}}>
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <h4><strong style={{color: "#000;"}}>Get in Touch</strong></h4>
              <form>
                <div className="form-group pb-2">
                  <input type="text" className="form-control" name="" value="" placeholder="Name"/>
                </div>
                <div className="form-group pb-2">
                  <input type="email" className="form-control" name="" value="" placeholder="E-mail" />
                </div>
                <div className="form-group pb-2">
                  <input type="tel" className="form-control" name="" value="" placeholder="Phone" />
                </div>
                <div className="form-group pb-2">
                  <textarea className="form-control" name="" rows="3" placeholder="Message"></textarea>
                </div>
                <button className="btn btn-default" type="submit" name="button">
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Submit
                </button>
              </form>
            </div>
           
           
        </div>
      </div>
      </section>
    )
}

export default Contact
