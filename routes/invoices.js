const express = require('express')
const router = express.Router()


// Getting all invoices
router.get('/', async (req, res) => {
    try {
      const invoices = await Invoice.find()
      res.json(invoices)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

  //Add invoice
  // Creating one subscriber
router.post('/', async (req, res) => {
    const invoice = new Invoice({
      invoiceId:req.body.invoiceId,
      info:req.body.info
    })
    try {
      const newInvoice = await invoice.save()
      res.status(201).json(newInvoice)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

  module.exports = router