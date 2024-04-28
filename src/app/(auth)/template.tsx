"use client"
import Header from "@/component/Header";
import { useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  return (
    <>
      <div>
        <Header/>
        <input
          type="text"
          placeholder="enter name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <h1>The the auth layout</h1>
        {children}
      </div>
    </>
  );
}
