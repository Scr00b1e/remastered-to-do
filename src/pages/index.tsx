import { Login } from '@/components/Login'
import ToDoItem from '@/components/ToDoItem'

export default function Home() {
  return (

    // <div className='w-full max-w-7xl flex justify-center'>
    //   <Login />
    // </div>

    <div className='w-full max-w-7xl flex flex-col justify-center items-center'>
      <p className='uppercase text-4xl text-center mb-10'>Text here something</p>
      <input type="text" className='outline-none p-3 text-slate-800 w-full max-w-3xl' />
      <button className='mt-2 px-5 py-1 border-2 border-white bg-gray-600 text-xl font-bold'>Add To-Do</button>
      <div className='w-full flex justify-center items-center flex-col mt-5'>
        <ToDoItem />
      </div>
    </div>
  )
}
