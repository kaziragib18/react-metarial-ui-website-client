import React, { useState, useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const CheckoutForm = ({ appointment }) => {
      const { price, patientName } = appointment;
      const stripe = useStripe();
      const elements = useElements();
      const { user } = useAuth();

      const [error, setError] = useState('');
      const [success, setSuccess] = useState('');
      const [processing, setProcessing] = useState(false);
      const [clientSecret, setClientSecret] = useState('');

      useEffect(() => {
            fetch('http://localhost:5000/create-payment-intent', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify({ price })
            })
                  .then(res => res.json())
                  .then(data => setClientSecret(data.clientSecret));
      }, [price]);

      const handleSubmit = async (e) => {
            e.preventDefault();
            if (!stripe || !elements) {
                  return;
            }
            const card = elements.getElement(CardElement);
            if (card === null) {
                  return;
            }
            setProcessing(true);

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                  type: 'card',
                  card
            });

            if (error) {
                  setError(error.message);
                  setSuccess('');
            }
            else {
                  setError('');
                  console.log(paymentMethod);
            }
            //payment intent
            const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
                  clientSecret,
                  {
                        payment_method: {
                              card: card,
                              billing_details: {
                                    name: patientName,
                                    email: user.email
                              },
                        },
                  },
            );
            if (intentError) {
                  setError(intentError.message);
                  setSuccess('');
            }
            else {
                  setError('');
                  setSuccess('Your payment processed successfully.')
                  console.log(paymentIntent);
                  setProcessing(false);
            }

      }
      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <CardElement
                              options={{
                                    style: {
                                          base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                      color: '#aab7c4',
                                                },
                                          },
                                          invalid: {
                                                color: '#9e2146',
                                          },
                                    },
                              }}
                        />
                        {processing ? <CircularProgress /> : <button type="submit" disabled={!stripe}>
                              Pay ${price}
                        </button>}
                  </form>
                  {
                        success && <p style={{ color: 'green' }}>{success}</p>
                  }
                  {
                        error && <p style={{ color: 'red' }}>{error}</p>
                  }
            </div>
      );
};

export default CheckoutForm;