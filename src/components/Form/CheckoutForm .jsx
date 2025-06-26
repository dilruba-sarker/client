import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import "./checkOutform.css";
import ClipLoader from 'react-spinners/ClipLoader';
import useAxiosSecure, { axiosSecure } from './../../hooks/useAxiosSecure';

const CheckoutForm = ({ totalPrice ,closeModal,orderData}) => {
    const axiosSecure=useAxiosSecure()
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [clientSecret,setClientSecret]=useState()

  useEffect(()=>{
    const getClientSecret=async()=>{
const {data}=await axiosSecure.post('/create-payment-intent',{
    quantity:orderData?.quantity,
    plantId:orderData?.plantId,

})
console.log(data)
    }
    getClientSecret()
  },[axiosSecure, orderData?.plantId, orderData?.quantity])
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (card == null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
  await new Promise((resolve) => setTimeout(resolve, 1000));
    if (error) {
      console.log('[error]', error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log('[PaymentMethod]', paymentMethod);
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': { color: '#aab7c4' },
            },
            invalid: { color: '#9e2146' },
          },
        }}
      />

      {cardError && <p className='text-red-500 mt-2'>{cardError}</p>}

      <button
        className='bg-green-500 text-white px-4 py-2 mt-4 rounded disabled:opacity-50'
        type="submit"
        disabled={!stripe || processing}
      >
        {processing ? (
          <ClipLoader
            color="#ffffff"
            loading={true}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          `Pay $${totalPrice}`
        )}
      </button>
      <button className='btn btn-accent ml-12' onClick={closeModal}>cancel</button>
    </form>
  );
};

export default CheckoutForm;
