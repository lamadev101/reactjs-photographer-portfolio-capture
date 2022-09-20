import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="brand">
          Capture
        </div>
        <ul className="links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#gallary">Gallary</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar