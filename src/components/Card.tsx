import { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
    return (
      <div className="drop-shadow-lg rounded-md bg-white overflow-hidden">
        {children}
      </div>
    );
  }