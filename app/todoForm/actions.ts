"use server"

export type TodoItemType = {
  todo: string
  description: string
  status: string
}

export async function handleAdvSubmit(prevState: Array<TodoItemType>, formData: FormData) {
  const todoFormData = formData.get("nexttodo")
  const descriptionFormData = formData.get("desc")
  const statusFormData = formData.get("rg1")

  if (prevState === null) {
    prevState = []
  }

  let todo: string = ""
  if (todoFormData !== undefined && todoFormData !== null) {
    todo = todoFormData.toString()
  }

  let details: string = ""
  if (descriptionFormData !== undefined && descriptionFormData !== null) {
    details = descriptionFormData.toString()
  }

  let stat: string = "not-done"
  if (statusFormData !== undefined && statusFormData !== null) {
    stat = statusFormData.toString()
  }


  const todoItem: TodoItemType = {
    todo: todo,
    description: details,
    status: stat,
  }

  prevState.push(todoItem)

  console.log(`processing todo item ${todo}`)

  return prevState
}
