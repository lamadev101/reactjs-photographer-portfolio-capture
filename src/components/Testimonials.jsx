import React, { useState } from 'react'
import {clients} from './../data.js';

import larrow from './../img/arrowl.png';
import rarrow from './../img/arrowr.png';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const handleArrow = (direction)=>{
    if(direction === 'l'){
      setIndex(index !== 0 ? index - 1: 3);
    }
    if(direction === 'r'){
      setIndex(index !== 3 ? index + 1 : 0);
    }
  }
  return (
    <div id='testimonials'>
        <h1>Testimonials</h1>
        <div className="wrappers">
          <div className="card" style={{transform: `translateX(${-100*index}vw)`}}>
          {clients.map((client)=>(
              <div className="box" key={client.id}>
                <div className="img-box">
                  <img src={client.img} alt="" />
                </div>
                <div className="info">
                  <span className='name'>{client.name}</span> <br />
                  <span className='job-title'>{client.post}</span>
                  <p>{client.view}</p>
                </div>
              </div>
            ))}
          </div>
        <div className="arrow">
          <img src={larrow} onClick={()=>handleArrow("l")} alt="" />
          {[0,1,2,3].map(i=><span key={i} className='circle' onClick={()=>setIndex(i)} />)}
          <img src={rarrow} onClick={()=>handleArrow("r")} alt="" />
        </div>
        </div>
        <p></p>
    </div>
  )
}

export default Testimonials