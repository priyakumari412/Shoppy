import React from 'react';
import './Popular.css'

import Product_data from '../Assets/data/Data'
import Item from '../item/item';

const Popular = () => {
  return (
    <div className="popular">
      <h2>Popular Items</h2>
      <div className="popular-item">
        {Product_data.map((item, i) => {
         return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  );
};

export default Popular;
