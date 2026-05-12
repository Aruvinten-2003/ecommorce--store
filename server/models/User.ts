import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(

    {
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    passwordHash: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
    },

    phone: {
        type: String,
        default: ''
    },

    address: {
        street: { type: String, default: '' },
        city: { type: String, default: '' },
        state: { type: String, default: '' },
        postalCode: { type: String, default: '' },
        country: { type: String, default: '' }
    }
},
{ timestamps: true }
)
    


export default mongoose.models.User || mongoose.model('User', UserSchema)