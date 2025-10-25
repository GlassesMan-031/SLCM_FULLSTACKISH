import { Table, Box, Heading } from "@chakra-ui/react";

function RenderTable({ items, title, caption }) {
  if (!items || items.length === 0) return <p>No data available</p>;

  const columns = Object.keys(items[0]);

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      m={2}
      boxShadow="md"
      _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
      transition="all 0.2s"
    >
      <Heading size="md" mb={3} textAlign="center" color="teal.600">
        {title}
      </Heading>

      <Table.Root size="sm" variant="striped" colorScheme="teal">
        {caption && <Table.Caption>{caption}</Table.Caption>}

        <Table.Header>
          <Table.Row color="teal.600">
            {columns.map((col) => (
              <Table.ColumnHeader key={col}>
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map((item, rowIndex) => (
            <Table.Row key={rowIndex}>
              {columns.map((col) => (
                <Table.Cell key={col}>{item[col]}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}

export default RenderTable;
