










import React from 'react'
import ProductsCard from './ProductsCard';

const Products = ({ products }) => {
 
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Discover a world of style at your fingertips – where every click is a
          step into a shopping adventure. Welcome to [Your Commerce Site Name],
          where fashion meets convenience, and every purchase is a stylish step
          forward!
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((item) => (
          <ProductsCard key={item._id} product={ item} />
        ))}
      </div>
    </div>
  );
}

export default Products