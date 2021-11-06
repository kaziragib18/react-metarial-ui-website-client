import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';
import Navbar from '../../Shared/Navbar/Navbar';

const Login = () => {
      const [loginData, setLoginData] = useState({});
      const {user, loginUser, isLoading, authError} = useAuth();

      const location = useLocation();
      const history = useHistory();

      const handleOnChange = e => {
            const field = e.target.name;
            const value = e.target.value;
            console.log(field, value);
            const newLoginData = { ...loginData };
            newLoginData[field] = value;
            setLoginData(newLoginData);
      }
      const handleLoginSubmit = e => {
          loginUser(loginData.email, loginData.password, location, history);
            e.preventDefault();
      }
      return (
            <>
                  <Navbar></Navbar>
                  <Container>
                        <Grid container spacing={2}>
                              <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                                    <Typography variant="body1" gutterBottom>Login
                                    </Typography>

                                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                                          <TextField
                                                sx={{ width: '75%', m: 1 }}
                                                id="standard-basic"
                                                label="Your Email"
                                                type="email"
                                                name="email"
                                                onChange={handleOnChange}
                                                variant="standard"
                                          />
                                          <TextField
                                                sx={{ width: '75%', m: 1 }}
                                                id="standard-basic"
                                                label="Your Password"
                                                type="password"
                                                name="password"
                                                onChange={handleOnChange}
                                                variant="standard"
                                          />

                                          <Button
                                                variant="contained"
                                                sx={{ width: "75%", m: 1 }}
                                                style={{ backgroundColor: '#5CE7ED' }}
                                                type="submit">Sign in</Button>

                                          <NavLink style={{ textDecoration: 'none' }}
                                                to="/register"
                                                variant="text">
                                                <Button
                                                >New user? Please Register</Button>
                                          </NavLink>
                                    </form>}
                                    {isLoading && <CircularProgress />
                                    }
                                    {user?.email && <Alert severity="success" style={{width:"100%", justifyContent:'center', alignItems:'center' }}>SuccessFully logged in
                                    </Alert>}
                                    {authError && <Alert severity="error" style={{width:"100%", justifyContent:'center', alignItems:'center' }}>{authError}
                                    </Alert>}
                              </Grid>
                              <Grid item xs={12} md={6}>
                                    <img src={login} style={{ width: '100%' }} alt="" />
                              </Grid>

                        </Grid>
                  </Container >
            </>
      );
};

export default Login;