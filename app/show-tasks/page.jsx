'use client'
import UserContext from '@/Context/userContext';
import React, { useContext, useEffect, useState } from 'react'


const ShowTasks = () => {
    const [tasks, setTasks] = useState([]);
    const context = useContext(UserContext);
    const LoadTasks = async (userId) => {
        const data = await fetch(`http://localhost:3000/api/users/${userId}/tasks`);
        const result = await data.json();
        console.log(result)
        setTasks([...result].reverse());

    }
    useEffect(() => {
        if (context?.user?._id) {
            LoadTasks(context.user._id);
        }
    }, [context.user])



    //Delete Task
    const HandleDelete = async (id) => {
        const data = await fetch(`http://localhost:3000/api/tasks/${id}`, {
            method: "DELETE"
        });
        const result = await data.json();

        const newTasks = tasks.filter(task => task._id !== id);
        setTasks(newTasks)
        console.log(result)
        if (result.success) {
            alert('Task Deleted')
        }

    }

    return (
        <div>
            <h1>Your Tasks:{tasks.length}</h1>
            {


                <ul className="space-y-3">
                    {tasks.map((task) => (
                        <li key={task._id} className="flex flex-col border rounded p-3 shadow-sm">
                            <h4 className="font-semibold text-lg">{task.title}</h4>
                            <p className="text-gray-700">{task.content}</p>
                            <p className="text-sm text-gray-500">Status: {task.status}</p>

                            <button onClick={() => HandleDelete(task._id)} className='flex justify-end'>X</button>


                        </li>

                    ))}
                </ul>


            }


        </div>
    )
}

export default ShowTasks
