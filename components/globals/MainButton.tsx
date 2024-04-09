import React, { MouseEventHandler } from "react";
import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  cursor?: string;
  variant: string;
  onClick: VoidFunction;
  customClassesStyle?: string;
};
const MainButton = ({
  type,
  title,
  icon,
  variant,
  onClick,
  customClassesStyle,
  cursor,
}: ButtonProps) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      type={type}
      className={`${
        cursor ?? "cursor-pointer"
      } flexCenter px-2 py-1 gap-2 rounded-xl ${variant} ${customClassesStyle ?? ""}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={25}></Image>}
      <label
        className={`${cursor ?? "cursor-pointer"} bold-16 whitespace-nowrap`}
      >
        {title}
      </label>
    </button>
  );
};

export default MainButton;
