import React from 'react';
import profile from './../img/profile.jpg';

const About = () => {
  return (
    <div id='about'>
        <h1>About Me</h1>
      <div className="wrapper">
        <div className="info">
          <span>Hi there, <br />I am</span>
          <h3>Kristina Lama</h3>
          <span>Photographer</span>
          <ul>
            <h4>Skills</h4>
            <li>Creativity</li>
            <li>Technical photography skills</li>
            <li>Patience and concentration</li>
            <li>Attention to detail</li>
            <li>Strong networking skills</li>
            <li>Team working skills</li>
          </ul>
        </div>
        <div className="profile">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
