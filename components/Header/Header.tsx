import Link from "next/link";
import "./Header.css";

const Header = () => (
  <div>
    <Link href="/">
      <a className="header-link">Home</a>
    </Link>
    <Link href="/about">
      <a className="header-link">About</a>
    </Link>
  </div>
);

export default Header;
