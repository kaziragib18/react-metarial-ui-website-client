import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Payment = () => {
      const { appointmentId } = useParams();
      const [appointment, setAppointment] = useState({});

      useEffect(() =>{
            fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));

      },[appointmentId])
      return (
            <div>
                  <h2>payment for id: {appointmentId}</h2>
                  <h3>Name: {appointment.patientName}</h3>
                  <h3>Email: {appointment.email}</h3>
                  <h3>Treatment: {appointment.serviceName}</h3>
                  <h3>Pay: ${appointment.price}</h3>
            </div>
      );
};

export default Payment;