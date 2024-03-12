"use client"

import React, { FormEvent, useState } from "react"
import SubmitButton from "../components/submitButton"
import { TodoItemType, handleAdvSubmit } from "../todoForm/actions"
import { useFormState } from "react-dom"

const initialState: Array<TodoItemType> = []

const TodoFormAdvanced = () => {
  const [data, formAction] = useFormState(handleAdvSubmit, initialState)

  return (
    <div className="grid">
      <div className="flow">
        <form>
          <div className="mt-2">
            <label className="text-xl font-bold pl-4" htmlFor="todo">
              Enter Task:
            </label>
            <span className="pl-20">
              <input type="text" id="todo" name="nexttodo" required />
            </span>
          </div>
          <div className="mt-4">
            <label className="text-xl font-bold pl-4" htmlFor="todo">
              Enter Description:
            </label>
            <span className="pl-3">
              <textarea name="desc"></textarea>
            </span>
          </div>
          <div className="mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              formAction={formAction}
              type="submit"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
      <div className="mt-4">
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.todo}
              {": "}
              {item.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoFormAdvanced
