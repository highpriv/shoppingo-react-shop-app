// [...nextauth].ts
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import AuthService from "../../../services/auth"

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error(
    "NextAuth secred missed."
  );
}
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Node Provider",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const {email, password} = credentials;
       const response = await AuthService.login(email, password);
      if (response) {
        console.log(response.data)
        return response.data;
      }
      else{
        return null
      }
      },
    }),
  ],
  session: {
    jwt: true
  },
  pages: {
    signIn: "/login",
  },
});
