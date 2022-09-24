const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({

  invoiceId:Number,
  companyName:String,
  products:String,
  totalPrice:Number

})

const SubscriberSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  subscriberDetails: {
    type: String,
    required: true
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  },
    
      invoices:[InvoiceSchema]
    
  })

const subscriberModel = mongoose.model('Subscriber',SubscriberSchema)
module.exports = subscriberModel;
