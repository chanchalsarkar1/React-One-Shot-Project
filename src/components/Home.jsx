import React, { useContext, useState, useEffect } from 'react'
import categoryContext from '../context/category'
import { ShoppingBag } from 'lucide-react'

const Home = () => {
  const { view } = useContext(categoryContext)
  const [data, setData] = useState([])

  const categoryView = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/category/${view}`)
      const categoryData = await res.json()
      setData(categoryData)
    } catch (error) {
      console.log("Error in fetching category product")
    }
  }

  useEffect(() => {
    categoryView()
  }, [view])

  if (data.length === 0) {
    return <h1 className='text-3xl'>Loading Data...</h1>
  }

  return (
    <div className='flex justify-evenly gap-20 flex-wrap'>
      {data.map(item => (
        <div key={item.id} className='m-4 bg-white px-4 rounded-md'>
          <div className='w-[200px] h-[300px]'>
            <img src={item.image} className='w-full h-full object-contain' />
          </div>
          <div className='flex flex-col items-center my-2'>
            <h2 className='font-semibold'>{item.title.slice(0, 12)}...</h2>
            <h5 className='font-semibold'>${item.price}</h5>
            <button className='bg-zinc-500 w-full flex justify-center py-2 rounded'>
              <ShoppingBag color='white' />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
