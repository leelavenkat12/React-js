import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import Greet from './components/greet.jsx'
import Header from './components/Header.jsx'
import Counter from './components/EXERSICES/States/counter.jsx'
import Todolsit from './components/EXERSICES/States/Todolsit.jsx'
import Shoppinglist from './components/EXERSICES/States/Shoppinglist.jsx'
import Syntax from './components/Useeffect/Syntax.jsx'
import Fetching from './components/Useeffect/Fetching.jsx'
import BasicEffect from './components/EXERSICES/UseEffect/BasicEffect.jsx'
import CounterEffect from './components/EXERSICES/UseEffect/CounterEffect.jsx'
import FetchDataEffect from './components/EXERSICES/UseEffect/FetchDataEffect.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter /> */}
    {/* <Todolsit /> */}
    {/* <Shoppinglist /> */}
    {/* <Syntax /> */}
    {/* <Fetching /> */}
    <BasicEffect />
    <CounterEffect />
    <FetchDataEffect />
=======
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
>>>>>>> 3e8ff3977ecd63caaf1c360734f0abfe7fd6c305
  </StrictMode>,
)
