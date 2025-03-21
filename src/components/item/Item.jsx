// src/components/items/Item.jsx

import React from 'react';
import './Item.css'
import { NavLink } from 'react-router-dom';

const Item = (props) => {
  // console.log(props)

  return (
    <div className="item">
      <NavLink to={`/product/${props.id}`}>
        <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt={props.name} />
      </NavLink>
      <p>{props.name}</p>
      <div className='item-price'>
        <div className="new_price">
          ${props.new_price}
        </div>
        <div className="old_price">
          ${props.old_price}
        </div>


      </div>
    </div>
  );
};

export default Item;
