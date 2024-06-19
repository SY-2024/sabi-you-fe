"use client";
import {ErrorMessage, Field} from "formik";
import {EyeIcon} from "icons/forms";
import {useState} from "react";

export const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  label,
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <label className="font-medium text-text-secondary" htmlFor={name}>
        {label}
      </label>
      <div>
        <Field
          type={type}
          id={name}
          name={name}
          autoComplete="off"
          className="border border-d8 rounded h-14 px-4 py-3 focus:outline-none focus:border-inherit text-text-primary w-full bg-background"
          placeholder={placeholder}
        />
        <ErrorMessage
          name={name}
          component="p"
          className="text-sm text-primary"
        />
      </div>
    </div>
  );
};
export const InputPassword: React.FC<PasswordInput> = ({
  label,
  name,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <label className="font-medium text-text-secondary" htmlFor={name}>
        {label}
      </label>
      <div>
        <div className="flex relative">
          <Field
            type={showPassword ? "text" : "password"}
            id={name}
            name={name}
            autoComplete="off-autofill"
            className="border border-d8 rounded h-14 px-4 py-3 focus:outline-none focus:border-inherit text-text-primary w-full bg-background"
            placeholder={placeholder}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute bottom-3 right-3 p-1 z-10 text-gray/60 "
          >
            {showPassword ? <EyeIcon /> : <EyeIcon />}
          </button>
        </div>
        <ErrorMessage
          name={name}
          component="p"
          className="text-sm text-primary"
        />
      </div>
    </div>
  );
};
