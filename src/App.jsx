// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Home from './pages/Home.jsx';
import Config from './pages/Config.jsx';
import Terminal from './components/Terminal.jsx';

export default function App() {
  console.log('App.jsx: App component rendering');
  const [page, setPage] = useState('home');
  console.log('App.jsx: useState initialized, page:', page);
  return (
    <div className="flex h-screen">
      {/* Navegación lateral */}
      <Sidebar page={page} setPage={setPage} />

      {/* Contenido principal y Terminal */}
      <div className="flex flex-col flex-1 ">
        <main className="flex-1 p-6 my-5 mr-5 ml-3 mb-12 rounded-2xl shadow-sci-fi-glow bg-sci-fi-bg/50">
          {page === 'home' ? <Home /> : <Config />}
          
        </main>
        
      </div>
    </div>
  );
}
