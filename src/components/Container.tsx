import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
    return (
      <div className="container mx-auto px-8 lg:px-40">
        {children}
      </div>
    );
  }