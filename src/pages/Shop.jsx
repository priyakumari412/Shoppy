import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/Popular'
import Offer from '../components/offers/Offer'
import New_collections from '../components/new-collections/New_collections'
import Newsletter from '../components/Newsletter/Newsletter'



const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <New_collections />
      <Newsletter />
    </div>
  )
}

export default Shop