import { Login } from '@/components/Login'

export default function Home() {
  return (
    // <div className='w-full max-w-7xl flex justify-center'>
    //   <Login />
    // </div>
    <div className='w-full max-w-7xl flex flex-col justify-center items-center'>
      <p className='uppercase text-4xl text-center mb-10'>Text here something</p>
      <input type="text" className='outline-none p-3 text-slate-800' />
    </div>
  )
}
