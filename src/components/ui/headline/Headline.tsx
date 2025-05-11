"use client";

import { HTMLAttributes } from "react";
import LinkIcon from "../link-icon/LinkIcon";
import Link from "next/link";

interface HeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "s" | "m" | "l" | "one" | "two" | "three" | "four" | "five";
  isLink?: boolean;
  href?: string; 
  showLinkIcon?: boolean;
}

const Headline = ({
  as: Tag = "h2",
  size = "m",
  className = "",
  isLink = false,
  href = "#",
  showLinkIcon = false,
  children,
  ...props
}: HeadlineProps) => {
  
  const sizeClasses: Record<string, string> = {
    s: "text-sm",
    m: "text-base",
    l: "text-lg",
    one: "text-xl",
    two: "text-2xl",
    three: "text-3xl",
    four: "text-4xl",
    five: "text-5xl",
  };

  const textSizeClass = sizeClasses[size] || sizeClasses["m"];

  return (
    <Tag className={`${textSizeClass} font-bold ${className}`} {...props}>
      {isLink && href ? (
        <Link className="group group/link duration-150 hover:text-teal-300 fill-neutral-100 hover:fill-teal-300" href={href} target="_blank">
          {children}
          {showLinkIcon && <LinkIcon/>}
        </Link>
      ) : (
        children
      )}
    </Tag>
  );
};

export default Headline;
