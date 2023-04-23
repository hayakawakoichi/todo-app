import 'react-datepicker/dist/react-datepicker.css'
import React, { FC } from 'react'

import { useMutation } from '@apollo/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { graphql } from '../../gql'
import { Button } from '../button'
import { DatePicker } from '../datePicker'

const taskSchema = z.object({
    name: z
        .string()
        .min(1, { message: '1文字以上入力してください。' })
        .max(100, { message: '100文字以内で入力してください。' }),
    priority: z.enum(['low', 'medium', 'high']),
    dueDate: z
        .date()
        .optional()
        .transform((value) => {
            if (value instanceof Date) {
                return value
            }
        }),
})

const insertTaskMutationDocument = graphql(`
    mutation InsertTask(
        $deadline: timestamptz = ""
        $name: String = ""
        $priority: String = ""
    ) {
        insert_task(
            objects: {
                created_at: "now()"
                deadline: $deadline
                name: $name
                priority: $priority
                updated_at: "now()"
            }
        ) {
            affected_rows
        }
    }
`)

type TaskInput = z.infer<typeof taskSchema>

export const TaskForm: FC = () => {
    const [insertTaskMutation, { loading }] = useMutation(
        insertTaskMutationDocument
    )

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TaskInput>({
        mode: 'onBlur',
        resolver: zodResolver(taskSchema),
        defaultValues: {
            name: '',
            priority: 'low',
            dueDate: new Date(),
        },
    })

    const onSubmit = (input: TaskInput) => {
        insertTaskMutation({
            variables: {
                name: input.name,
                priority: input.priority,
                deadline: input.dueDate,
            },
            onCompleted: () => {
                console.log('completed')
            },
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-10">
            <div className="mb-6 md:flex">
                <div className="items-center w-full md:w-3/6">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-gray-700 font-bold mr-2"
                    >
                        タスク名
                    </label>
                    <input
                        {...register('name')}
                        type="text"
                        id="name"
                        name="name"
                        className="w-full shadow appearance-none border border-gray-400 hover:border-gray-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:ring-2 flex-grow h-10"
                        placeholder="タスクを入力してください"
                        required
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs italic font-semibold">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div className="items-center w-full mt-2 md:w-1/6 md:ml-2 md:mt-0">
                    <label
                        htmlFor="priority"
                        className="block mb-2 text-gray-700 font-bold mr-2"
                    >
                        優先度
                    </label>
                    <select
                        {...register('priority')}
                        id="priority"
                        name="priority"
                        className="w-full block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:ring-2 flex-grow h-10"
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
                        {/* @ts-ignore　ts(2589) のエラー回避 */}
                        <Controller
                            name="dueDate"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <DatePicker
                                    minDate={new Date()}
                                    onChange={onChange}
                                    selected={value as Date}
                                />
                            )}
                        />
                        <Button label="追加" loading={loading} />
                    </div>
                </div>
            </div>
        </form>
    )
}
