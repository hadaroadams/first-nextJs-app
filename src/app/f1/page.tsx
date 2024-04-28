import Link from "next/link";
import React from "react";

export default function F1() {
  return (
    <div>
      <h1 className="text-5xl">F1 page</h1>
      <Link href={"/f1/f2"} className="text-[blue]">
        f2
      </Link>
    </div>
  );
}
