import express from 'express'
const router = express.Router()

// Controllers
import {
  mail,
  newProduct,
  getProducts,
  getProductById,
} from '../controllers/routeController.js'

router.get('/email', mail)
router.post('/products', newProduct)
router.get('/products', getProducts)
router.get('/product', getProductById)

export default router
