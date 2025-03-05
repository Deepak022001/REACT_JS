import React, { useState } from 'react';
import './studies.css';

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: '₹50,000',
    image:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSjx6T94778gCxvxYcrp0615p_kHV_RUDlqSrF0_EpevGQ09U8mbE7BHFjyeuCecdejlHQo6Axgoe6sPJU1K93K8Pzzc_egWOevD5st266O0cyng9FkJ-tVJdzmcgH2mtMXmHm5BPo&usqp=CAc', // Replace with actual image URLs
  },
  {
    id: 2,
    name: 'Smartphone',
    price: '₹30,000',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTNSHw1RwacBZAL_7hTze5qxmZlBzUhzXVtJsWZjchwUg1GufUHPHPzJrKttNE20Og_ZqY8yFP3yGSlJuDIoFv35eRXj1Os3bvq8GCo8qj3u-7UQYi3kPURE_TecT0PlqaPg_m1rvs&usqp=CAc',
  },
  {
    id: 3,
    name: 'Headphones',
    price: '₹2,500',
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRB26PT43Bz7TkcQXxXl5XHJXu6Cd72gK7B-miC0skzqtk1WUMvso_RZtJsZ6RZfIY1wdAAuOfOV1uuVqXeeugmdcI9_VgqoKmrPJ89p6tC5L19Leqbcz8lYQ',
  },
];

export default function ProductCatalogue() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className='product-container'>
      <h2>Product Catalogue</h2>
      <div className='product-list'>
        {products.map((product) => (
          <div
            key={product.id}
            className='product-card'
          >
            <img
              src={product.image}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
