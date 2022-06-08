import React from "react";
import { FaCoins } from "react-icons/fa";
// import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to="/">
      <div className="text-3xl font-bold flex justify-center items-center ">
        <FaCoins className="icon text-3xl text-purple" />
        <h1>
          Coin <span className="text-purple">Search</span>
        </h1>
      </div>
      <div className="text-center text-sm antialiased italic">
        <p>Made with ❤️ by kabirrr</p>
      </div>
    </Link>
  );
};

export default Navbar;
