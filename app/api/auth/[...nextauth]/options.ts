import { error } from 'console';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao"
import NaverProvider from "next-auth/providers/naver"
import { redirect } from 'next/navigation';

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
        
        try {
          const res = await fetch("https://newbiefive.store/api/v1/auth/login", {
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
          console.log(user.isSuccess)
          if(user.isSuccess){
            return user.result
          }     
        } catch (e: any) {
          throw new Error(e.message);
        }
        return null
      }
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET
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
    error: "/my_error",
  },

}