'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel bg-opacity-70 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-heading font-bold text-gradient">
            Eliza.ai
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/meetings" className="nav-link">
            Meetings
          </Link>
          <Link href="/knowledge-base" className="nav-link">
            Knowledge Base
          </Link>
          <Link href="/people" className="nav-link">
            People
          </Link>
        </div>
        
        <div className="flex space-x-4 items-center">
          <Link href="/settings" className="nav-link">
            Settings
          </Link>
          <Link href="/record" className="primary-button flex items-center">
            <span>New Meeting</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel mt-2 p-4 flex flex-col space-y-4">
          <Link 
            href="/meetings" 
            className="nav-link p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Meetings
          </Link>
          <Link 
            href="/knowledge-base" 
            className="nav-link p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Knowledge Base
          </Link>
          <Link 
            href="/people" 
            className="nav-link p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            People
          </Link>
        </div>
      )}
    </nav>
  );
}
