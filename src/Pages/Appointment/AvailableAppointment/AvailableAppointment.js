import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Booking from '../Booking/Booking';
import { Alert, Typography } from '@mui/material';

const bookings = [
      {
            id: 1,
            name: 'Teeth Orthodonics',
            time: '08.00 AM - 09.00 AM',
            price: 75,
            space: 10,
      },
      {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '09.00 AM - 10.00 AM',
            price: 320,
            space: 8,
      },
      {
            id: 3,
            name: 'Teeth Cleaning',
            time: '10.00 AM - 11.00 AM',
            price: 50,
            space: 9,
      },
      {
            id: 4,
            name: 'Cavity Protection',
            time: '11.00 AM - 12.00 PM',
            price: 120,
            space: 5,
      },
      {
            id: 5,
            name: 'Pediatric Dental',
            time: '06.00 PM - 07.00 PM',
            price: 220,
            space: 7,
      },
      {
            id: 6,
            name: 'Oral Surgery',
            time: '07.00 PM - 08.00 PM',
            price: 430,
            space: 8,
      },
]


const AvailableAppointment = ({ date }) => {
      const [bookingSuccess, setBookingSuccess] = useState(false);
      return (
            <Container>
                  <Typography variant="h5" sx={{ mt: 5 }} style={{ color: '#5CE7ED', fontWeight: 500 }}>
                        Available appointments on {date.toDateString()}
                  </Typography>
                  {bookingSuccess && <Alert severity="success" style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>Your Appoinment is Booked SuccessFully! 
                  </Alert>}
                  <Grid sx={{ pt: 4 }} container spacing={2}>
                        {
                              bookings.map(booking => <Booking
                                    key={booking.id}
                                    booking={booking}
                                    date={date}
                                    setBookingSuccess={setBookingSuccess}
                              ></Booking>)
                        }
                  </Grid>
            </Container>
      );
};

export default AvailableAppointment;