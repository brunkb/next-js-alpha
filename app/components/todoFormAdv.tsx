"use client"

import React, { FormEvent, useState } from "react"
import SubmitButton from "../components/submitButton"
import { handleAdvSubmit, StateType } from "../todoForm/actions"
import { useFormState } from "react-dom"

const initialState: StateType = { todoItem: '' }

const TodoFormAdvanced = () => {
  
  const [data, formAction] = useFormState(handleAdvSubmit, initialState)

  return (
    <div className="grid">
      <div className="flow">
        <form>
          <div>
            <label className="text-xl font-bold px-4" htmlFor="todo">
              Enter Task:
            </label>
            <input type="text" id="todo" name="nexttodo" required />
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" formAction={formAction} type="submit">
              Add Task
            </button>
          </div>
        </form>
      </div>
      <div>
        <p>{data.todoItem}</p>
        <p>{data.todoItem ? <span>Yes</span> : <span> No</span>}</p>
      </div>
    </div>
  )
}

export default TodoFormAdvanced
