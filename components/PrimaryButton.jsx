import React from 'react';

export default function PrimaryButton({ children, onClick }) {
  return (
    <button 
      className="bg-[#0F4C81] text-white px-6 py-3 rounded-lg 
                hover:bg-[#0D3A6A] transition-colors duration-300
                border-b-4 border-[#D4AF37] relative overflow-hidden
                focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.2)_25%,rgba(212,175,55,0.2)_50%,transparent_50%,transparent_75%,rgba(212,175,55,0.2)_75%)] 
                      bg-[length:5px_5px] opacity-0 hover:opacity-100 transition-opacity">
      </div>
    </button>
  );
}
