import React from 'react'
import ToDoItem from './ToDoItem'
import { useAuth } from '@/context/AuthContext'
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, QuerySnapshot } from 'firebase/firestore'
import { db } from 'firebaseconfig'

const ToDoPanel = () => {
    const [todo, setTodo] = React.useState([])
    const [input, setInput] = React.useState('')
    const [loading, setLoading] = React.useState(true)

    console.log(loading)
    // const { currentUser } = useAuth()

    //fetch Data
    React.useEffect(() => {
        try {
            const q = query(collection(db, 'to-do'))
            const unsubsribe = onSnapshot(q, (querySnapshot) => {
                let toDosArr = []
                querySnapshot.forEach((doc) => {
                    toDosArr.push({ ...doc.data(), id: doc.id })
                })
                setTodo(toDosArr)
                setLoading(false)
            })
            return () => unsubsribe()
        } catch {
            alert('Something is wrong...')
        }
    }, [])

    //add data
    const onAdd = async (e: any) => {
        if (input === '') {
            alert('You havent wrote anything')
            return
        }
        await addDoc(collection(db, 'to-do'), {
            tasks: input,
            status: false
        })
        setInput('')
    }

    //delete data
    const onDelete = async (id: string) => {
        await deleteDoc(doc(db, 'to-do', 'MmlDos4tUifGwtv3AxiA'))
    }

    return (
        <div className='w-full max-w-7xl flex flex-col justify-center items-center'>
            <p className='uppercase text-4xl text-center mb-10 mt-28'>Text here something</p>
            <input type="text" className='outline-none p-3 text-slate-800 w-full max-w-3xl'
                value={input} onChange={(e) => setInput(e.target.value)} />
            <button className='mt-2 px-5 py-1 border-2 border-white bg-gray-600 text-xl font-bold'
                onClick={onAdd}>Add To-Do</button>
            <div className='w-full flex justify-center items-center flex-col mt-5'>
                {
                    loading
                        ? <div className='w-full'>
                            <p className='text-3xl text-center'>Loading...</p>
                        </div>

                        : todo.map((todo, i) => (
                            <ToDoItem todo={todo} key={i} onDelete={onDelete} />
                        ))
                }
            </div>
        </div>
    )
}

export default ToDoPanel