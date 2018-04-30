import React from 'react';

import Aside from '../Aside';
import Experience from '../Experience';
import Skills from '../Skills';
import Education from '../Education';
import About from '../About';

import classes from './Layout.scss';

const Layout = () => (
  <div className={classes.container}>
    <div className={classes.asideWrap}>
      <Aside />
    </div>
    <div className={classes.content}>
      <About />
      <Skills />
      <Experience />
      <Education />
    </div>
  </div>
);

export default Layout;
