import React from 'react';
import './NewCollection.css';
import new_collection from '../Assets/new_collections';
import { Items } from '../Items/Items';
export const NewCollection = () => {
  return (
    <div className='newcollection'>
            <h1>
                NEW CLOLECTIONS
            </h1>
            <hr/>
            <div className="collection">
                {new_collection.map((item,index)=>{
                    return <Items key={index} id={item.id}
                    name={item.name} image={item.image}
                    new_prices={item.new_price}
                    old_prices={item.old_price}/> 
                }
                )}
            </div>
    </div>
  )
}
