import { cn } from "@/lib/utils";
import React from "react";


type H1ChildrenProps = {
  children: React.ReactNode;
  className?: string;
};

export default function H1({ children, className }: H1ChildrenProps) {
  return (
    <h1
      className={cn(
        "text-3xl lg:text-6xl font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}
