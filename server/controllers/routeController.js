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
//   "images": ["/public/images/products/sheds/shedandgarage.png", "/public/images/products/sheds/aframegarage2.png", "/public/images/products/sheds/aframegarage3.png", "/public/images/products/sheds/aframegarage4.png", "/public/images/products/sheds/aframegarage5.png", "/public/images/products/sheds/aframegarage6.png", "/public/images/products/sheds/aframegarage7.png", "/public/images/products/sheds/aframegarage8.png"],
//   "details": ["12' x 40' Shed and Garage", "Vinyl Siding", "Metal or shingled roof available", "7' 3 high side walls", "Optional board and batton siding at additional price", "8' inside ceiling height", "Two 3' x 6'8 Nine Lite Doors", "12 OC Treated Floor joist", "5/8 Plywood on floor", "Felt paper on roof under shingles", "30 year architectural shingles", "Insulated floor, ceiling and walls", "Insulated floor, ceiling and walls", "32 ridge vent on roof", "Vented soffit", "Electrical Package", "We can make the inside/outside anyway you like to fit your budget"],
//   "title": "12' x 40' Shed and Garage",
//   "price": "N/A",
//   "prodType": "Shed",
//   "__v": 0
// }
