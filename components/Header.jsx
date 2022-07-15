import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useCart from '../store/store';
import { Cart } from './Icos';
const Header = () => {
  const total = useCart((state) => state.total);
  const totalqty = useCart((state) => state.totalqty);

  const [mytotal, setTotal] = useState();
  const [mytotalqty, setTotalqty] = useState();

  useEffect(() => {
    setTotal(total);
    setTotalqty(totalqty);
  }, [total]);
  return (
    <header className="flex h-12 items-center px-4 justify-between shadow-md">
      <Link href="/">
        <a className="text-lg font-bold">AMAZONA</a>
      </Link>
      <div className="flex items-center">
        <Link href="/cart">
          <a className="p-2 relative">
            <Cart />
            <div className="absolute top-0 right-0">{mytotalqty}</div>
          </a>
        </Link>
        <Link href="/login">
          <a className="p-2">Login</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
