import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import theme from './theme'

import { BrowserRouter } from 'react-router-dom'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ColorModeScript initialColorMode="dark" />
        <div className='quicksand'>
          <App />
        </div>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
