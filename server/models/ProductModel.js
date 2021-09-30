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
  images: {
    type: Array,
    required: true,
  },
  prodType: {
    type: String,
    required: true,
  },
  details: {
    type: Array,
    required: true,
  },
  extraDetails: {
    type: Boolean,
    required: false,
  },
})

const Product = mongoose.model('Product', productModelSchema)

export default Product
