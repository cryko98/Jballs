import React from 'react';
import { Menu, X } from 'lucide-react';
import { CONTRACT_ADDRESS, SOCIALS } from '../constants';
import CopyButton from './CopyButton';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const NavLinks = () => (
    <>
      {['About', 'How to Buy', 'Memes', 'Chart'].map((item) => (
        <button
          key={item}
          onClick={() => scrollToSection(item.toLowerCase().replace(/\s/g, '-'))}
          className="text-white hover:text-gold font-christmas text-xl font-bold transition-colors"
        >
          {item}
        </button>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-christmas-red/95 backdrop-blur-sm border-b-4 border-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand (Mobile) */}
          <div className="flex-shrink-0 flex items-center md:hidden">
            <span className="font-christmas text-2xl font-bold text-white">$JBALLS</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
             <span className="font-christmas text-3xl font-bold text-white mr-4">$JBALLS</span>
            <NavLinks />
          </div>

          {/* CA Box & Socials */}
          <div className="hidden md:flex items-center space-x-4">
             {/* X Logo */}
            <a href={SOCIALS.X} target="_blank" rel="noopener noreferrer" className="bg-black p-2 rounded-full hover:bg-gray-800 transition">
                 <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
            </a>
            
            <div className="relative group">
              <input 
                type="text" 
                readOnly 
                value={CONTRACT_ADDRESS}
                className="bg-white text-gray-800 text-sm rounded-full py-2 pl-4 pr-10 w-48 font-mono border-2 border-christmas-green focus:outline-none truncate"
              />
              <CopyButton text={CONTRACT_ADDRESS} />
            </div>
            
             <a href={SOCIALS.DEXSCREENER} className="bg-christmas-green text-white px-4 py-2 rounded-full font-bold hover:bg-green-800 transition shadow-md border-2 border-white">
              Buy Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 p-2"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-700 p-4 space-y-4 border-t-2 border-white">
          <div className="flex flex-col space-y-4">
            <NavLinks />
            <div className="pt-4 border-t border-red-500">
                <div className="mb-2 text-white font-christmas">Contract Address:</div>
                <div className="relative">
                  <input 
                    type="text" 
                    readOnly 
                    value={CONTRACT_ADDRESS}
                    className="bg-white text-gray-800 text-sm rounded-lg py-3 pl-3 pr-10 w-full font-mono"
                  />
                  <CopyButton text={CONTRACT_ADDRESS} />
                </div>
            </div>
             <a href={SOCIALS.X} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-black text-white py-2 rounded-lg gap-2">
                 <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
                Follow on X
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;