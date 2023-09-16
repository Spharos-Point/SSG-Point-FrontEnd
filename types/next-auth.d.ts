import NextAuth, { DefaultSession } from "next-auth/next";

declare module "next-auth" {

    interface Session {
        user: {
            token: string,
            // uuid: string,
            name: string,
            userPoint: number,
            barcode: string,
        } & DefaultSession["user"]
    }
}