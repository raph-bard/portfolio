import Link from "next/link";
import React from "react";

const variantStyles = {
  blue: "bg-teal-600 hover:bg-teal-500 text-white",
  red: "bg-red-500 hover:bg-red-400 text-white",
  green: "bg-green-500 hover:bg-green-400 text-white",
  yellow: "bg-yellow-500 hover:bg-yellow-400 text-white",
};

type Variant = keyof typeof variantStyles;

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  href?: string;
  variant?: Variant;
};

export default function Button({
  children,
  type = "button",
  isLoading = false,
  disabled = false,
  className = "",
  href,
  variant = "blue",
}: ButtonProps) {
  const isDisabled = disabled || isLoading;
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded-md transition-all disabled:bg-gray-400 text-white";
  const variantClass = !isDisabled ? variantStyles[variant] : "";
  const cursorClass = isDisabled ? "cursor-not-allowed" : "cursor-pointer";
  const allClasses = `${baseClasses} ${variantClass} ${cursorClass} ${className}`;

  const content = isLoading ? (
    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
  ) : (
    children
  );

  if (href) {
    return (
      <Link href={href} passHref>
        <span className={allClasses}>{content}</span>
      </Link>
    );
  }

  return (
    <button type={type} disabled={isDisabled} className={allClasses}>
      {content}
    </button>
  );
}
