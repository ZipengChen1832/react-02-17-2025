import React from "react";

interface InputProps {
  label: string;
  required?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  required = false,
  value,
  onChange,
}: InputProps) {
  return (
    <div>
      <label>
        {label}
        <input value={value} onChange={onChange} required={required} />
      </label>
    </div>
  );
}
