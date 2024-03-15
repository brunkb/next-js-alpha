import React from "react"
import TodoFormAdv from "../components/todoFormAdv"
import TodoFormAdvanced from "../components/todoFormAdv"

const TodoPage2 = () => {
  return (
    <div className="flex-grid">
      <h2 className="text-primary text-2xl font-bold text-center">New Todo Item</h2>
      <TodoFormAdvanced />
    </div>
  )
}

export default TodoPage2
