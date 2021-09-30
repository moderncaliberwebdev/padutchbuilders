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
    images: ['/public/images/products/sheds/concreteslabs.png'],
    prodType: 'Shed',
    details: ['All Types of Concrete Slabs'],
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

export const getProducts = asyncHandler(async (req, res) => {
  const prodType = req.query.prodtype

  const allProducts = await Product.find({ prodType })

  res.status(201).json(allProducts)
})

/**
 * Paste one or more documents here
 */
// {
//   "images": ["/public/images/products/sheds/2aframeshed1.png", "/public/images/products/sheds/2aframeshed2.png", "/public/images/products/sheds/aframegarage2.png", "/public/images/products/sheds/aframegarage3.png", "/public/images/products/sheds/aframegarage4.png", "/public/images/products/sheds/aframegarage5.png", "/public/images/products/sheds/aframegarage6.png", "/public/images/products/sheds/aframegarage7.png", "/public/images/products/sheds/aframegarage8.png"],
//   "details": ["10' x 16' A-Frame Shed", "1' x 10' Tongue and Groove", "Optional flower boxes", "Optional metal ridge vent", "Optional end vents", "4 x 4 treated runners", "8 overhang all around", "Green metal roof"],
//   "title": "10' x 16' A-Frame Shed",
//   "price": "$2,965.70",
//   "prodType": "Shed",
//   "__v": 0
// }
