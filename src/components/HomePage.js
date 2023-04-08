import React from 'react';
import About from './About';
import Contact from './Contact';
import Portofolio from './Portfolio';

const Home = () => (
  <div>
    <h1>I'm Irirwanirira Joseph</h1>
    <div>
      <p>
        I'm a Kigali based Full Stack Software Engineer,
        currently working at Instant Domains helping
        build a modern, mobile-first, domain registrar
        and site builder.
      </p>
    </div>
    <div>
      <p>Let's Connect</p>

      <div className="social-media">
        <>LinkedIN</>
        <>Guthub</>
        <>Twitter</>
      </div>
    </div>

    <div>
      <button className="button"> Resume </button>
      <button className="contact"> Contact </button>
    </div>

    <div>
      <About />
      <Portofolio />
      <Contact />
    </div>
  </div>
);

export default Home;
