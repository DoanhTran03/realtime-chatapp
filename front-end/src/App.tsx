import { BrowserRouter } from 'react-router-dom'
import SocketProvider from "../context/SocketProvider"
import Router from './pages/Router'

function App() {
  return (
    <>
    <SocketProvider>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </SocketProvider>
    </>
  )
}

export default App
