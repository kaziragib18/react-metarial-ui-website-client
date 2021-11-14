import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/login.png';
import Navbar from '../../Shared/Navbar/Navbar';

const Register = () => {
      const [loginData, setLoginData] = useState({});
      const history = useHistory();

      const { user, registerUser, isLoading, authError } = useAuth();

      const handleOnBlur = e => {
            const field = e.target.name;
            const value = e.target.value;
            const newLoginData = { ...loginData };
            newLoginData[field] = value;
            // console.log(newLoginData);
            setLoginData(newLoginData);

            // console.log(field, value, newRegisterData);
      }
      const handleLoginSubmit = e => {
            if (loginData.password !== loginData.passwordConfirm) {
                  alert('Your password did not match');
                  return
            }
            registerUser(loginData.email, loginData.password, loginData.name, history);
            e.preventDefault();
      }
      return (
            <>
                  <Navbar></Navbar>
                  <Container>
                        <Grid container spacing={2}>
                              <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                                    <Typography variant="body1" style={{ fontSize: "18px", fontWeight: "400", color: "gray" }} gutterBottom>Register
                                    </Typography>

                                    {!isLoading && <form>
                                          <TextField
                                                required
                                                sx={{ width: '75%', m: 1 }}
                                                id="standard-basic"
                                                label="Your Name"
                                                type="name"
                                                name="name"
                                                onBlur={handleOnBlur}
                                                variant="standard"
                                          />
                                          <TextField
                                                sx={{ width: '75%', m: 1 }}
                                                required
                                                id="standard-basic"
                                                label="Your Email"
                                                type="email"
                                                name="email"
                                                onBlur={handleOnBlur}
                                                variant="standard"
                                          />
                                          <TextField
                                                sx={{ width: '75%', m: 1 }}
                                                required
                                                id="standard-basic"
                                                label="Your Password"
                                                type="password"
                                                name="password"
                                                onBlur={handleOnBlur}
                                                variant="standard"
                                          />
                                          <TextField
                                                required
                                                sx={{ width: '75%', m: 1 }}
                                                id="standard-basic"
                                                label="Confirm Password"
                                                type="password"
                                                name="passwordConfirm"
                                                onBlur={handleOnBlur}
                                                variant="standard"
                                          />

                                          <Button onClick={handleLoginSubmit}
                                                variant="contained"
                                                sx={{ width: "75%", m: 1 }}
                                                style={{ backgroundColor: '#5CE7ED' }}
                                          >Sign up</Button>

                                          <NavLink style={{ textDecoration: 'none' }}
                                                to="/login"
                                                variant="text">
                                                <Button>Already Have An Account? Please Login</Button>
                                          </NavLink>
                                    </form>}
                                    {isLoading && <CircularProgress />
                                    }
                                    {user?.email && <Alert severity="success" style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>Your Account is Created SuccessFully!
                                    </Alert>}
                                    {authError && <Alert severity="error" style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>{authError}
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