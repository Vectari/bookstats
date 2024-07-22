import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { SearchBar } from './components/SearchBar/SearchBar'

const search = "https://openlibrary.org/search.json?q=the+lord+of+the+rings"

console.log(search)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1>Hello !!!</h1>
    <SearchBar />
  </React.StrictMode>,
)
