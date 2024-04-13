"use client";
import React from "react";
interface onChangeCallback {
  (value: string): void;
}

type MultiLineFieldProps = {
  id: string;
  value: string;
  placeholder: string;
  onChanged?: onChangeCallback;
};

const DefaultMultiLineFormField = (props: MultiLineFieldProps) => {
  const ref = React.useRef<HTMLTextAreaElement>(null);
  return (
    <textarea
      className="focus:border-none active:border-none focus:outline-none active:outline-none w-full btn-blur rounded-lg resize-none px-4 py-6 regular-12"
      ref={ref} value={props.value}
      placeholder={props.placeholder}
      id={props.id}
      onChange={() => {
        props.onChanged!(ref.current?.value.trim()!);
      }}
    ></textarea>
  );
};

export default DefaultMultiLineFormField;
