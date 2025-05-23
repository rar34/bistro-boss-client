import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <div className=''>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </StrictMode>,
)
