import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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


const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
      const { name, time } = booking;

      const handleBookSubmit = e => {
                  alert("Your booking is Successfully");

                  //Collect data send it to server

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
                              <Typography id="transition-modal-title" variant="h6" sx={{m:1}} style={{ color: '#5CE7ED' }} component="h2">
                                    {name}
                              </Typography>
                              <form onClick={handleBookSubmit}>
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
                                          defaultValue="Your Name"
                                          size="small"
                                    />

                                    <TextField
                                          sx={{ width: "100%", m: 1 }}
                                          id="outlined-size-small"
                                          defaultValue="Your Email"
                                          size="small"
                                    />

                                    <TextField
                                          sx={{ width: "100%", m: 1 }}
                                          id="outlined-size-small"
                                          defaultValue="Your Phone Number"
                                          size="small"
                                    />
                                    <Button type="submit" variant="contained" sx={{m:1}} style={{ backgroundColor: '#5CE7ED' }}>Submit</Button>
                              </form>
                        </Box>
                  </Fade>
            </Modal>
      );
};

export default BookingModal;