import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
      background: `url(${bg}), linear-gradient(#3A4256,#3A4256)`,
      backgroundBlendMode: 'overlay',
      backgroundRepeat: 'no-repeat',
      height: 306,
      marginTop: 170,
      marginBottom: 200,
}

const AppointmentBanner = () => {
      return (
            <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                              <img
                                    style={{ width: 400, marginTop: -110 }}
                                    src={doctor} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{
                              display: 'flex',
                              justifyContent: 'flex-start',
                              textAlign: 'left',
                              alignItems: 'center'
                        }}>
                              <Box>
                                    <Typography variant="h6" sx={{ m: 1 }} style={{ color: '#5CE7ED' }}>
                                          Appointment
                                    </Typography>
                                    <Typography variant="h4" sx={{ m: 1 }} style={{ color: 'white', fontWeight: 600 }}>
                                          Make an appointment Today
                                    </Typography>
                                    <Typography variant="h6" sx={{ m: 1 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis voluptatem excepturi eos. Voluptas, at, esse expedita, quo ducimus placeat maxime ipsa voluptates excepturi enim quibusdam maiores aut beatae architecto hic!
                                    </Typography>
                                    <Button variant="contained" sx={{ m: 1, mt: 2 }} style={{ backgroundColor: '#5CE7ED' }}>Learn more</Button>
                              </Box>

                        </Grid>
                  </Grid>
            </Box>
      );
};

export default AppointmentBanner;