import NextAuth, { DefaultSession } from "next-auth/next";

declare module "next-auth" {

    interface Session {
        user: {
            token: string,
            uuid: string,
            name: string,
        } & DefaultSession["user"]
    }
}