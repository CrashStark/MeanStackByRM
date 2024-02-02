import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { BreadCrumb } from '../Components/BreadCrumbs/BreadCrumb';
import { ProductDisplay } from '../Components/ProductDIsplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const all_products=useContext(ShopContext);
  console.log(all_products.all_product);
  const {productId}=useParams();

  const product=all_products.all_product.find((e)=>e.id===Number(productId));
  console.log(product);
  return (
    <div>
      <BreadCrumb product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}
