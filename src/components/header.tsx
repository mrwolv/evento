import Link from "next/link";
import React from "react";
import Logo from "./logo";

const Header = () => {
  return (
    <header >
      <Logo/>
      <Link href="/">Home</Link>
      <Link href="/events/all">All EVENTS</Link>
    </header>
  );
};

export default Header;
