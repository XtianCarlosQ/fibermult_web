// src/pages/Home.jsx
import React, { useState } from 'react';
import SciFiButton from '../components/SciFiButton.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import Terminal from '../components/Terminal.jsx';

export default function Home() {
  const [images, setImages] = useState([]);      // almacena rutas / archivos seleccionados
  const [progress, setProgress] = useState(0);
  console.log('Home.jsx: Home component rendering');
  const handleSelectImages = () => {
    // TODO: abrir diálogo OS y setImages([...selectedFiles])
    alert('Aquí irá la lógica para seleccionar carpeta o archivos...');
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px]">
      <SciFiButton className="mb-4">SELECT IMAGES</SciFiButton>
      <div className="my-6 grid grid-cols-4 gap-4 w-full max-w-2xl">
        {[...Array(8)].map((_,i) => (
          <div key={i}
            className="h-24 w-24 rounded-xl bg-gradient-to-br
                       from-sci-fi-blue/40 to-sci-fi-bg
                       shadow-sci-fi-glow flex items-center justify-center
                       text-white text-2xl">
            🖼️
          </div>
        ))}
      </div>

      <br />

      <SciFiButton>RUN INFERENCE</SciFiButton>

      <div className="w-full max-w-2xl">
        <ProgressBar progress={progress}       label="Loading model..." />
        <ProgressBar progress={progress/2}     label="Processing images..." />
      </div>

      <div className="text-sci-fi-blue text-start mt-4">
        Inference completed. Results in W:\PROYECTOS\FIBERMULT\...
      </div>

      <Terminal />
    </div>
  );
}
