import Sidebar from './components/Sidebar';
import Terminal from './components/Terminal';
import Home from './pages/Home';
import Config from './pages/Config';
import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('home');
  return (
    <div className="flex h-screen">
      <Sidebar setPage={setPage} page={page} />
      <div className="flex flex-col flex-1">
        <div className="flex-1 p-6">
          {page === 'home' ? <Home /> : <Config />}
        </div>
        <Terminal />
      </div>
    </div>
  );
}

