import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./index.css"
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize filteredProducts with all products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <h1>Search Products</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="Products">
        {/* Map through the filtered products and render them */}
        {filteredProducts.map((product, index) => (
       
          <li key={index}>
           <h6>Title: {product.title}</h6>
           <h6>Price: {product.price}</h6>
           <p>Description: {product.description}</p>
           <img className="img" src = {product.image} />
          </li>
         
        ))}
      </div>
    </>
  );
}

export default ProductList;
