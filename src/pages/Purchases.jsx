import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosEcommerce, getConfig } from '../utils/configAxios'
import PurchaseCard from '../components/purchases/PurchaseCard'

const Purchases = () => {

const [purchases, setPurchases] = useState([])


useEffect(()=>{
  const config = 
axiosEcommerce.get("purchases", getConfig())
.then((res)=>{
  const orderPurchases = res.data.sort((a,b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  setPurchases(orderPurchases)
})
.catch((err)=>console.log(err))
},[])

  return (
    <main className='px-2 my-2 max-w-[800px] mx-auto'>
      <section className='flex gap-3 items-center '>
        <Link to={"/"}>Home</Link>
        <div className='h-[10px] aspect-square rounded-full bg-red-500'></div>
        <span className='font-bold'>Purchases</span>
      </section>

<section className='grid gap-10 py-6'>
{
  purchases.map(purchase=> <PurchaseCard key={purchase.id}  purchase={purchase}/>)
}
</section>

    </main>
  )
}

export default Purchases
