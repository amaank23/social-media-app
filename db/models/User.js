import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
    },
    dateOfBirth: {
        type: Date
    },
    age: {
        type: Number
    },
    profilePic: {
        type: String
    },
    profileCover: {
        type: String
    },
    dateCreated: {
        type: Date,
        default: new Date()
    }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)