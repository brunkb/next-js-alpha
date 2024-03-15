import React from "react"
import { CheckIcon } from '@heroicons/react/24/solid'


export async function getTodoList() {
  try {
    let res = await fetch("http://localhost:3002/todos")
    const data = await res.json()
    console.log(data)
    return {
      status: "ok",
      alltodos: data,
    }
  } catch (error) {
    console.log("error happened")
    return {
      status: "error",
      alltodos: null,
    }
  }
}

const MyTodos = async () => {
  const data = await getTodoList()
  return (
    <>
      <div className="">
        <h2 className="text-2xl">My Todo List</h2>

        {data.status === "error" && <div className="flex">An error occurred, try again later</div>}

        {data.status === "ok" && (
          <>
            <table className="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
              <thead className="border-b border-neutral-200 bg-neutral-50 font-medium dark:border-white/10 dark:text-neutral-800">
                <tr className="p-4">
                  <th className="text-left p-2">Todo Item</th>
                  <th className="text-left">Description</th>
                  <th className="text-left">Status</th>
                </tr>
              </thead>
              <tbody>
              {data.alltodos.map((item: any) => (
                <tr className="p-4">
                  <td className="text-left p-2">{item.todo}</td>
                  <td className="text-left">{item.desc}</td>
                  <td className="text-left">{item.status === "done" && <CheckIcon className="h6 w-6"/>}</td> 
                </tr>
              ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  )
}
export default MyTodos
