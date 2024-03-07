import Link from "next/link"
import React from "react"

export default function Home() {
  return (
    <div>
      <div>
        <span className='text-2xl pl-2'>
          <i className='em em-grinning'>BDB Automation & Self-Service</i>
        </span>
      </div>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About Us</Link>
        </li>
        <li>
          <Link href='/testform'>To Do List</Link>
        </li>
      </ul>
    </div>
  )
}
