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

  const allProducts =
    prodType !== '' ? await Product.find({ prodType }) : await Product.find({})

  res.status(201).json(allProducts)
})

/**
 * Paste one or more documents here
 */
// {
//   "images": ["/public/images/products/pethouses/dutchcoop1.png", "/public/images/products/pethouses/dutchcoop2.png", "/public/images/products/pethouses/dutchcoop3.png", "/public/images/products/pethouses/dutchcoop4.png", "/public/images/products/pethouses/dutchcoop5.png"],
//   "details": ["6' x 10' Dutch Style Chicken Coop ( also available in 5' x 8') ", "10 hole nesting box ( 8 hole nesting box in 5' x 8' )", "Chicken door with ramp", "Shingled roof", "Man door", "One 18 x 23 window", "Glassboard flooring for EZ cleaning", "Built in chicken roosts"],
//   "title": "6' x 10' Dutch Style Chicken Coop",
//   "price": "DCS610 (6'x10') $1,849.95 excludes shipping DCS5x8 (5'x8') $1,694.95 excludes shipping",
//   "prodType": "Pet Structures",
//   "__v": 0
// }
