import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menudata from './Menudata.json';
import './SideBar.scss';

const MenuItems = ({ items, basePath = '', depth = 0 }) => (
  <ul className="links" data-depth={depth}>
    {items.map(({ name, title, url, link, childrens, subMenu }) => {
      const href = basePath ? `${basePath}/${link}` : `/${url}`;
      const label = name ?? title;
      return (
        <li key={href}>
          <NavLink to={href} className={({ isActive }) => isActive ? 'active' : ''}>
            {label}
          </NavLink>
          {childrens?.length > 0 && <MenuItems items={childrens} basePath={href} depth={depth + 1} />}
          {subMenu?.length > 0 && <MenuItems items={subMenu} basePath={basePath} depth={depth + 1} />}
        </li>
      );
    })}
  </ul>
);

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <button className={`hamburger-btn ${isOpen ? 'hidden' : ''}`} onClick={toggleSidebar}>☰</button>
      <div className={`sidebar-overlay ${isOpen ? 'visible' : ''}`} onClick={closeSidebar} />
      <nav id="Sidebar" className={`Sidebar custom-scroll ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeSidebar}>✕</button>
        <MenuItems items={Menudata} />
      </nav>
    </>
  );
};

export default SideBar;