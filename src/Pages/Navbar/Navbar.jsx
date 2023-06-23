import { Icon } from "@iconify/react";

const Navbar = () => {
  const navItems = (
    <>
      <li className="mx-6 font-para">Home</li>
      <li className="mx-6 font-para">Product</li>
      <li className="mx-6 font-para">Pricing</li>
      <li className="mx-6 font-para">Contact</li>
    </>
  );

  return (
    <div className="navbar bg-[#FAFAFA]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img src="https://i.ibb.co/2MyRDqh/Llegal.png" alt="" />
        </a>
      </div>
      <div className="navbar-end hidden  text-sec-col font-semibold lg:flex">
        
          <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
          <Icon className="text-xl" icon="iconamoon:search-thin"></Icon>
          <Icon className="ml-6 mr-36 text-xl" icon="ion:cart-outline"></Icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
