import React from 'react';
import { Menu, MenuSquare } from 'lucide-react';

const NavBar = ({ title = 'My Twillink' }) => (
  <div className="navbar bg-none px-3 pt-0 md:pt-6">
    <div className="flex-none lg:hidden">
      <label
        htmlFor="my-drawer"
        className="btn drawer-button bg-transparent shadow-none border-none p-2 h-auto min-h-fit">
        <Menu className="stroke-primary" />
      </label>
    </div>
    <div className="flex-1">
      <h2 className="font-bold text-general-high">{title}</h2>
    </div>
    <div className="hidden sm:block">
      <div className="flex items-center gap-6">
        <div className="hidden xl:block border-[1px] h-6"></div>
        <div className="px-4 py-2 bg-indigo-600 rounded-xl text-white cursor-pointer" onClick={()=> {window.location.href="/login"; localStorage.removeItem("token")}}>SignOut</div>
      </div>
    </div>
    <div className="block sm:hidden">
      <details className="dropdown dropdown-end">
        <summary className="btn bg-transparent shadow-none border-none p-0 m-1">
          <MenuSquare className="stroke-primary" />
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-20 w-52 p-2 shadow">
          <li>
          </li>
          <li>
            <div className="flex justify-end">
            <div className="px-4 py-2 bg-indigo-600 rounded-xl text-white cursor-pointer"  onClick={()=> {window.location.href="/login"; localStorage.removeItem("token")}}>SignOut</div>
            </div>
          </li>
        </ul>
      </details>
    </div>
  </div>
);

export default NavBar;
