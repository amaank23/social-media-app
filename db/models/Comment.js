import mongoose from 'mongoose'


const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts'
    },
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    reply: [
        {
            comment: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'comments'
            }
        }
    ],
    dateCreated: {
        type: Date,
        default: new Date()
    }
})

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema)