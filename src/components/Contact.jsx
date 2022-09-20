import React from 'react';

const Contact = () => {
  return (
    <div id='contact'>
      <div className="wrapper">
        <h1>Hire Me</h1>
        <div className='info'>
          <span>Phone: +977 9834237612</span> 
          <span>Email: lamakristina.info@gmail.com</span>
        </div>
        <form action="" className='form'>
          <input type="text" placeholder='Full Name' />
          <input type="text" placeholder='Company Name' />
          <input type="email" placeholder='Email' />
          <input type="number" placeholder='Phone Number' />
          <textarea name="msg" id="msg" placeholder='Messages'/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
