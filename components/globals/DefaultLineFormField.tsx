"use client";

import React from "react";

interface onChangeCallback {
  (value: string): void;
}
type LineFieldProps = {
  id: string;
  placeholder: string;
  type: "name" | "email" | "phone";
  onChanged?: onChangeCallback;
};

const DefaultLineFormField = (props: LineFieldProps) => {
  const ref = React.useRef<HTMLInputElement>(null);
  return (
    <input
      ref={ref}
      className="w-full h-4 rounded-lg px-4 py-6 btn-blur regular-12 focus:border-none active:border-none focus:outline-none active:outline-none"
      placeholder={props.placeholder}
      id={props.id}
      type={props.type}
      onChange={() => {
        props.onChanged!(ref.current?.value.trim()!);
      }}
    ></input>
  );
};

export default DefaultLineFormField;
