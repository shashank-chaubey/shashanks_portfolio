"use client";

import { useState } from "react";
import { ThemeControls } from "@/components/ThemeControls";

const navLinks = [
  { title: "About me", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Tools", path: "#stack" },
];

export const Navbar = () => (
  <NavbarContent />
);

const NavbarContent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <header className="sidebar">
    <nav aria-label="Main navigation" className="sidebar-nav desktop-nav">
      <ul>{navLinks.map((link) => <li key={link.path}><a href={link.path}>{link.title}</a></li>)}</ul>
    </nav>
    <div className="mobile-menu">
      <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
        <span aria-hidden="true"><i /><i /><i /></span>
      </button>
      {menuOpen && <nav aria-label="Mobile navigation" className="mobile-nav">
        <ul>{navLinks.map((link) => <li key={link.path}><a href={link.path} onClick={() => setMenuOpen(false)}>{link.title}</a></li>)}</ul>
      </nav>}
    </div>
    <div className="navbar-actions">
      <ThemeControls />
      <details className="hello-contact">
        <summary aria-label="Open social links">
          <span className="hello-copy" aria-hidden="true">
            <span>Say hi? 👋</span>
            <span>Have a project in mind?</span>
            <span>Amigos?</span>
            <span>Click here</span>
            <span>Let’s connect ✨</span>
          </span>
        </summary>
        <div className="hello-options" aria-label="Choose a way to connect">
          <a href="https://www.instagram.com/soy_shashank/" target="_blank" rel="noopener noreferrer" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.7" cy="6.6" r="1.1" /></svg>
            <span>Instagram</span><span className="hello-option-arrow" aria-hidden="true">↗</span>
          </a>
          <a href="https://www.linkedin.com/in/shashank-chaubey-a257352b7/" target="_blank" rel="noopener noreferrer" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.6H2.4V21h2.8V8.6ZM3.8 2.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM21.6 13.9c0-3.7-2-5.5-4.7-5.5a4 4 0 0 0-3.6 2V8.6h-2.8V21h2.8v-6.1c0-1.6.3-3.2 2.4-3.2 2 0 2.1 1.9 2.1 3.3V21h2.8l1-7.1Z" /></svg>
            <span>LinkedIn</span><span className="hello-option-arrow" aria-hidden="true">↗</span>
          </a>
          <a href="https://wa.me/917022093427" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp at +91 70220 93427" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2a9.6 9.6 0 0 0-8.2 14.6L2.5 21.5l4.8-1.3A9.6 9.6 0 1 0 12 2.2Zm0 17.3a7.7 7.7 0 0 1-3.9-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A7.7 7.7 0 1 1 12 19.5Zm4.2-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4.3-.4c.1-.2 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.4.5.2.9.3 1.2.4.5.2 1 .1 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" /></svg>
            <span>WhatsApp</span><span className="hello-option-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </details>
    </div>
  </header>
  );
};
