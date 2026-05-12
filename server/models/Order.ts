import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema(
    {
        
        customer:{
            name:{type: String, required: true},
            email: { type: String, required: true },
            phone: { type: String },
            address: { type: String, required: true }
        },

        items: [
    {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
    }
    ],
    total: { type: Number, required: true },
    status: {
        type: String,
        enum: ['pending', 'paid', 'shipped', 'cancelled'],
        default: 'pending'
    }
},
{ timestamps: true }
)

export default mongoose.models.Order || mongoose.model('Order', OrderSchema)


