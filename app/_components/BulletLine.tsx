import React from "react";

interface Props {
  className: String;
}

export const BulletLine = ({ className }: { className: String }) => {
  return (
    <div className={`${className}`}>
      <div className="relative right-[5px] h-3 w-3 bg-green rounded-full"></div>
      <div className="relative right-[5px] h-3 w-3 bg-green rounded-full"></div>
      <div className="relative right-[5px] h-3 w-3 bg-green rounded-full"></div>
    </div>
  );
};
