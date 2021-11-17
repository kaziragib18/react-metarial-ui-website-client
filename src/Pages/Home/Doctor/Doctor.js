import { Grid, Typography } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
      const { name, image } = doctor;
      return (
            <Grid item xs={12} sm={6} md={4}>
                  <img style={{width:'200px', height:'200px'}} src={`data:image/png;base64,${image}`} alt="" />

                  <Typography variant='h3' sx={{fontSize:16, fontWeight:700, fontFamily: 'poppins', m:1}}>
                        {name}
                  </Typography>

            </Grid>
      );
};

export default Doctor;