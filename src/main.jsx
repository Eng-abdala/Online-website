import { createRoot } from 'react-dom/client'
import Header from "./Components/Header"

import './style.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

let root = document.querySelector("#root")

createRoot(root).render(
<BrowserRouter>
<Header/>
<App/>
</BrowserRouter> 
  
)
