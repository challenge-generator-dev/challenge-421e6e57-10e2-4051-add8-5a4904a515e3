import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import '@/styles/global.scss';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize aria-live regions for dynamic content updates
const liveRegion = document.createElement('div');
liveRegion.setAttribute('aria-live', 'polite');
liveRegion.setAttribute('aria-atomic', 'true');
liveRegion.style.position = 'absolute';
liveRegion.style.width = '1px';
liveRegion.style.height = '1px';
liveRegion.style.margin = '-1px';
liveRegion.style.padding = '0';
liveRegion.style.overflow = 'hidden';
liveRegion.style.clip = 'rect(0, 0, 0, 0)';
liveRegion.style.border = '0';
document.body.appendChild(liveRegion);

export const announce = (message: string) => {
  if (liveRegion) {
    liveRegion.textContent = message;
  }
};