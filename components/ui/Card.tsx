import React from "react";

interface Prosp {
  children: React.ReactNode;
}

const Card = ({ children }: Prosp) => {
  return (
    <div className="rounded-lg border border-gray-500 m-5 overflow-hidden w-fit shadow-xl">
      {children}
    </div>
  );
};

export default Card;
