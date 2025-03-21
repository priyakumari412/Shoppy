import React from 'react'
import './New_collections.css'
import new_collections_data from'../Assets/new-collections/new_collections_data'
import Item from '../item/item'
// import Item from '../item/Item'


const New_collections = () => {
    return (
        <div className='New-collections'>
            <h1>NEW COLLECTIONS</h1>
            <div className="collections">
                {new_collections_data.map((item, i) => {
                    return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default New_collections