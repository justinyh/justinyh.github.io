import { MouseEvent } from "react";
import { useRouter } from "../../../node_modules/next/navigation";
import Link from "next/link";

interface NavItemProps {
  href: string,
  onClick: (event?: MouseEvent) => void,
  title: string,
}

export default function NavItem({ title, href="#", onClick }: NavItemProps) {

    return (
      <div>
        <Link href={href} onClick={onClick}>{title}</Link>
      </div>
    );
  }