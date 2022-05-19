import dbConnect from "../../../db/db"
import User from "../../../db/models/User";
import { hashPassword } from "../../../lib/password";

async function handler(req, res){
    if(req.method === 'POST'){
        try {
            await dbConnect();
        } catch (error) {
            res.status(502).json({ message: 'Could not connect to the Database' })
        }
        const { email, password, name } = req.body
        
        if(!email || email.trim() === '' || !password || password.trim() === '' || !name || name.trim() === ''){
            res.status(400).json({ message: 'Invalid User Information' })
            return;
        }

        try {   
            const user = await User.findOne({ email: email })
            if(user){
                res.status(409).json({ message: 'this email is registered, please try another' })
                return;
            }
        } catch (error) {
            res.status(400).json({ message: 'Something went wrong, please try again', error: error.message })
        }

        try {
            const username = email.split(/(?=@)/g)[0]

            const hashedPassword = await hashPassword(password);
            const user = new User({
                email,
                password: hashedPassword,
                name,
                username
            })

            await user.save();

            res.status(201).json({ message: 'User Created Successfully', user })
        } catch (error) {
            res.status(400).json({ message: 'Something went wrong, please try again', error: error.message })
        }
    }
}

export default handler