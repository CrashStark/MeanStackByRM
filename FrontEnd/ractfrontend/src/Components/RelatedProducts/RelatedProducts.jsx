import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import { Items } from '../Items/Items';
export const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>
            Related Products
        </h1>
        <hr/>
        <div className="relatedproducts-item">
            {
                data_product.map((item,index)=>{
                    return <Items key={index} id={item.id}
                    name={item.name} image={item.image}
                    new_prices={item.new_price}
                    old_prices={item.old_price}/> 
                })
            }
        </div>
    </div>
  )
}
