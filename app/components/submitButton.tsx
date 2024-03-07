import React, { useState } from "react"
import { useFormStatus } from "react-dom"

const SubmitButton = () => {
  const [isLoading] = useState(false)

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      type="submit"
      disabled={isLoading}
    >
      {!isLoading && <span>Add Task</span>}
      {isLoading && <span>Adding...</span>}
    </button>
  )
}

export default SubmitButton
