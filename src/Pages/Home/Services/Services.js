import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
      {
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat itaque at mollitia corporis maiores voluptatibus consequuntur ad in dolore, maxime aut, eligendi cumque omnis.',
            img: fluoride
      },
      {
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat itaque at mollitia corporis maiores voluptatibus consequuntur ad in dolore, maxime aut, eligendi cumque omnis.',
            img: cavity
      },
      {
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat itaque at mollitia corporis maiores voluptatibus consequuntur ad in dolore, maxime aut, eligendi cumque omnis.',
            img: whitening
      }
]

const Services = () => {
      return (
            <Box sx={{ flexGrow: 1 }}>
                  <Container>
                  <Typography sx={{ fontWeight: 600, m:2 , color: '#5CE7ED'}} variant="h6" component="div">
                                    Our Services
                              </Typography>
                  <Typography sx={{ fontWeight: 600, m:2}} variant="h5" color="text.secondary" component="div">
                                    Services We Provide
                              </Typography>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                              {
                                    services.map(service => <Service
                                          key={service.name}
                                          service={service}
                                    ></Service>)
                              }
                        </Grid>
                  </Container>
            </Box>
      );
};

export default Services;