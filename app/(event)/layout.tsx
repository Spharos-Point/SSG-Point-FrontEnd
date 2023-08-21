import '../globals.css';

import React from 'react';
import Footer from '@/components/layout/Footer';
import EventHeader from '@/components/layout/EventHeader';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <EventHeader />      
            {children}
            <Footer/>
        </>

    )
  }

