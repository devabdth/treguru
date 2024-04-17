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
  iconWidth?: number;
  iconHeight?: number;
};
const MainButton = ({
  type,
  title,
  icon,
  variant,
  onClick,
  customClassesStyle,
  cursor,
  iconWidth, iconHeight
}: ButtonProps) => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      type={type}
      className={`${
        cursor ?? "cursor-pointer"
      } flexCenter ${!(variant === "icon-only") && "px-2 py-1 gap-2"} rounded-xl ${(variant === "shadow") && "bg-transparent"} ${variant} ${customClassesStyle ?? ""}`}
    >
      {icon && <Image src={icon} alt={title} width={iconWidth ?? 24} height={iconHeight??24}></Image>}
      <label
        className={`${cursor ?? "cursor-pointer"} whitespace-nowrap ${(variant !== "shadow") ? "bold-16": "text-white underline regular-12"}`}
      >
        {title}
      </label>
    </button>
  );
};

export default MainButton;
