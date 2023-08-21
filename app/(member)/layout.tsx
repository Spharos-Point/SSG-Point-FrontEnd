import '../globals.css';

import React from 'react';
import Footer from '@/components/layout/Footer';
import MemberHeader from '@/components/layout/MemberHeader';



export default function MemberLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html>
        <body>
          <MemberHeader />      
          {children}
          <Footer/>
        </body>
      </html>
    )
  }

