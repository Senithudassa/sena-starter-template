import React from 'react';

export default function Header() {
  return (
    <header className="py-4 text-center border-b-2 border-[#D4AF37]"
            style={{ 
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #F0E6D2 10px, #F0E6D2 20px)'
            }}>
      <h1 className="text-2xl font-bold text-[#0F4C81]">
        සෙන - Sena Project
      </h1>
      <p className="text-[#8E354A] mt-1">ADHD-Friendly Productivity for Sri Lankan Students</p>
    </header>
  );
}
