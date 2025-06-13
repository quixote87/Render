import React, { useState } from 'react';
import './CSS/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function PageHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="gradient-bg text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dave Cullinan</h1>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className="hover:text-blue-200 transition">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="gradient-bg absolute w-full z-50 px-4 py-2 md:hidden"
        >
          <ul className="flex flex-col space-y-3">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="block py-2 hover:text-blue-200 transition">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default PageHeader;
