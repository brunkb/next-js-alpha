import React from "react"
import TodoForm from "../components/todoForm"

const MainPage = () => {
  return (
    <div>
      <h2 className="text-primary text-2xl text-center">New Todo Item</h2>
      <TodoForm />
    </div>
  )
}

export default MainPage
