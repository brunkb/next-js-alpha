"use server"

export type StateType = {
  todoItem: string
}

export async function handleAdvSubmit(prevState: any, formData: FormData) {
  const todo = formData.get("nexttodo")

  console.log(`processing todo item ${todo}`)

  return { todoItem: todo?.toString() }
}
