import React, { useContext, useEffect, useState } from 'react'
import categoryContext from '../context/category'

const Navbar = () => {
  const [category, setCategory] = useState(["..Loading Menu"])
  const {setView, view}=useContext(categoryContext);
  const handleView = (item)=>{
    setView(item);
  }

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products/categories')
        const data = await res.json()
        setCategory(data)
        console.log("Fetched data:", data)  // ✅ correct
      } catch (error) {
        console.log("error in fetching category")
      }
    }

    fetchCategory()
  }, [])

  useEffect(() => {
    console.log("Updated category state:", category) // ✅ correct
  }, [category])

  return (
    <div className='flex justify-between gap-4 py-4 text-2xl'>
      <div><h1 className='text-2xl'>Learn Coding</h1></div>

      <div>
        <ul className='flex gap-4'>
          {category.map((item, i) => (
            <li className={view===item?" text-gray-500":"cursor-pointer"} key={i} onClick={()=>handleView(item)}>{item.toUpperCase()}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
