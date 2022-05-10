import React from 'react';
import { Toolbar, Typography } from '@mui/material';
import './Toolbars.scss';

const Toolbars = () => {
  return (
    <div className='Toolbars'>
      <Toolbar variant='dense' className='base'>
        <Typography className='base title'>React</Typography>
        <Typography className='base name'>이정섭</Typography>
      </Toolbar>
    </div>
  );
};

export default Toolbars;
