import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Layout = (props: { children: any }) => {
    const { children } = props
    return (
        <div className='flex flex-col min-h-screen relativ bg-gray-800 text-white px-16'>
            <Header />
            <main className='flex-1 flex flex-col justify-center items-center'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout