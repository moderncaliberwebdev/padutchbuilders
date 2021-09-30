import express from 'express'
const router = express.Router()

// Controllers
import {
  mail,
  newProduct,
  getProducts,
} from '../controllers/routeController.js'

router.get('/email', mail)
router.post('/products', newProduct)
router.get('/products', getProducts)

export default router
