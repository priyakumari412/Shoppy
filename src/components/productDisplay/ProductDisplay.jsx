import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull.png'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = ({ product }) => { 
  const {addToCart} = useContext(ShopContext);
   // Destructure product here
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="product-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} alt="" className='product-display-main-img' />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1> {/* Use product.name */}
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(222)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur necessitatibus unde a hic dolore voluptatem magnam, exercitationem numquam, asperiores, nisi reiciendis dolores accusamus et quos eum eveniet! Nobis, facere et.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Women , T-shirt , Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern , Latest</p>

      </div>
    </div>
  )
}

export default ProductDisplay;
