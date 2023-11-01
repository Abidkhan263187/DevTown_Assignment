import React from 'react'
import { HomeImage } from './HomeImage'
import { Cards } from './Cards'
import { ProductPage } from './ProductPage'

export const Home = () => {
  return (
    <div>
        <HomeImage/>
        <Cards/>
        <ProductPage/>
    </div>
  )
}
