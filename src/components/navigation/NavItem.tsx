import { MouseEvent } from "react";
import { useRouter } from "../../../node_modules/next/navigation";

interface NavItemProps {
  href: string,
  onClick: (event?: MouseEvent) => void,
  title: string,
}

export default function NavItem({ title, href="#", onClick }: NavItemProps) {

  const router = useRouter();

  function handleClick(event: MouseEvent) {
    router.push(href);
    onClick(event);
  }
    return (
      <div>
        <button onClick={handleClick}>{title}</button>
      </div>
    );
  }