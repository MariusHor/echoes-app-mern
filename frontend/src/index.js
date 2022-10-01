import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const container = document.getElementById('roote');
const root = createRoot(container);
root.render(<App />);
