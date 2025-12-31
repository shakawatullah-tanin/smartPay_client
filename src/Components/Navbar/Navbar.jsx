import React, { use } from "react";

import billLogo from "../../assets/bill-logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FiEdit } from "react-icons/fi";
import { PiSignOutFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineHistory } from "react-icons/md";

const Navbar = () => {
  const { user, balance, UsersignOut, setLoding, setUser } = use(AuthContext);

  const handleSignOUt = () => {
    UsersignOut();
    setUser(null);
    setLoding(false);
  };

  console.log(user);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li>
              <NavLink to={"/protected"}>Bill</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost md:hidden lg:flex hidden">
          {" "}
          <img className=" p-2 w-14 " src={billLogo} alt="" />{" "}
          <p className="text-lg">Smart Pay </p>{" "}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className="active:underline" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="" to={"/protected"}>
              Bill
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          user.photoURL ? (
            <div className="h-10 w-10 cursor-pointer flex flex-col justify-center items-center rounded-full  text-xl font-bold common-shadow profile">
              <img
                className="rounded-full common-shadow"
                src={user.photoURL}
                alt=""
              />
              <div className="h-fit w-60  p-4 drop-menu common-shadow">
                <div className="border-b flex items-center justify-between">
                  <p className="font-normal text-sm ml-2 py-2 ">
                    Balance :
                    <span className="text-green-500 font-bold">{balance}</span>
                    BDT
                  </p>
                  <p> 
                    <Link to={"/history"}>
                    <MdOutlineHistory></MdOutlineHistory>
                    </Link>
                  </p>
                </div>

                <div className="font-normal p-2 grid grid-cols-2">
                  <Link to={"/update"}>
                    <div className="text-xl text-gray-600 flex border-r cursor-pointer  text-center hover:bg-blue-50 flex-row gap-2 items-center p-1 ">
                      <p className="text-sm font-semibold  text-center">
                        Profile
                      </p>
                      <CgProfile />
                    </div>
                  </Link>

                  <div
                    onClick={handleSignOUt}
                    className="flex cursor-pointer p-1 hover:bg-blue-50 flex-row gap-2 items-center "
                  >
                    <p className="text-sm font-semibold  text-center">
                      Sign Out
                    </p>
                    <div className="text-xl  text-gray-600">
                      <PiSignOutFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-10 w-10 cursor-pointer flex flex-col justify-center items-center rounded-full  text-xl font-bold common-shadow profile">
              <p>{user.email[0]}</p>
              <div className="h-fit w-60  p-4 drop-menu common-shadow">
                <p className="font-normal text-sm ml-2 py-2 border-b ">
                  Balance :{" "}
                  <span className="text-green-500 font-bold">{balance}</span>{" "}
                  BDT
                </p>

                <div className="font-normal p-2 grid grid-cols-2">
                  <Link to={"/update"}>
                    <div className="text-xl text-gray-600 flex border-r cursor-pointer  text-center hover:bg-blue-50 flex-row gap-2 items-center p-1 ">
                      <p className="text-sm font-semibold  text-center">
                        Profile
                      </p>
                      <CgProfile />
                    </div>
                  </Link>

                  <div
                    onClick={handleSignOUt}
                    className="flex cursor-pointer p-1 hover:bg-blue-50 flex-row gap-2 items-center "
                  >
                    <p className="text-sm font-semibold  text-center">
                      Sign Out
                    </p>
                    <div className="text-xl  text-gray-600">
                      <PiSignOutFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
          <div
            className="common-shadow  font-bold text-gray-500
          "
          >
            <NavLink
              to={"/login"}
              className=" btn hover:bg-blue-50 py-3  border-r"
            >
              Login
            </NavLink>
            <NavLink
              to={"/register"}
              className="p-2 btn hover:bg-blue-50 py-3 "
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
