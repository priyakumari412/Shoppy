import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/breadcrums/Breadcrums'
import ProductDisplay from '../components/productDisplay/productDisplay'
import Description from '../components/description/Description'
import RelatedProduct from '../components/related-product/RelatedProduct'


const Product = () => {
  // console.log(props)
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  // console.log(productId)
  const product = all_products.find((e) => e.id === parseInt(productId))
  // console.log(product)


  // console.log(product)
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <Description product={product} />
      <RelatedProduct product={product} />
    </div>
  )
}

export default Product