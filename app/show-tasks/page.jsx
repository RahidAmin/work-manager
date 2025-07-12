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
    return (
        <div>
            <h1>Your Tasks:{tasks.length}</h1>
            {
                tasks.map(task => {
                    return <div key={task._id} className='border py-2 flex flex-col justify-center'>

                        <div className=''>
                            <h1>Title:{task.title}</h1>
                            <p>Content:{task.content}</p>
                            <p>Status:{task.status}</p>
                            <p>Auther:{context.user.name}</p>
                        </div>
                    </div>
                }
                )
            }

        </div>
    )
}

export default ShowTasks
