import Card from "@/component/Card";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Card>
        <div>Archived Notification</div>
        <Link href="/complex-dashboard" className="text-[blue]">
          Default
        </Link>
      </Card>
    </>
  );
}
