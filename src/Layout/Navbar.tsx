import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { CiMenuFries } from "react-icons/ci";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'Career', path: '/career' },
  { name: 'Blog', path: '/blog' },
  { name: 'About Us', path: '/about-us' }
];

const navbar = () => {
    const Router = useRouter();
  return (
    <div className='flex justify- between-items-center'>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <CiMenuFries className="size-5" />
      </div>
      
      <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.path} className={Router.pathname === link.path ? "font-semibold text-primary" : "font-normal text-base-content"}>
                {link.name}
            </Link>
          </li>
        ))}
    </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.path} className={Router.pathname === link.path ? "font-semibold text-primary" : "font-normal text-base-content"}>
                {link.name}
            </Link>
          </li>
        ))}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </div>
  )
}

export default navbar