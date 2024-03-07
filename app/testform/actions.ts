import { z } from "zod"

export async function CreateTodo(prevState: any, formData: FormData) {
  const schema = z.object({
    todo: z.string(),
  })

  const data = schema.parse({
    todo: formData.get("nexttodo"),
  })

  console.log(`adding todo item ${data.todo} to local storage`)

  return { message: `Added todo ${data.todo}` }
}
