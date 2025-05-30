import { useState } from 'react';
export default function Sidebar({ setPage, page }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={`bg-[#12182b] text-sci-fi-blue shadow-sci-fi-glow transition-all duration-300 ${collapsed ? 'w-16' : 'w-48'} flex flex-col items-center pt-6`}>
      <button onClick={() => setCollapsed(!collapsed)} className="mb-6 focus:outline-none">
        {collapsed ? '▶' : '◀'}
      </button>
      <button onClick={() => setPage('home')} className={`mb-4 ${page === 'home' ? 'font-bold' : ''}`}>🏠 {collapsed ? '' : 'Home'}</button>
      <button onClick={() => setPage('config')} className={`${page === 'config' ? 'font-bold' : ''}`}>⚙️ {collapsed ? '' : 'Config'}</button>
    </div>
  );
}

