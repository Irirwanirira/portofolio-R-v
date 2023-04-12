import React from 'react';
import './About.css'

const About = () => {
  
  const picture = require('./images/holla.jpg');

  return (
    <section className="whole-section">
      <div>
        <h1>About me</h1>
      </div>

      <div className="display-flex">
        <div>
          <img className="picture" src={picture} alt="images/holla.jpg" />
        </div>
        <p className='details'>
          Hello I’m a software developer! I can help you
          build a product , feature or website Look through
          some of my work and experience! If you like what
          you see and have a project you need coded,
          don’t hestiate to contact me.
        </p>
      </div>

    </section>
  );
};

export default About;
