import mongoose from 'mongoose'

const productModelSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

const Product = mongoose.model('Product', productModelSchema)

export default Product
