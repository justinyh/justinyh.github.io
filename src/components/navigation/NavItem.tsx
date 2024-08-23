import Link from "../../../node_modules/next/link";
import { useRouter } from "../../../node_modules/next/navigation";

export default function NavItem({ title, href="#", onClick }) {

  const router = useRouter();

  function handleClick() {
    router.push(href);
    onClick();
  }
    return (
      <div>
        <button onClick={handleClick}>{title}</button>
      </div>
    );
  }