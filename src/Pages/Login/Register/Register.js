import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';
import Navbar from '../../Shared/Navbar/Navbar';

const Register = () => {
      const [registerData, setRegisterData] = useState({});

      const { user, registerUser, isLoading, authError } = useAuth();

      const handleOnChange = e => {
            const field = e.target.name;
            const value = e.target.value;
            const newRegisterData = { ...registerData };
            newRegisterData[field] = value;
            setRegisterData(newRegisterData);

            // console.log(field, value, newRegisterData);
      }
      const handleRegisterSubmit = e => {
            if (registerData.password !== registerData.passwordConfirm) {
                  alert("Your passward didn't match");
                  return;
            }
            registerUser(registerData.email, registerData.password)
            e.preventDefault();
      }
      return (
            <>
                  <Navbar></Navbar>
                  <Container>
                        <Grid container spacing={2}>
                              <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                                    <Typography variant="body1" gutterBottom>Register
                                    </Typography>

                                    {!isLoading && <form onSubmit={handleRegisterSubmit}>
                                          {/* <TextField
                                          sx={{ width: '75%', m: 1 }}
                                          id="standard-basic"
                                          label="Your Name"
                                          type="name"
                                          name="name"
                                          onChange={handleOnChange}
                                          variant="standard"
                                    /> */}
                                          <TextField
                                                sx={{ width: '75%', m: 1 }}
                                                required
                                                id="standard-basic"
                                                label="Your Email"
                                                type="email"
                                                name="email"
                                                onChange={handleOnChange}
                                                variant="standard"
                                          />
                                          <TextField
                                                sx={{ width: '75%', m: 1 }}
                                                required
                                                id="standard-basic"
                                                label="Your Password"
                                                type="password"
                                                name="password"
                                                onChange={handleOnChange}
                                                variant="standard"
                                          />
                                          <TextField
                                                required
                                                sx={{ width: '75%', m: 1 }}
                                                id="standard-basic"
                                                label="Confirm Password"
                                                type="password"
                                                name="passwordConfirm"
                                                onChange={handleOnChange}
                                                variant="standard"
                                          />

                                          <Button
                                                variant="contained"
                                                sx={{ width: "75%", m: 1 }}
                                                style={{ backgroundColor: '#5CE7ED' }}
                                                type="submit">Sign in</Button>

                                          <NavLink style={{ textDecoration: 'none' }}
                                                to="/login"
                                                variant="text">
                                                <Button>Already Have An Account? Please Login</Button>
                                          </NavLink>
                                    </form>}
                                    {isLoading && <CircularProgress />
                                    }
                                    {user?.email && <Alert severity="success" style={{width:"100%", justifyContent:'center', alignItems:'center' }}>Your Account is Created SuccessFully!
                                    </Alert>}
                                    {authError && <Alert severity="error" style={{width:"100%", justifyContent:'center', alignItems:'center' }}>{authError}
                                    </Alert>}
                              </Grid>
                              <Grid item xs={12} md={6}>
                                    <img src={login} style={{ width: '100%' }} alt="" />
                              </Grid>

                        </Grid>
                  </Container>
            </>
      );
};

export default Register;