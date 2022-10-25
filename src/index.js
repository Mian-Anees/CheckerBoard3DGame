import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { MainScene } from './modules/components/scene';
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'


createRoot(document.getElementById('root')).render(
  <div style={{ backgroundColor: "grey", width: "1520px", height: "900px" }}>
    <Canvas
      camera={{ position: [0, 10, 0] }}
    >
      <MainScene />
    </Canvas>,
  </div>
)
reportWebVitals();