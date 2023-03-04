import React from 'react'

// type ToDoProps = {
//     tasks: string
//     status: boolean
// }
type ToDoProps = {
    todo: any
}

const ToDoItem: React.FC<ToDoProps> = ({ todo }) => {
    return (
        <div className='w-full h-auto min-h-lg m-5 p-5 border-cyan-50 border-2 bg-slate-800 rounded-3xl'>
            {/* <p className='text-3xl'>sup bros how ya doin sup bros how ya doin sup bros how ya doin sup bros how ya doin sup bros how ya doin sup bros how ya doin sup bros how ya doin sup bros how ya doin sup bros how ya doin sup bros how ya doin sup bros how ya doin sup bros how ya doin</p> */}
            {todo.tasks}
        </div>
    )
}

export default ToDoItem