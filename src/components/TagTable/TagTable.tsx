import { Table, LoadingOverlay } from "@mantine/core";
import { useAppStateStore } from "../../store/AppStore";
import axios from "axios";
import { useEffect, useState } from "react";

interface Tag {
  name: string;
  count: number;
}

function TagTable() {
  const { orderBy, sortBy, numberOfItems, page } = useAppStateStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | boolean>(false);
  const [data, setData] = useState<Tag[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const itemsNumber =
        typeof numberOfItems === "string"
          ? parseInt(numberOfItems, 10)
          : numberOfItems;
      if (itemsNumber > 100) {
        return;
      }
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.stackexchange.com/2.3/tags?page=${page}&order=${orderBy}&pagesize=${numberOfItems}&sort=${sortBy}&site=stackoverflow`
        );
        setError(false);
        setData(response.data.items);
      } catch (error) {
        setError(true);
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.error_message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [numberOfItems, orderBy, sortBy, page]);

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
