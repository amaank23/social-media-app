import { compare } from "bcrypt";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../db/db";
import User from "../../../db/models/User";

export default nextAuth({
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req){
                try {
                    await dbConnect();
                    const user =  await User.findOne({ email: credentials.email })

                    if(!user){
                        throw new Error('User not Found')
                    }

                    const verifyPassword = await compare(credentials.password, user.password)

                    if(!verifyPassword){
                        throw new Error('Wrong Password. Please try again')
                    }

                    
                    return { user }
                } catch (error) {
                    throw new Error(error.message)
                }
            }
        })
    ]
})