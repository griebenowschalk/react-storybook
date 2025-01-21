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
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        value={value}
        type={type}
        id="text-input"
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};
