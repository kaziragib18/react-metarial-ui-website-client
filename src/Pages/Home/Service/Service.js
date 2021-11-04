import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Service = (props) => {
      const { name, description, img } = props.service;
      return (
            <Grid item xs={2} sm={4} md={4}>
                  <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                        <CardMedia
                              component="img"
                              alt="service image"
                              style={{ width: 'auto', height: '90px', margin: '10px auto' }}

                              image={img}
                        />
                        <CardContent>

                              <Typography variant="h5" color="text.secondary" component="div">
                                    {name}
                              </Typography>

                              <Typography variant="body2" color="text.secondary">
                                    {description}
                              </Typography>
                        </CardContent>

                  </Card>
            </Grid>
      );
};

export default Service;