import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Layout = (props: { children: any }) => {
    const { children } = props
    return (
        <div className='flex flex-col min-h-screen relative bg-slate-900 text-white px-16'>
            <Header />
            <main className='flex-1'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout