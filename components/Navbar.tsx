"use client";

import { useState } from "react";
import { ThemeControls } from "@/components/ThemeControls";

const navLinks = [
  { title: "About me", path: "#about", icon: "about" },
  { title: "Projects", path: "#projects", icon: "projects" },
  { title: "Tools", path: "#stack", icon: "tools" },
];

const NavigationIcon = ({ name }: { name: string }) => {
  if (name === "about") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5" /><path d="M5 20c.7-3.4 3-5.2 7-5.2s6.3 1.8 7 5.2" /></svg>;
  }
  if (name === "projects") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5h7l2 2h9v10.7H3z" /><path d="M3 9h18" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-2.6v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H6.3v-2.6h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.2H15v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V14h-.2a1.7 1.7 0 0 0-1.5 1Z" /></svg>;
};

export const Navbar = () => (
  <NavbarContent />
);

const NavbarContent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <aside className="sidebar">
    <div className="sidebar-profile">
      <div className="sidebar-profile-heading">
        <p className="sidebar-name">Shashank Chaubey</p>
        <div className="desktop-theme"><ThemeControls /></div>
      </div>
      <div className="sidebar-intro-wrap">
        <p className="sidebar-intro">A little about who I am, what I build, and what I’m curious about.</p>
      </div>
    </div>
    <div className="navbar-actions">
      <div className="mobile-theme"><ThemeControls /></div>
    </div>
    <nav aria-label="Main navigation" className="sidebar-nav desktop-nav">
      <ul>{navLinks.map((link) => <li key={link.path}><a href={link.path}><NavigationIcon name={link.icon} /><span>{link.title}</span></a></li>)}</ul>
    </nav>
    <div className="sidebar-socials" aria-label="Social profiles">
      <a href="https://github.com/shashank-chaubey" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.2-6-2.5M15 21v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.5 6a4.3 4.3 0 0 0-.1-3.2S17.4 2.5 15 4.1a13 13 0 0 0-6 0C6.6 2.5 5.6 2.8 5.6 2.8A4.3 4.3 0 0 0 5.5 6a4.7 4.7 0 0 0-1.2 3.3c0 4.7 2.8 5.7 5.5 6A3 3 0 0 0 9 17.5V21" /></svg>
      </a>
      <a href="https://www.linkedin.com/in/shashank-chaubey-a257352b7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9v11M5 5v.01M10 20v-6a4 4 0 0 1 8 0v6M10 10v10" /><circle cx="5" cy="5" r="1.5" /></svg>
      </a>
    </div>
    <div className="mobile-menu">
      <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
        <span aria-hidden="true"><i /><i /><i /></span>
      </button>
      {menuOpen && <nav aria-label="Mobile navigation" className="mobile-nav">
        <ul>{navLinks.map((link) => <li key={link.path}><a href={link.path} onClick={() => setMenuOpen(false)}>{link.title}</a></li>)}</ul>
      </nav>}
    </div>
  </aside>
  );
};
