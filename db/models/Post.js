import mongoose from 'mongoose'


const PostSchema = new mongoose.Schema({
    caption: {
        required: true,
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    } ,
    files: [
        {
            file: String,
            fileType: String
        }
    ],
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    dateCreated: {
        type: Date,
        default: new Date()
    }
})


export default mongoose.models.Post || mongoose.model('Post', PostSchema)