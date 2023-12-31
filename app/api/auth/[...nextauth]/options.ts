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
          const res = await fetch(`${process.env.BASE_API_URL}/api/v1/auth/login`, {
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
          if(user.isSuccess){
            const result = await fetch(`${process.env.BASE_API_URL}/api/v1/userPointList/total`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${user.result.token}`
              }
            })

            const barcode = await fetch(`${process.env.BASE_API_URL}/api/v1/myinfo/cardManage`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${user.result.token}`
              }
            })
            const userPoint = await result.json()
            const barcodeResult = await barcode.json()
            user.result.barcode = barcodeResult.result[0].cardNumber
            user.result.userPoint = userPoint.result
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