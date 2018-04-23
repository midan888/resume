import React from 'react';
import classes from './Layout.scss';
import Aside from '../Aside';
import Experience from '../Experience';
import Skills from '../Skills';
import Education from '../Education';

const Layout = () => (
  <div className={classes.container}>
    <div className={classes.asideWrap}>
      <Aside />
    </div>
    <div className={classes.content}>
      <Skills />
      <Experience />
      <Education />
    </div>
  </div>
);

export default Layout;
