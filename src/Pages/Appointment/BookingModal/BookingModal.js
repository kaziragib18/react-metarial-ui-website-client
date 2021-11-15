import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import useAuth from '../../../hooks/useAuth';

const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '1px solid #ffffff',
      borderRadius: '10px',
      boxShadow: 24,
      p: 4,
};


const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
      const { name, time, price } = booking;
      const { user } = useAuth();

      const initialInfo = {patientName: user.displayName, email: user.email, phone: ''}
      const [bookingInfo, setBookingInfo] = useState(initialInfo);

      const handleOnBlur = e => {
            const field = e.target.name;
            const value = e.target.value;
            const newInfo = {...bookingInfo};
            newInfo[field] = value;
            // console.log(newInfo);
            setBookingInfo(newInfo);
      }


      const handleBookingSubmit = e => {
            // collect data
            const appointment = {
                  ...bookingInfo,
                  time,
                  price,
                  serviceName: name,
                  date: date.toLocaleDateString()
            }
            // console.log(appointment);

            //Collect data send it to server
            fetch('https://polar-woodland-79859.herokuapp.com/appointments',{
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(appointment)
            })
            .then(res=>res.json())
            .then(data=>{
                  // console.log(data);
                  if(data.insertedId){
                        setBookingSuccess(true);
                        handleBookingClose();
                  }
            });

            handleBookingClose();
            e.preventDefault();
      }

      return (
            <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={openBooking}
                  onClose={handleBookingClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                        timeout: 500,
                  }}
            >
                  <Fade in={openBooking}>
                        <Box sx={style}>
                              <Typography id="transition-modal-title" variant="h6" sx={{ m: 1 }} style={{ color: '#5CE7ED' }} component="h2">
                                    {name}
                              </Typography>
                              <form >
                                    <TextField
                                          disabled
                                          sx={{ width: "100%", m: 1 }}
                                          id="outlined-size-small"
                                          defaultValue={date.toDateString()}
                                          size="small"
                                    />

                                    <TextField
                                          disabled
                                          sx={{ width: "100%", m: 1 }}
                                          id="outlined-size-small"
                                          defaultValue={time}
                                          size="small"
                                    />

                                    <TextField
                                          sx={{ width: "100%", m: 1 }}
                                          id="outlined-size-small"
                                          name="patientName"
                                          onBlur={handleOnBlur}
                                          defaultValue={user.displayName}
                                          size="small"
                                    />

                                    <TextField
                                          sx={{ width: "100%", m: 1 }}
                                          id="outlined-size-small"
                                          name="email"
                                          onBlur={handleOnBlur}
                                          defaultValue={user.email}
                                          size="small"
                                    />

                                    <TextField
                                          sx={{ width: "100%", m: 1 }}
                                          required
                                          id="outlined-size-small"
                                          name="age"
                                          onBlur={handleOnBlur}
                                          placeholder="Enter Your Age"
                                          type="number"
                                          defaultValue=""
                                          size="small"
                                    />
                                    <TextField
                                          sx={{ width: "100%", m: 1 }}
                                          required
                                          id="outlined-size-small"
                                          name="phone"
                                          onBlur={handleOnBlur}
                                          placeholder="Phone Number"
                                          type="number"
                                          defaultValue=""
                                          size="small"
                                    />
                                    <TextField
                                          sx={{ width: "100%", m: 1 }}
                                          required
                                          id="outlined-size-small"
                                          name="phone"
                                          onBlur={handleOnBlur}
                                          placeholder="Price"
                                          type="number"
                                          defaultValue={price}
                                          size="small"
                                    />

                                    <Button onClick={handleBookingSubmit} variant="contained" sx={{ m: 1 }} style={{ backgroundColor: '#5CE7ED' }}>Submit</Button>
                              </form>
                        </Box>
                  </Fade>
            </Modal>
      );
};

export default BookingModal;