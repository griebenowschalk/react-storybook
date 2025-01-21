import { useState } from "react";

interface TextInputProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;
}

export const TextInput = ({
  name,
  type,
  label,
  placeholder,
}: TextInputProps) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        type={type}
        id="text-input"
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
