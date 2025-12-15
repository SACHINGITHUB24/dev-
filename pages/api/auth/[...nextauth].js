
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
// import User from '@/models/userdata'
// import { signIn } from "next-auth/react"
// import { dbConnect } from "@/db"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    

  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
  async jwt({ token, account }) {
    // Persist the OAuth access_token to the token right after signin
    if (account) {
      token.accessToken = account.access_token
    }
    return token
  },
  async session({ session, token, user }) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken
    return session
  }

  // async signIn({user, account, profile}){
  //   await dbConnect()

  //   const existinguser = await User.findOne({email: user.email})

  //   if(!existinguser){
  //     await User.create({
  //       githubId: profile.id,
  //       name: user.name,
  //       username: profile.login,
  //       avatar: user.image,
  //     })
  //   }

  //   return true
  // }
  }

}

export default NextAuth(authOptions)


