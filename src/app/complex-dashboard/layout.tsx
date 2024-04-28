import { ReactNode } from "react";

export default function layout({
  children,
  users,
  revenue,
  notification,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
}) {
  //   const isLoggedIn = false

  return (
    <>
      <div>{children}</div>
      <div className="flex h-[70vh] w-[70%] gap-3 p-10">
        <div className=" flex flex-col flex-[5] gap-3 justify-between">
          <div className=" flex justify-center items-center h-full shadow-xl">
            {users}
          </div>
          <div className=" flex justify-center h-full items-center shadow-xl">
            {revenue}
          </div>
        </div>
        <div className=" flex flex-col flex-[5] shadow-xl justify-center items-center">
          <div>{notification}</div>
          <div>{login}</div>
        </div>
        <div className=" flex flex-col flex-[5] shadow-xl justify-center items-center">
          {/* <div>{notification}</div> */}
          <div>{login}</div>
        </div>
      </div>
    </>
  );
}
