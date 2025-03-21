import React from 'react'
import './RelatedProduct.css'
import data from '../Assets/data/Data'
import Item from '../item/item'
const RelatedProduct = () => {
    return (
        <>
            <h1>Related Products</h1>
            <div className='relatedproducts-scroll'>
                <div className="relatedproduct-item">
                    {data.map((item, i) => {
                        return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>
        </>
    )
}

export default RelatedProduct