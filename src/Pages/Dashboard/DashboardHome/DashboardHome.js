import * as React from 'react';
import { Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
      const [date, setDate] = React.useState(new Date());
      return (
            <Grid container spacing={0}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                  <Box
                        sx={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              '& > :not(style)': {
                                    m: 1,
                                    width: "100%"
                              },
                        }}
                  >
                        <Paper elevation={1}>
                              <Calender
                                    date={date}
                                    setDate={setDate}></Calender>
                        </Paper>
                  </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
                  <Box
                        sx={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              '& > :not(style)': {
                                    m: 1,
                                    p: 1,
                                    width: "100%",
                                    height: "auto",
                              },
                        }}
                  >
                        <Paper elevation={1}>
                              <Appointments
                                    date={date}></Appointments>
                        </Paper>
                  </Box>
            </Grid>

      </Grid>
      );
};

export default DashboardHome;