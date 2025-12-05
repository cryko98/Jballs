import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-christmas-green text-white py-8 border-t-8 border-gold relative z-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-christmas text-3xl mb-4">$JBALLS</h2>
        <p className="text-sm opacity-80 max-w-lg mx-auto mb-6 font-sans">
          Jingle Balls is a meme coin for entertainment purposes only. 
          There is no intrinsic value, no expectation of financial return, 
          and definitely no utility other than having the biggest sack under the tree.
        </p>
        <div className="text-xs opacity-50">
          © {new Date().getFullYear()} Jingle Balls. All rights preserved (in snow).
        </div>
      </div>
    </footer>
  );
};

export default Footer;