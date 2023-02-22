import Header from '@/components/Header'
import React from 'react'

const Layout = (props: { children: any }) => {
    const { children } = props
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout