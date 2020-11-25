const express = require('express') // library tahat allows build API server easily
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const stripe = require('stripe')
// import express from 'express'
// import cors from 'cors'
// import bodyParser from 'body-parser'
// import express from 'express'
// import stripe from 'stripe'
// *=*=*=*=*=*=*=*==*==**=*==**=*=*=*=*=*=*=*=*=*=*=**=**=
// test with this too
// const { resolve } = require("path");
// const env = require("dotenv").config({ path: "./.env" });
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const port = process.env.PORT || 4242;

if (process.env.NODE_ENV !== 'production')
  require('dotenv').config({
    path: path.resolve(__dirname, '../server/.env'),
  })

const stripeK = stripe(process.env.STRIPE_SECRET_KEY)

// const srti = stripe()
const app = express()

const port = process.env.PORT || 5000

app.use(bodyParser.json())
//app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))
//app.use(express.urlencoded({extended: true}))

app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build'))) // 1

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'))
  })
}

app.listen(5000, (error) => {
  if (error) throw error
  console.log('ESN server deu erro running on port ' + port)
})

const calculateOrderAmount = (totalPrice) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client

  return totalPrice * 100
}

app.post('/create-payment-intent', async (req, res) => {
  const { total } = req.body

  const paymentIntent = await stripeK.paymentIntents.create({
    amount: calculateOrderAmount(total),
    currency: 'usd',
  })

  res.send({
    clientSecret: paymentIntent.client_secret,
  })
  console.log(await paymentIntent)
})

app.get()
