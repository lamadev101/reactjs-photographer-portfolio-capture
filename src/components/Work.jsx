import {featured} from '../data.js';

export const Work = ({setGetId}) => {
  return (
    <div id='work'>
      <div className="wrapper">
        <h1>My Work</h1>
        <div className="card-box">
          {featured.map((item)=>(
            <div className="img-box" key={item.id}>
              <img src={item.img} alt="" />
              <div className="overlay">
                <h3>{item.title} Photography</h3>
                <p>{item.desc}</p>
                <a href="#gallary">
                  <button onClick={()=>setGetId(item.id)}>Explore More</button>
                </a>
              </div>
            </div>
          ))}          
        </div>
      </div>
    </div>
  )
}
