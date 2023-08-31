'use client'
import { SessionProvider } from "next-auth/react";
import { EDGE_RUNTIME_WEBPACK } from "next/dist/shared/lib/constants";


export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}      
    </SessionProvider>
  )
}
