import React from 'react';
import classes from './Aside.scss';
import Typography from '../Typography';
import photo from './IMG_1671.jpg';

const Aside = () => (
  <aside className={classes.root}>
    <Typography variant="display">Mikayel Danielyan</Typography>
    <div className={classes.inner}>
      <img src={photo} className={classes.photo} alt="personal" />
      <div>
        <div className={classes.infoBlock}>
          <Typography className={classes.label}>Email</Typography>
          <Typography className={classes.value}>midan888@gmail.com</Typography>
        </div>
        <div className={classes.infoBlock}>
          <Typography className={classes.label}>Mobile</Typography>
          <Typography className={classes.value}>+7(916)-343-60-29</Typography>
        </div>
        <div className={classes.infoBlock}>
          <Typography className={classes.label}>Skype</Typography>
          <Typography className={classes.value}>mikelangelo.d</Typography>
        </div>
      </div>
    </div>
  </aside>
);

export default Aside;
