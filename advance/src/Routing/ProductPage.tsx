import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "./ProductsPage";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    (async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    })();
  }, [id]);

  return (
    <div>
      <h2>Product Page</h2>
      {product && (
        <div>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      )}
    </div>
  );
}
