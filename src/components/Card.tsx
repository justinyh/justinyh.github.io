import { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
    return (
      <div className="drop-shadow-lg rounded-md bg-white dark:bg-background-dk overflow-hidden">
        {children}
      </div>
    );
  }