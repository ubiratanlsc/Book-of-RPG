import React from 'react';
import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client'
import App from './App'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider theme={{
    fontFamily: 'SansaPro', 
    fontSizes: {
      xs: 10, sm: 12, md: 14, lg: 16, xl: 20,
    }, colorScheme: 'dark',
    colors: {
      // override dark colors to change them for all components
      dark: [
        'white',
        '#acaebf',
        '#8c8fa3',
        '#666980',
        '#4d4f66',
        '#34354a',
        '#2b2c3d',
        '#1d1e30',
        '#0c0d21',
        '#01010a',
      ],
    },
  }} withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>
)
