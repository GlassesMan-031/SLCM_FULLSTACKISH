import "./App.css";
import { Heading, Highlight, Box, SimpleGrid } from "@chakra-ui/react";
import CitiesTable from "./components/CitiesTable";
import ProductsTable from "./components/ProductsTable";
import SalesTable from "./components/SalesTable";

function App() {
  return (
    <>
      <Box textAlign="center" m="4">
        <Heading size="3xl" letterSpacing="tight">
          <Highlight query="populating the page" styles={{ color: "teal.600" }}>
            Let's begin populating the page with content
          </Highlight>
        </Heading>
      </Box>

      <Box textAlign="center" mb="6">
        <Highlight
          query="Three Lists"
          styles={{ fontWeight: "semibold", color: "teal.600" }}
        >
          We're going to generate Three Lists and inject our Database content
          into them
        </Highlight>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} px={6}>
        <CitiesTable />
        <ProductsTable />
        <SalesTable />
      </SimpleGrid>
    </>
  );
}

export default App;
