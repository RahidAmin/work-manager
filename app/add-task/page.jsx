'use client'
import { addTask } from '@/services/taskService'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


// export const metadata = {
//     title: "Add Task"
// }


const AddTask = () => {



    const [task, setTask] = useState({
        title: "",
        content: "",
        status: "",
        userId: ""
    })

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            await addTask(task);
            setTask({
                title: "",
                content: "",
                status: "",
                userId: "",

            })
        } catch (error) {
            console.error(error)
        }

    }

    return (
        <div>
            <div className="max-w-2xl mx-auto mt-10 bg-white rounded-3xl shadow-lg overflow-hidden">
                {/* Top Image */}
                <Image

                    src="/Images/baner-task.jpg"
                    height={400}
                    width={400}
                    alt="Todo Banner"
                    className="w-full lg:h-[300px] object-cover"
                />

                {/* Form Body */}
                <div className="p-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                        Create a New Todo
                    </h2>

                    <form onSubmit={handleAddTask} className="space-y-6">
                        {/* Title */}
                        <div>
                            <label className="block text-gray-600 font-medium mb-2">Title</label>
                            <input
                                type="text"

                                placeholder="Enter title"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none"
                                name="task_title"
                                onChange={(e) => setTask({
                                    ...task,
                                    title: e.target.value,
                                })}
                                value={task.title}
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <label className="block text-gray-600 font-medium mb-2">Content</label>
                            <textarea
                                rows="4"
                                placeholder="Enter content"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none"

                                name="task_content"
                                onChange={(e) => setTask({
                                    ...task,
                                    content: e.target.value,
                                })}
                                value={task.content}
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-gray-600 font-medium mb-2">Status</label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none"
                                name="task_status"
                                onChange={(e) => setTask({
                                    ...task,
                                    status: e.target.value,
                                })}
                                value={task.status}

                            >
                                <option value="pending">Pending</option>

                                <option value="completed">Completed</option>
                            </select>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
                            >
                                Add Todo
                            </button>
                            <button
                                type="reset"
                                className="w-full sm:w-auto bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
                            >
                                Clear Data
                            </button>
                        </div>
                        {
                            JSON.stringify(task)
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTask;
