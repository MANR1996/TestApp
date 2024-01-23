import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home';
import Test from './views/Test';
import Error from './views/Error';
import { ThemeProvider } from 'styled-components'

export const theme = {
  light: {
    colorPalette: {
      'color-50': '#edfcf4',
      'color-100': '#d5f6e3',
      'color-200': '#aeeccb',
      'color-300': '#78ddae',
      'color-400': '#42c58c',
      'color-500': '#23c483',
      'color-600': '#118A5B',
      'color-700': '#0e6e4c',
      'color-800': '#0e573e',
      'color-900': '#0c4834',
      'color-950': '#06281e',
      'color-insufficient': '#FF6154'
    }
  }
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/test' element={<Test />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </main>
    </ThemeProvider>
  )
}

export default App
