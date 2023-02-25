import React from 'react'

const Footer = () => {
    return (
        <footer className='flex justify-center items-center py-5 border-t-2'>
            <a href="https://github.com/Scr00b1e" target={'_blank'}>
                <img src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="" className='w-10 h-10 cursor-pointer mx-1' />
            </a>
            <a href="https://twitter.com/scr00b1e" target={'_blank'}>
                <img src="https://cdn-icons-png.flaticon.com/512/3670/3670127.png" alt="" className='w-10 h-10 cursor-pointer mx-1' />
            </a>
        </footer>
    )
}

export default Footer