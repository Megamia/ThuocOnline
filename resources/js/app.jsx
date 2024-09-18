import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/home/Home';

const rootElement = document.getElementById('app');
if (rootElement) {
    createRoot(rootElement).render(<Home />);
}
