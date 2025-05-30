// src/components/ConfigPanel.jsx
import React, { useState } from 'react';

export default function ConfigPanel() {
  const [modelPath, setModelPath] = useState(
    'W:\\PROYECTOS\\FIBERMULT\\envs\\best_yolo8x_v2.pt'
  );
  const [venvPath, setVenvPath] = useState(
    'C:\\Users\\xtian\\anaconda3\\envs\\yolo_segment'
  );
  const [outDir, setOutDir] = useState(
    'W:\\PROYECTOS\\FIBERMULT\\output'
  );
  return (
    <div className="
      max-w-xl mx-auto p-8 rounded-2xl shadow-sci-fi-glow
      bg-sci-fi-bg/70
    ">
      <h2 className="text-sci-fi-blue text-2xl font-bold mb-6 text-center">
        FIBERMULT AI — Configuración
      </h2>
      <div className="mb-4">
        <label className="block text-sci-fi-blue mb-2">Model Path</label>
        <input value={modelPath}
               onChange={e => setModelPath(e.target.value)}
               className="w-full px-4 py-2 rounded bg-black bg-opacity-60 text-sci-fi-blue" />
      </div>
      <div className="mb-4">
        <label className="block text-sci-fi-blue mb-2">Virtual Env</label>
        <input value={venvPath}
               onChange={e => setVenvPath(e.target.value)}
               className="w-full px-4 py-2 rounded bg-black bg-opacity-60 text-sci-fi-blue" />
      </div>
      <div className="mb-4">
        <label className="block text-sci-fi-blue mb-2">Output Dir</label>
        <input value={outDir}
               onChange={e => setOutDir(e.target.value)}
               className="w-full px-4 py-2 rounded bg-black bg-opacity-60 text-sci-fi-blue" />
      </div>
    </div>
  );
}
