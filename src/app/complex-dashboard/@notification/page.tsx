import Card from "@/component/Card";
import Link from "next/link";
import React from "react";

export default function Notification() {
  return (
    <>
      <Card>
        <div>Default Notification</div>
        <Link href="/complex-dashboard/archived" className="text-[blue]">
          Archived
        </Link>
      </Card>
    </>
  );
}
