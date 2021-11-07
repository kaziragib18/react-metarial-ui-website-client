import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ booking, date, setBookingSuccess }) => {
      const { name, time, space } = booking;
      const [openBooking, setBookingOpen] = React.useState(false);
      const handleBookingOpen = () => setBookingOpen(true);
      const handleBookingClose = () => setBookingOpen(false);

      return (
            <>
                  <Grid item xs={12} sm={2} md={4}>
                        <Paper elevation={3} sx={{ py: 5 }}>
                              <Typography variant="h5" gutterBottom component="div" style={{ color: '#5CE7ED', fontWeight: 500 }}>
                                    {name}
                              </Typography>

                              <Typography sx={{ fontSize: 16, fontWeight: 500 }} gutterBottom component="div">
                                    {time}
                              </Typography>

                              <Typography variant="caption" sx={{ m: 2 }} display="block" gutterBottom>
                                    {space} Spaces Available
                              </Typography>
                              <Button onClick={handleBookingOpen} variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Book Appointment</Button>
                        </Paper>
                  </Grid>

                  <BookingModal
                        booking={booking}
                        date={date}
                        openBooking={openBooking}
                        handleBookingClose={handleBookingClose}
                        setBookingSuccess={setBookingSuccess}
                  ></BookingModal>
            </>
      );
};

export default Booking;