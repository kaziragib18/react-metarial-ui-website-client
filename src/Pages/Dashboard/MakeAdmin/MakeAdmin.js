import { Alert, Button, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
      const [email, setEmail] = useState('');
      const [success, setSuccess] = useState(false);
      const { token } = useAuth();

      const handleOnBlur = e => {
            setEmail(e.target.value);
      }
      const handleAdminSubmit = e => {
            const user = { email };
            fetch('http://localhost:5000/users/admin', {
                  method: 'PUT',
                  headers: {
                        'authorization': `Bearer ${token}`,
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(user)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.modifiedCount) {
                              console.log(data);
                              // setEmail('');
                              setSuccess(true);
                        }
                  })

            e.preventDefault();
      }

      return (
            <div>
                  <Box
                        sx={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              '& > :not(style)': {
                                    m: 1,
                                    width: "100%",
                                    height: 300
                              },
                        }}
                  >
                        <Paper elevation={5}>
                              <form>
                                    <Typography variant="body1" sx={{ mt: 3 }} style={{ fontSize: "18px", fontWeight: "400", color: "gray" }} gutterBottom>Make New Admin
                                    </Typography>
                                    <hr />
                                    <TextField
                                          sx={{ width: '30%', m: 1 }}
                                          label="Your Email"
                                          type="email"
                                          name="email"
                                          onBlur={handleOnBlur}
                                          variant="standard"
                                    />
                                    <br />
                                    <Button
                                          onClick={handleAdminSubmit}
                                          variant="contained"
                                          sx={{ width: "15%", m: 1 }}
                                          style={{ backgroundColor: '#5CE7ED' }}
                                    >Make Admin</Button>
                              </form>
                              {success && <Alert severity="success" style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>SuccessFully Made New Admin!
                              </Alert>}

                        </Paper>
                  </Box>
            </div>
      );
};

export default MakeAdmin;