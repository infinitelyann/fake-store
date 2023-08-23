import { useState, useEffect } from 'react'
import './App.css'
import Categories from './components/Categories'

function App() {
  const [cat, setCats] = useState([])
 
  const fetchCategories = () =>{
   fetch("https://fakestoreapi.com/products/categories")
   .then(response => {
     return response.json()
    })
    .then(data => {
      console.log(data)
      setCats(data)
    })
    
   
  }
  useEffect(() =>{
    fetchCategories()
    
  }, [])

  return (
    <>
  <Categories cat={cat}/>


  

    </>
  )
}

export default App
