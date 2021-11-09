import { Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import bg from '../../../images/appointment-bg.png'

const Contact = () => {

      return (
            <div style={{
                  background: `url(${bg}), linear-gradient(#3A4256,#3A4256)`,
                  backgroundBlendMode: 'overlay',
                  backgroundRepeat: 'no-repeat',
                  textAlign: 'center',
                  justifyContent: 'center',
                  padding: '30px',
                  height: 600,
                  marginBottom: 100,
                  marginTop: 100,
            }}>
                  <Container maxWidth="md" sx={{ mt: 5 }} >
                        <Typography variant="h6" color="#19D3AE">Contact us</Typography>
                        <Typography variant="h4" color="#fff">Always connect with us</Typography>
                        <TextField
                              placeholder="Email"
                              margin="normal"
                              required
                              sx={{ backgroundColor: '#fff', borderRadius: 1, width: '76%' }}
                        />
                        <TextField
                              placeholder="Subject"
                              margin="normal"
                              required
                              sx={{ backgroundColor: '#fff', borderRadius: 1, width: '76%' }}
                        />
                        {/* <TextField 
                              sx={{ width: '75%', m: 1}}
                              id="standard-basic"
                              label="Your Message"
                              type="description"
                              style={{ backgroundColor: '#ffffff'}}
                        /> */}
                        <textarea rows={10} style={{
                              border: 0,
                              outline: 0,
                              width: '74%',
                              margin: '20px 0',
                              borderRadius: 3,
                              fontFamily: 'inherit',
                              padding: 10
                        }} placeholder="Your Message"></textarea>
                        <br />
                        <Button
                              variant="contained"
                              sx={{ width: "20%", m: 1 }}
                              style={{ backgroundColor: '#5CE7ED' }}
                        >Send</Button>
                  </Container>
            </div>
      );
};

export default Contact;