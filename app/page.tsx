import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <div>
        <span className="text-2xl pl-2">
          <i className="em em-grinning">CDN Automation & Self-Service</i>
        </span>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/stuff">My Stuff</Link>
        </li>
      </ul>
    </div>
  );
}
