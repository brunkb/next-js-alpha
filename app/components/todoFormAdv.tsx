"use client"

import React, { FormEvent, useState } from "react"
import SubmitButton from "../components/submitButton"
import { TodoItemType, handleAdvSubmit } from "../todoForm/actions"
import { useFormState } from "react-dom"

const initialState: Array<TodoItemType> = []

const TodoFormAdvanced = () => {
  const [data, formAction] = useFormState(handleAdvSubmit, initialState)

  return (
    <div>
      <form className="border" action={formAction}>
        <div className="mt-2">
          <label className="text-xl font-bold pl-4" htmlFor="todo">
            Enter Task:
          </label>
          <span className="pl-20">
            <input type="text" id="todo" name="nexttodo" required />
          </span>
        </div>
        <div className="mt-4">
          <label className="text-xl font-bold pl-4 align-top" htmlFor="todo">
            Enter Description:
          </label>
          <span className="pl-3">
            <textarea name="desc"></textarea>
          </span>
        </div>

        <div className="mt-4 flex">
          <label className="text-xl font-bold pl-4" htmlFor="todo">
            Status:
          </label>

          <div className="ml-[6rem]">
            <div className="radio ml-5">
              <label>
                <input className="mr-2" type="radio" name="rg1" value="not-done" />
                Not Done
              </label>
            </div>
            <div className="radio ml-5">
              <label>
                <input className="mr-2" type="radio" name="rg1" value="done" />
                Done
              </label>
            </div>
            <div className="radio ml-5">
              <label>
                <input className="mr-2" type="radio" name="rg1" value="blocked" />
                Blocked
              </label>
            </div>
          </div>
        </div>
        <div className="mt-4 text-right">
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}

export default TodoFormAdvanced
