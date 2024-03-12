"use client"

import React, { FormEvent, useState } from "react"
import SubmitButton from "../components/submitButton"

const TodoForm = () => {
  const [todoItem, setTodoItem] = useState<String>("")
  const [todoItems, setTodoItems] = useState<Array<String>>([])
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTodoItems((todoItems) => [...todoItems, todoItem])

    console.log(`called the handleSubmit: ${todoItem}`)
  }

  return (
    <div className="grid">
      <div className="flow">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-xl font-bold px-4" htmlFor="todo">
              Enter Task:
            </label>
            <input type="text" id="todo" name="nexttodo" onChange={(e) => setTodoItem(e.target.value)} required />
          </div>
          <div>
            <SubmitButton />
          </div>
        </form>
      </div>
      <div>
        <ul>
          {todoItems.map((todoItem, index) => (
            <li key={index}>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoForm
