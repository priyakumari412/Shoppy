import React, { useContext, useState } from 'react'
import '../pages/CSS/Category.css'
import dropdown_icon from '../components/Assets/dropdown.png'

import all_products from '../components/Assets/all-products/All_products'
import Item from '../components/item/item'



const Category = (props) => {

  const [item, setitem] = useState(all_products)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" className='shop-banner' />
      <div className="shop-category-index-sort">
        <p><span>Showing 1-12</span>out of 36 products</p>
        <div className="shopcategory-sort">
          Sort by
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {
          all_products.map((item, i) => {
            // console.log(item)
            if (props.category === item.category) {
              return <Item id={item.id} key={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else {
              return null;
            }
          })
        }
      </div>
      <button className="shopcategory-loadmore">
        Explore More
      </button>
    </div>
  )
}

export default Category