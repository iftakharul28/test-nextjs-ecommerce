import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="flex h-12 items-center px-4 justify-between shadow-md">
      <Link href="/">
        <a className="text-lg font-bold">AMAZONA</a>
      </Link>
      <div>
        <Link href="/cart">
          <a className="p-2">Cart</a>
        </Link>
        <Link href="/login">
          <a className="p-2">Login</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
