import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import LangChange from "./actions/LangChange";
import './index.css';
import App from './App.jsx';
import ThemeChange from './actions/ThemeChange.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LangChange>
      <ThemeChange>
        <App />
      </ThemeChange>
    </LangChange>
  </BrowserRouter>
);

