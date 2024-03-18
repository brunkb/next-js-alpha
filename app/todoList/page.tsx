import React from "react"
import { CheckIcon, ArrowRightCircleIcon, NoSymbolIcon } from "@heroicons/react/24/solid"

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
      <div className="w-full">
        <h2 className="text-primary text-2xl font-bold text-center">My Todo List</h2>

        {data.status === "error" && <div className="flex">An error occurred, try again later</div>}

        {data.status === "ok" && (
          <>
            <table className="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
              <thead className="border-b border-neutral-200 bg-neutral-50 font-medium dark:border-white/10 dark:text-neutral-800">
                <tr className="p-4">
                  <th className="whitespace-nowrap text-left w-3/12 p-2">Todo Item</th>
                  <th className="whitespace-nowrap text-left w-6/12">Description</th>
                  <th className="whitespace-nowrap text-left w-1/12">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.alltodos.map((item: any) => (
                  <tr className="p-4">
                    <td className="whitespace-nowrap text-left p-2">{item.todo}</td>
                    <td className="whitespace-nowrap text-left">{item.desc}</td>
                    <td className="whitespace-nowrap text-left">
                      {item.status === "not-done" && <ArrowRightCircleIcon className="h6 w-6" />}
                      {item.status === "done" && <CheckIcon className="h6 w-6" />}
                      {item.status === "blocked" && <NoSymbolIcon className="h6 w-6" />}
                    </td>
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
