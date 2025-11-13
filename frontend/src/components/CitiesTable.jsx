import { useEffect, useState } from "react";
import RenderTable from "./TableRender";

function CitiesTable() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/cities")
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cities:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading cities...</p>;

  return (
    <RenderTable
      items={cities}
      title="Cities"
      caption="This is fetching from the table 'Cities'"
    />
  );
}

export default CitiesTable;
