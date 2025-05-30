// src/components/ProgressBar.jsx
import React from 'react';

export default function ProgressBar({ progress = 0, label = '' }) {
  return (
    <div className="mb-2">
      <div className="text-xs text-sci-fi-blue mb-1">{label}</div>
      <div className="w-full bg-gray-800 rounded-full h-3">
        <div className="bg-sci-fi-blue h-3 rounded-full"
             style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

