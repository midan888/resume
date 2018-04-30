import React from 'react';

import Aside from '../Aside';
import Experience from '../Experience';
import Skills from '../Skills';
import Education from '../Education';
import About from '../About';

import classes from './Layout.scss';

const Layout = () => (
  <div className={classes.container}>
    <div className={classes.genInfo}>
      <div className={classes.asideWrap}>
        <Aside />
      </div>
      <div className={classes.aboutWrap}>
        <About />
      </div>
    </div>
    <div className={classes.content}>
      <div className={classes.aboutContentWrap}>
        <About />
      </div>
      <Skills />
      <Experience />
      <Education />
    </div>
  </div>
);

export default Layout;
