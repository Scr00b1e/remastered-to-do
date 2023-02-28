import { Login } from '@/components/Login'
import ToDoItem from '@/components/ToDoItem'
import ToDoPanel from '@/components/ToDoPanel'
import { useAuth } from '@/context/AuthContext'

export default function Home() {
  const { currentUser } = useAuth()

  return (

    <div className='w-full max-w-7xl flex justify-center'>
      {currentUser ? <ToDoPanel /> : <Login />}
    </div>
  )
}
