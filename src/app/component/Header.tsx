"use client";
import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const links = [
  { name: "register", path: "/with-auth-layout/register" },
  { name: "login", path: "/with-auth-layout/login" },
  { name: "forgotten-password", path: "/forgotten-password" },
  { name: "blog", path: "/blog" },
];

export default function Header() {
  const path = usePathname();

  return (
    <header>
      {links.map((item, num) => {
        const style = path.startsWith(item.path)
          ? "text-[blue]"
          : "text-[black]";
        return (
          <div key={num}>
            <Link href={item.path} className={style}>
              {item.name}
            </Link>
          </div>
        );
      })}
      <h1 className="text-[red] text-xl">This is the header</h1>
    </header>
  );
}
