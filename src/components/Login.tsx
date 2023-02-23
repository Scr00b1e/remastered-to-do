import React from 'react'

export const Login = () => {
    return (
        <div className='flex-1 flex flex-col justify-center items-center bg-slate-800 gap-2 w-full max-w-lg px-2 py-10 rounded-3xl'>
            <h2 className='text-2xl font-bold'>LOGIN</h2>
            <input type="text" className='outline-none text-slate-900 p-3 w-full max-w-xs' placeholder='Email Address...' />
            <input type="text" className='outline-none text-slate-900 p-3 w-full max-w-xs' placeholder='Password...' />
            <button className='w-full max-w-xs border py-5 font-bold text-lg uppercase tracking-wider hover:bg-slate-700
            duration-300'>Sumbit</button>
        </div>
    )
}
