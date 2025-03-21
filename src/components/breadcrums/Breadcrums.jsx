import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/arrow.png'
const Breadcrums = (props) => {
  const {product} = props;
  const id = props.id
  return (
    <div className='breadcrum'>
      Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
      </div>
    // <div>hii</div>
  )
}

export default Breadcrums