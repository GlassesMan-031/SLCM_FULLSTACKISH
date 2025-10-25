// src/components/ProductsTable.jsx
import { useEffect, useState } from "react";
import RenderTable from "./TableRender";

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <RenderTable
      items={products}
      title="Products"
      caption="Product inventory"
    />
  );
}

export default ProductsTable;
