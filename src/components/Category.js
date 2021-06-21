import React from 'react';
import cData from '../cData';

const Category = () => {
  return (
    <>
     
<div className="container">
  <div className="aa-product-details section" id="features">
    <h2 className="title mb-2 text-center">Explore By Category</h2>
    <div className="row" style={{marginTop: "30px"}}>
      {
        cData.map((val)=>{
          return (
            <div className="col-lg-2 col-md-2 col-sm-12">
            <div className="description text-center" id={val.id}>
              <img src={val.img} style={{height: "100px"}}/>
              <div className="h4 ">{val.title}</div>
            </div>
          </div>
          );
        })
      }
 
    </div>
  </div>
</div>
    </>
  )
}

export default Category
