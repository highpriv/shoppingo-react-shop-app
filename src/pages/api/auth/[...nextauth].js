import NextAuth from "next-auth"
export const authOptions = {
  pages: {
    signIn: "/signIn"
  },

  providers:[
    Providers.Email({
        
    })
  ]
}
export default NextAuth(authOptions)