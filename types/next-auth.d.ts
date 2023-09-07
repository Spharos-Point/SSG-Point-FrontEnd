import NextAuth, { DefaultSession } from "next-auth/next";

declare module "next-auth" {

    interface Session {
        user: {
            token: string,
            uuid: string,
            userName: string,
        } & DefaultSession["user"]
    }
}