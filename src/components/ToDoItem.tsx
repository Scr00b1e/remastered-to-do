import React from 'react'

type ToDoItems = {
    tasks: string
    status: boolean
    id: string
}
interface ToDoProps {
    todo: ToDoItems[]
    onDelete: any
}

const ToDoItem: React.FC<ToDoProps> = ({ todo, onDelete }) => {
    return (
        <div className='w-full h-auto min-h-lg m-5 p-5 border-cyan-50 border-2 bg-slate-800 rounded-3xl text-2xl
        flex justify-between items-center'>
            {todo.tasks}
            <img src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" alt="" className='w-12 h-12 cursor-pointer p-2 bg-slate-300 rounded-xl hover:bg-slate-50' title='Delete?' onClick={() => onDelete(todo.id)} />
        </div>
    )
}

export default ToDoItem