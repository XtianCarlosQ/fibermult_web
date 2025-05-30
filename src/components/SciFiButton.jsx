// src/components/SciFiButton.jsx
import React from 'react';

export default function SciFiButton({ children, ...props }) {
  return (
    <button {...props}
      className={`
        bg-sci-fi-bg text-sci-fi-blue px-6 py-2 rounded-lg
        shadow-sci-fi-glow transition transform hover:scale-105
        border border-sci-fi-blue font-bold text-lg
      `}>
      {children}
    </button>
  );
}

