import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="p-10">{children}</div>
    </>
  );
};

export default Card;
