import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  // stripe wants the price in cents so if the price is 50 dollars
  // should be 5000
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_B6q1WHB4Vrwcxexwy3hCUWZr009QEPBVkx'
  const onToken = (token) => {
    console.log(token)
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      // token={onToken}
      label="Pay Now"
      name="Cyclone Store"
      billingAddress
      shippingAddress
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
