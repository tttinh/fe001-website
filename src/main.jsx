import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from './components/ui/button';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className="bg-amber-400 text-6xl">Hello World</h1>
    <Button className="cursor-pointer">Click me!</Button>
  </StrictMode>,
);
