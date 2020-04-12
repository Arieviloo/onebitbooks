import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from "./routes"
import Header from "./Components/Header"

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes />
    </BrowserRouter>
  )
}
