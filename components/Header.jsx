import Link from "next/link";
// import React, { useContext, useEffect, useState } from "react";
// import { Store } from "../utils/Store";
// import "react-toastify/dist/ReactToastify.css";
// import { signOut, useSession } from "next-auth/react";
// import { Menu } from "@headlessui/react";
// import DropdownLink from "./DropdownLink";
// import Cookies from "js-cookie";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  // const { status, data: session } = useSession();
  // const { state, dispatch } = useContext(Store);
  // const { cart } = state;
  // const [cartItemsCount, setCartItemsCount] = useState(0);
  // const [menu, setMenu] = useState(false);

  // useEffect(() => {
  //   // setCartItemsCount(4);
  //   setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  // }, [cart.cartItems]);

  // const logoutClickHandler = () => {
  //   Cookies.remove("cart");
  //   dispatch({ type: "CART_RESET" });
  //   signOut({ callbackUrl: "/login" });
  // };

  return (
    <header className="fixed z-20 w-screen py-1 p-4 md:px-16 bg-white  border-b-4 border-blue-700">
      {/* Desktop and Tablets */}
      <nav className="flex w-full justify-between">
        <Link href="/" className="cursor-pointer">
          <Image
            // className="h-20 w-20 object-contain cursor-pointer"
            src="/images/mpo.png"
            alt="mpo-logo"
            height={80}
            width={80}
          />
        </Link>

        <div
          className="md:hidden bg-blue-500 p-3 w-12 h-12 flex items-center justify-center rounded mt-4"
          onClick={() => setMenu(!menu)}
        >
          <FaBars className="text-white" size={25} />
        </div>
      </nav>
      {/* Mobile
      <div className="flex md:hidden w-full h-full">
        This is mobile view pending mobile design
      </div> */}
    </header>
  );
};

export default Header;
