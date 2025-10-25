import { useEffect, useState } from "react";
import RenderTable from "./TableRender";

function SalesTable() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/sales")
      .then((res) => res.json())
      .then((data) => {
        setSales(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching sales:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading sales...</p>;

  return (
    <RenderTable items={sales} title="Sales" caption="Recent sales data" />
  );
}

export default SalesTable;
