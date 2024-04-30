import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Additional props specific to your Button component
  variant?: "primary" | "outline"; // Example: Button variants
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  ...props
}) => {
  // Determine the Tailwind CSS classes based on the variant prop
  const variants = {
    primary:
      "bg-gradient-to-r from-[#1C6BF5] to-[#1E45B4] border-[#1853C6] hover:from-[#1853C6] hover:to-[#1C6BF5]",
    outline:
      "text-white bg-transparent border border-white-300 focus:outline-none hover:bg-white-100 focus:ring-4 focus:ring-white-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white-800 dark:text-white dark:border-white-600 dark:hover:bg-white-700 dark:hover:border-white-600 dark:focus:ring-white-700",
  };
  const variantClasses = variants[variant];
  const widthClass = fullWidth ? "block w-full" : "";
  return (
    <button
      className={`px-4 py-2 text-white font-semibold rounded-lg ${variantClasses} ${widthClass} focus:outline-none`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
