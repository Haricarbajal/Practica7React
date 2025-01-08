import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router'
// import ThemeProvider from './pages/provider'
import LanguageProvider from './pages/ProviderLanguage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ThemeProvider> */}
    <LanguageProvider>
      <Router />
    </LanguageProvider>
    {/* </ThemeProvider> */}
  </StrictMode>
);