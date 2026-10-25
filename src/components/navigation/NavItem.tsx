import { MouseEvent } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";

interface NavItemProps {
  href: string,
  onClick: (event?: MouseEvent) => void,
  title: string,
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export default function NavItem({ title, href="#", onClick }: NavItemProps) {
    const pathname = usePathname();
    const isActive = isActivePath(pathname, href);

    return (
      <div className="relative">
        <Link
          href={href}
          onClick={onClick}
          aria-current={isActive ? "page" : undefined}
          className={`transition-colors ${isActive ? "text-primary" : "hover:text-primary"}`}
        >
          {title}
        </Link>
        {isActive && (
          <motion.div
            layoutId="nav-active-indicator"
            className="absolute left-0 right-0 -bottom-1 h-0.5 rounded-full bg-primary"
            transition={{ type: "spring", stiffness: 500, damping: 40 }}
          />
        )}
      </div>
    );
  }
