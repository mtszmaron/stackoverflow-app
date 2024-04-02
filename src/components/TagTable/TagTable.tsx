import { Table, LoadingOverlay } from "@mantine/core";

interface Tag {
  name: string;
  count: number;
}

function TagTable({
  data,
  error,
  loading,
}: {
  data: Tag[];
  error: string | boolean;
  loading: boolean;
}) {
  const rows = data.map((element: Tag) => (
    <Table.Tr key={element.name}>
      <Table.Td className="text-start">{element.name}</Table.Td>
      <Table.Td className="text-start">{element.count}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="relative">
      {error ? (
        <p className="flex items-start">{error}</p>
      ) : (
        <>
          <LoadingOverlay
            visible={loading}
            zIndex={1000}
            overlayProps={{ radius: "sm", blur: 2 }}
          />
          <Table striped>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Tag Name</Table.Th>
                <Table.Th>Count</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </>
      )}
    </div>
  );
}
export default TagTable;
