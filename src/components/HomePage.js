import React from 'react';
import './HomePage.css';
import { SocialIcon } from 'react-social-icons';
import About from './About';
import Contact from './Contact';
import Portofolio from './Portfolio';
import { Download } from './Icons';

const Home = () => (
  <header className="div-container">
    <div className="display-home">
      <h1>I'm Irirwanirira Joseph</h1>
      <div>
        <p id="description">
          I'm a Kigali based Full Stack Software Engineer,
          currently working at Instant Domains helping
          build a modern, mobile-first, domain registrar
          and site builder.
        </p>
      </div>
      <div>
        <p id="conect">Let's Connect</p>

        <div className="social-media">
          <SocialIcon url="https://twitter.com/jaketrent" />
          <SocialIcon url="https://LinkedIn.com/jaketrent" />
          <SocialIcon url="https://github.com/jaketrent" />
        </div>
      </div>

      <div className="buttons">
        <a className="resume" href="http://REsume">
          {' '}
          Resume
          <Download />
        </a>
        <a href="#contact"> Contact </a>
      </div>

    </div>

    <div>
      <About />
      <h3>Check out some of my work</h3>
      <Portofolio />
      <Contact />
    </div>
  </header>
);

export default Home;
