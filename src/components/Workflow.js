import React from 'react';
import wFlow1 from '../img/Group 26304.png';
import wFlow2 from '../img/12.jpg';
import wFlow3 from '../img/15.jpg';
import wFlow4 from '../img/16.jpg';

const workFlow = [
    {
       id:1, img: wFlow1
    },
    {
        id:2, img: wFlow2
    },
    {
        id:3, img: wFlow3
    },
    {
        id:4, img: wFlow4
    },
    
];
const Workflow = () => {
    return (
        <div class="aa-screenshots section" id="screen">
        <div class="container text-center">
          <h2 class="title pb-3">Take a look at our Workflow</h2>
          <p class="pb-5">Add your app screenshots below. Make sure to make them lively by putting them inside real device mockups</p>
          <div className="row">
              {
                  workFlow.map((val)=>{
                      return (
                        <div className="col-md-3">
                            <img id={val.id} src={val.img} style={{height: "500px"}}/>
                        </div>
                      );
                  })
              }
          </div>
        </div>
      </div>
    )
}

export default Workflow;
