import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className="bg-amber-400 text-6xl">Hello World</h1>
  </StrictMode>,
);
