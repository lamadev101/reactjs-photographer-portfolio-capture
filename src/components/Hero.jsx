import React from 'react';

const Hero = () => {
  return (
    <div id='home'>
      <div className="wrappers">
        <h2>Capture Photography</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam earum est doloremque iusto asperiores corporis placeat repudiandae aperiam. Omnis vero iure harum deleniti rerum neque, ipsam modi perferendis ea earum.</p>
        <a href="#contact">
          <button>Book Now</button>
        </a>
      </div>
      <div className="follow">
        <div className="links">
          <h4>Follow Me</h4>
          <span>facebook.com/krisitna.lama</span>
          <span>instagram.com/@lamakristina</span>
          <span>pinterest.com/lamakristina22/</span>
          <span>www.kristina.photography.com</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
