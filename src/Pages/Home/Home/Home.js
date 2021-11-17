import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import InfoCard from '../InfoCard/InfoCard';
import Services from '../Services/Services';

const Home = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <Banner></Banner>
                  <InfoCard></InfoCard>
                  <Services></Services>
                  <AppointmentBanner></AppointmentBanner>
                  <Doctors></Doctors>
                  <Contact></Contact>
                
            </div>
      );
};

export default Home;