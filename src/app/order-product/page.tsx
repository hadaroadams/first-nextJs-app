'use client'
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.push("/")
    // router.back()
    // router.forward()

  };
  return (
    <>
      <h1>Order product</h1>
      <button onClick={handleClick} className="bg-[blue] text-white p-4 m-5">Place order</button>
    </>
  );
}
