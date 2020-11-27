// import React, { useState, useEffect } from 'react'

// import {
//   CardElement,
//   CardNumberElement,
//   CardExpiryElement,
//   CardCvcElement,
//   useStripe,
//   useElements,
// } from '@stripe/react-stripe-js'

// import './stripe-button.styles.scss'

// const StripeCheckoutButton = ({ price }) => {
//   const [succeeded, setSucceeded] = useState(false)

//   const [error, setError] = useState(null)

//   const [processing, setProcessing] = useState('')

//   const [disabled, setDisabled] = useState(true)

//   const [clientSecret, setClientSecret] = useState('')

//   const stripe = useStripe()

//   const elements = useElements()

//   useEffect(() => {
//     // Create PaymentIntent as soon as the page loads

//     window

//       .fetch('/create-payment-intent', {
//         method: 'POST',

//         headers: {
//           'Content-Type': 'application/json',
//         },

//         body: JSON.stringify({ total: price }),
//       })

//       .then((res) => {
//         return res.json()
//       })

//       .then((data) => {
//         setClientSecret(data.clientSecret)
//       })
//   }, [])

//   const cardStyle = {
//     style: {
//       base: {
//         color: '#32325d',

//         fontFamily: 'Arial, sans-serif',

//         fontSmoothing: 'antialiased',

//         fontSize: '16px',

//         '::placeholder': {},
//       },

//       invalid: {
//         color: '#fa755a',

//         iconColor: '#fa755a',
//       },
//     },
//   }

//   const handleChange = async (event) => {
//     // Listen for changes in the CardElement

//     // and display any errors as the customer types their card details

//     setDisabled(event.empty)

//     setError(event.error ? event.error.message : '')
//   }

//   const handleSubmit = async (ev) => {
//     ev.preventDefault()

//     setProcessing(true)

//     const payload = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     })

//     if (payload.error) {
//       setError(`Payment failed ${payload.error.message}`)

//       setProcessing(false)
//     } else {
//       setError(null)

//       setProcessing(false)

//       setSucceeded(true)
//       alert('Pagamento realizado com sucesso! Obrigado')
//     }
//   }

//   return (
//     <form id="payment-form" onSubmit={handleSubmit}>
//       <fieldset className="FormGroup">
//         <div className="FormRow">
//           <CardElement
//             id="card-element"
//             options={cardStyle}
//             onChange={handleChange}
//           />
//           <button disabled={processing || disabled || succeeded} id="submit">
//             <span id="button-text">
//               {processing ? (
//                 <div className="spinner" id="spinner"></div>
//               ) : (
//                 'Pay'
//               )}
//             </span>
//           </button>
//         </div>
//       </fieldset>

//       {/* Show any error that happens when processing the payment */}

//       {error && (
//         <div className="card-error" role="alert">
//           {error}
//         </div>
//       )}

//       {/* {alert('Pagamento realizado com sucesso! Obrigado.')} */}

//       <p className={succeeded ? 'result-message' : 'result-message hidden'}>
//         Payment succeeded, see the result in your
//         <a href={`https://dashboard.stripe.com/test/payments`}>
//           {' '}
//           Stripe dashboard.
//         </a>{' '}
//         Refresh the page to pay again.
//       </p>
//     </form>
//   )
// }

// export default StripeCheckoutButton

// *==**=*==*==*=*==*=*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=**=*=*=**=**=*==**=*==*==*=*==*=*=*=*=*=*=*==
// *==**=*==*==*=*==*=*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=**=*=*=**=**=*==**=*==*==*=*==*=*=*=*=*=*=*==

// import React, { useState, useEffect } from 'react'
// import { PaymentRequestButtonElement, useStripe } from '@stripe/react-stripe-js'

// import CustomButton from '../custom-button/customButton-component'

// const StripeCheckoutButton = ({ price }) => {
//   const stripe = useStripe()
//   const [paymentRequest, setPaymentRequest] = useState(null)

//   useEffect(() => {
//     if (stripe) {
//       const pr = stripe.paymentRequest({
//         country: 'BR',
//         currency: 'brl',
//         total: {
//           label: 'Demo total',
//           amount: price,
//         },
//         requestPayerName: true,
//         requestPayerEmail: true,
//       })

//       // Check the availability of the Payment Request API.
//       pr.canMakePayment().then((result) => {
//         if (result) {
//           setPaymentRequest(pr)
//         }
//       })
//     }
//   }, [stripe])

//   if (paymentRequest) {
//     return <PaymentRequestButtonElement options={{ paymentRequest }} />
//   }

//   // Use a traditional checkout form.
//   return <button role="link">PAY NOW</button>
// }

// export default StripeCheckoutButton
