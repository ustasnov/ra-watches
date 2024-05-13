import React from 'react'
import ReactDOM from 'react-dom/client'
import Watches from './components/watches/Watches.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Watches watches={[
      {description: "Москва", zone: 3},
      {description: "Новосибирск", zone: 7},
      {description: "Калининград", zone: 2},
      {description: "Даллас", zone: -5},
      {description: "Токио", zone: 9},
      {description: "Лондон", zone: 1}
    ]}/>
  </React.StrictMode>,
)

