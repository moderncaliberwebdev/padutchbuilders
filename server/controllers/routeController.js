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
//   "images": ["/public/images/products/poolhouses/custompoolhouses.png"],
//   "details": ["We enjoy building to your specifications. If you have a project in mind we would be happy to work with you to make it a reality. Contact us today to get started!"],
//   "title": "Custom Pool Houses, Playhouses, Cabins",
//   "price": "N/A",
//   "prodType": "Poolhouses",
//   "__v": 0
// }
