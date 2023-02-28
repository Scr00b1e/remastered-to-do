import { useAuth } from '@/context/AuthContext'
import React from 'react'

export const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [logginIn, setLogginIn] = React.useState(true)

    const { login, signup, currentUser } = useAuth()
    console.log(currentUser);

    const onSubmit = async () => {
        if (!email || !password) {
            setError('Please enter email or password')
            return
        }
        if (logginIn) {
            try {
                await (login(email, password))
            } catch (err) {
                setError('Incorrect email or password')
            }
            return
        }
        await signup(email, password)
    }

    return (
        <div className='flex-1 flex flex-col justify-center items-center bg-slate-800 gap-2 w-full max-w-lg px-2 py-10 rounded-3xl'>
            <h2 className='text-2xl font-bold'>LOGIN</h2>
            {error && <div className='text-rose-400'>{error}</div>}
            <input type="text" className='outline-none text-slate-900 p-3 w-full max-w-xs' placeholder='Email Address...'
                value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className='outline-none text-slate-900 p-3 w-full max-w-xs' placeholder='Password...'
                value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='w-full max-w-xs border py-5 font-bold text-lg uppercase tracking-wider hover:bg-slate-700
            duration-300' onClick={onSubmit}>Sumbit</button>
        </div>
    )
}
