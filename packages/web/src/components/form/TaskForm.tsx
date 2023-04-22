import React, { FC, useState } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const TaskForm: FC = () => {
    const [taskName, setTaskName] = useState('')
    const [priority, setPriority] = useState('low')
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    return (
        <form onSubmit={(e) => console.log('hoge')} className="mx-auto mt-10">
            <div className="mb-6 md:flex">
                <div className="items-center w-full md:w-3/6">
                    <label
                        htmlFor="taskName"
                        className="block mb-2 text-gray-700 font-bold mr-2"
                    >
                        タスク名
                    </label>
                    <input
                        type="text"
                        id="taskName"
                        name="taskName"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        className="w-full shadow appearance-none border border-gray-400 hover:border-gray-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex-grow h-10"
                        placeholder="タスクを入力してください"
                        required
                    />
                </div>

                <div className="items-center w-full mt-2 md:w-1/6 md:ml-2 md:mt-0">
                    <label
                        htmlFor="priority"
                        className="block mb-2 text-gray-700 font-bold mr-2"
                    >
                        優先度
                    </label>
                    <select
                        id="priority"
                        name="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline flex-grow h-10"
                        required
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M14.292 5.292a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-8.172 8.172a1 1 0 01-1.414 0L.292 10.878a1 1 0 010-1.414l4-4a1 1 0 011.414 0l2.586 2.586L14.292 5.292z" />
                        </svg>
                    </div>
                </div>

                <div className="items-center w-full mt-2 md:w-2/6 md:ml-2 md:mt-0">
                    <label
                        htmlFor="dueDate"
                        className="block mb-2 text-gray-700 font-bold mr-2"
                    >
                        締切日
                    </label>

                    <div className="flex">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => {
                                if (date instanceof Date) {
                                    setSelectedDate(date)
                                }
                            }}
                            dateFormat="yyyy/MM/dd"
                            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-400 hover:border-gray-500 h-10"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
                        >
                            追加
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
