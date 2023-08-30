import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        loginId: { label: "LoginId", type: "text", placeholder: "SSGPOINT" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        if(!credentials?.loginId || !credentials?.password) return null
        
        const res = await fetch("http://localhost:8000/api/v1/auth/login", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            loginId: credentials?.loginId,
            password: credentials?.password,
          })
        })

        const user = await res.json()
  
        if (res.ok && user) {
          console.log(user)
          return user
        }
        return null
      }
    })
  ],

  callbacks: {
    async jwt({token, user}) {
      return {...token, ...user}
    },

    async session({ session, token }){
      session.user = token as any;
      return session;
    },
    async redirect({ url, baseUrl }){
      if(url.startsWith("/"))  return `${baseUrl}${url}`

      else if(new URL(url).origin === baseUrl) return url

      return baseUrl
    },
  },

  pages: {
    signIn: "/login",
  },

}