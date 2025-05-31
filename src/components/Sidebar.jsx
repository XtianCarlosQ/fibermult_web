// src/components/Sidebar.jsx
import React, { useState } from 'react';

export default function Sidebar({ page, setPage }) {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <aside className={`
      bg-[#12182b] text-sci-fi-blue shadow-sci-fi-glow
      transition-all duration-400
      ${collapsed ? 'w-12' : 'w-28'}
      flex flex-col items-center pt-6 ml-5 mt-5 mb-10 rounded-2xl border-sci-fi-blue
    `}>
      
      <button onClick={() => setCollapsed(!collapsed)}
              className="text-white mx-auto mb-4">
        {collapsed ? '▶' : '◀'}
      </button>

      <button onClick={() => setPage('home')}
              className={`mb-4 ${page === 'home' ? 'font-bold' : ''}`}>
        🏠 {collapsed ? '' : 'Home'}
      </button>
      
      <button onClick={() => setPage('config')}
              className={`${page === 'config' ? 'font-bold' : ''}`}>
        ⚙️ {collapsed ? '' : 'Config'}
      </button>
    </aside>
  );
}
