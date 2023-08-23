import { useState } from 'react'
import Items from "./Items";

const Categories = ({ cat }) => {
  const [items, setItems] = useState([])
  const listItems = (categories) => {
    fetch(`https://fakestoreapi.com/products/category/${categories}`)
    .then(response => {
      return response.json()
    })
    .then(data =>{
      setItems(data)
      console.log(items)
    })
  }
  return (
    <div style={{ display: "flex", flexDirection: "column"}}>
    {
      cat.map((categories) =>(
   
       <button style={{margin:"10px",backgroundColor:"lightgreen", flex: 2, border: "dotted", borderColor: "green"}} onClick={()=> listItems(categories)}>{categories}</button>
     )) 
     
    }
    <Items items={items}/>
    </div>
  );
};

export default Categories
