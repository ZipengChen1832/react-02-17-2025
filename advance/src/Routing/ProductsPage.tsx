import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    })();
  }, []);

  const goToProductPage = (id: number) => {
    console.log("history", history);
    history.push(`/products/${id}`);
  };

  return (
    <div>
      <h2>Products Page</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <ProductPreview
            product={product}
            key={product.id}
            onClick={goToProductPage}
          />
        ))}
      </div>
    </div>
  );
}

function ProductPreview({
  product,
  onClick,
}: {
  product: Product;
  onClick: (id: number) => void;
}) {
  return (
    <div
      key={product.id}
      onClick={() => onClick(product.id)}
      style={{
        width: "300px",
        height: "400px",
        border: "5px solid red",
      }}
    >
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div style={{ width: "100%", height: "200px", objectFit: "cover" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
