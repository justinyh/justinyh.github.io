import { PropsWithChildren } from "react";

export default function ButtonGroup({ children }: PropsWithChildren) {
    return (
      <div className="flex gap-4">
        {children}
      </div>
    );
  }