import React from 'react';
import Typography from '../Typography';

import classes from './Aside.scss';
import photo from './IMG_1671.jpg';
import githubIcon from './github.svg';

const Aside = () => (
  <aside className={classes.root}>
    <Typography variant="display">Mikayel Danielyan</Typography>
    <div className={classes.inner}>
      <img src={photo} className={classes.photo} alt="personal" />
      <div>
        <div className={classes.infoBlock}>
          <Typography className={classes.label}>Email</Typography>
          <Typography className={classes.value}>info@mdanielyan.com</Typography>
        </div>
        <div className={classes.infoBlock}>
          <Typography className={classes.label}>Mobile</Typography>
          <Typography className={classes.value}>+7(916)-343-60-29</Typography>
        </div>
        <div className={classes.infoBlock}>
          <Typography className={classes.label}>Skype</Typography>
          <Typography className={classes.value}>mikelangelo.d</Typography>
        </div>
        <div className={classes.infoBlock}>
          <a href="https://github.com/midan888/resume">
            <img className={classes.githubIcon} src={githubIcon} alt="github" />
            <Typography className={classes.gitLabel}>
              Resume
            </Typography>
          </a>
        </div>
      </div>
    </div>
  </aside>
);

export default Aside;
