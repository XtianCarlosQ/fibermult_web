// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Home from './pages/Home.jsx';
import Config from './pages/Config.jsx';
import Terminal from './components/Terminal.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  return (
    <div className="flex h-screen">
      {/* Navegación lateral */}
      <Sidebar page={page} setPage={setPage} />

      {/* Contenido principal y Terminal */}
      <div className="flex flex-col flex-1">
        <main className="flex-1 p-6 overflow-auto">
          {page === 'home' ? <Home /> : <Config />}
        </main>
        <Terminal />
      </div>
    </div>
  );
}
