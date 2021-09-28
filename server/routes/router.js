import express from 'express'
const router = express.Router()

// Controllers
import { mail, newProduct } from '../controllers/routeController.js'

router.get('/email', mail)
router.post('/products', newProduct)

export default router
