import React from 'react'

const Header = () => {
    return (
        <header className='fixed top-0 w-full left-0 bg-black p-5 flex justify-between items-center'>
            <h1 className='text-white text-3xl font-bold'>To-Do</h1>
            <div className='flex justify-between items-center cursor-pointer'>
                <p className='font-bold text-2xl mr-3'>Login</p>
                <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" className='w-12 h-12' />
            </div>
        </header>
    )
}

export default Header