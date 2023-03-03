import React from 'react'
import ToDoItem from './ToDoItem'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from 'firebaseconfig'
import { useAuth } from '@/context/AuthContext'

const ToDoPanel = () => {
    const [todo, setTodo] = React.useState('')

    // const { currentUser } = useAuth()

    React.useEffect(() => {
        const getData = async () => {
            try {
                const docRef = doc(db, 'to-do', 'MmlDos4tUifGwtv3AxiA')
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setTodo(docSnap.data().todo)
                    console.log(docSnap.data())
                } else {
                    setTodo({})
                }
            } catch {
                alert('Something is wrong')
            }
        }
        getData()
    }, [])

    return (
        <div className='w-full max-w-7xl flex flex-col justify-center items-center'>
            <p className='uppercase text-4xl text-center mb-10 mt-28'>Text here something</p>
            <input type="text" className='outline-none p-3 text-slate-800 w-full max-w-3xl' />
            <button className='mt-2 px-5 py-1 border-2 border-white bg-gray-600 text-xl font-bold'>Add To-Do</button>
            <div className='w-full flex justify-center items-center flex-col mt-5'>
                <ToDoItem todo={todo} />
            </div>
        </div>
    )
}

export default ToDoPanel