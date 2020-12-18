import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HmkQdK2dQwffeSRDHf2mWTiNEHufq5RmGRCF3m4zedGj8LP1P41xZ7fMCGdpT8AFIDvoYgrKG3ZIzTqxAZMVSPT002X0D3Anf";

  const onToken = (token) => {
    axios({
      url:'payment',
      method:'post',
      data:{
        amount:priceForStripe,
        token
      }
    }).then(res=>alert("Payment successful")).catch(error => 
      {
    alert("There was an issue with your payment, please check your credit card number"
    );
  });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Mani Online Shopping Ltd"
      billingAddress
      shippingAddress
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      description={`Your Price is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
