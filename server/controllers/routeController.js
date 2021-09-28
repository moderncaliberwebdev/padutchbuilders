// Imports
import asyncHandler from 'express-async-handler'

// MailGun
import mailTo from '../mail.js'

import Product from '../models/ProductModel.js'

export const mail = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.query
  mailTo(name, email, subject, message, (err, data) => {
    res.send({
      name,
      email,
      subject,
      message,
      formResponse: err,
    })
  })
})

export const newProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    title: 'Concrete Slabs',
    price: '$1,000',
    image: '/public/images/products/sheds/concreteslabs.png',
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})
