import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51Jw7IMLUedPupBbn2LmP9WJ2IRAA93NLWDdIDDRObEF7F03lDCH72Ba97FAeaeLbIZFrBTRnrV29xlvCA02kbqr800gomXF1Mf');

const Payment = () => {
      const { appointmentId } = useParams();
      const [appointment, setAppointment] = useState({});

      useEffect(() => {
            fetch(`http://localhost:5000/appointments/${appointmentId}`)
                  .then(res => res.json())
                  .then(data => setAppointment(data));

      }, [appointmentId])
      return (
            <div>
                  <h2>payment for id: {appointmentId}</h2>
                  <h3>Name: {appointment.patientName}</h3>
                  <h3>Email: {appointment.email}</h3>
                  <h3>Treatment: {appointment.serviceName}</h3>
                  <h3>Pay: ${appointment.price}</h3>

                  {appointment?.price && <Elements stripe={stripePromise}>
                        <CheckoutForm
                              appointment={appointment}
                        />
                  </Elements>}
            </div>
      );
};

export default Payment;