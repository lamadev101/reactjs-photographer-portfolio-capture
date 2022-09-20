import React, {useState} from 'react';
import nature from './../img/nature5.jpg';
import wild from './../img/wild2.jpg';
import bird from './../img/nature.jpg';
import tiger from './../img/tiger.jpg';
import hare from './../img/hare.jpg';
import frog from './../img/wild6.jpg';
import {gallary} from '../data.js';

const image = [nature, hare, tiger, wild, bird];
const Gallary = ({id}) => {
  const [changeImg, setChangeImg] = useState(frog);

  return (
    <div id='gallary' style={{backgroundImage:`url(${changeImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
      <div className="wrapper">
        <h1>Gallary</h1>
        <div className="image-box">
          <img src={changeImg} alt="" />
        </div>
        <div className="card">
          {id ? gallary[id-1].img.map((item, index)=>(
            <div className="img-card" key={index} onMouseOver={()=>setChangeImg(item)}>
              <img src={item} alt="" />
            </div>
          )): image.map((item, index)=>(
            <div className="img-card" key={index} onMouseOver={()=>setChangeImg(item)}>
              <img src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallary;
