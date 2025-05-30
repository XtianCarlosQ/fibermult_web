// src/pages/Home.jsx
import React, { useState } from 'react';
import SciFiButton from '../components/SciFiButton.jsx';
import ProgressBar from '../components/ProgressBar.jsx';

export default function Home() {
  const [progress, setProgress] = useState(0);

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
      <SciFiButton className="mb-6">RUN INFERENCE</SciFiButton>
      <div className="w-full max-w-2xl">
        <ProgressBar progress={progress}       label="Loading model..." />
        <ProgressBar progress={progress/2}     label="Processing images..." />
      </div>
      <div className="text-sci-fi-blue text-center mt-4">
        Inference completed. Results in W:\PROYECTOS\FIBERMULT\...
      </div>
    </div>
  );
}
