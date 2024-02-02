import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import { Items } from '../Components/Items/Items';
export const ShopCategory = (props) => {
    const {all_product}=useContext(ShopContext);
    console.log(all_product);
    console.log(props);
  return (
    <div className='shop-category'>
        <img src={props.banner} alt='' className='shopcategory-banner'/>
        <div className='shopcategory-indexSort'>
            <p>
                <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
                Sort by <img src={dropdown_icon} alt="" />
            </div>
        </div>
        <div className="shopcategory-products">
            {
                all_product.map((item,index)=>{
                    if(props.category===item.category){
                        return  <Items key={index} id={item.id}
                        name={item.name} image={item.image}
                        new_prices={item.new_price}
                        old_prices={item.old_price}/>
                    }else{
                        return null;
                    }
                })
            }
        </div>
        <div className="shopcategory-loadmore">
            Explore More
        </div>
    </div>
  )
}
