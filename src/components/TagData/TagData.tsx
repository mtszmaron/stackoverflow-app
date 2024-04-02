import { useAppStateStore } from "../../store/AppStore";
import axios from "axios";
import { useEffect, useState } from "react";
import TagTable from "../TagTable/TagTable";

interface Tag {
  name: string;
  count: number;
}

function TagData() {
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

  return <TagTable data={data} error={error} loading={loading} />;
}
export default TagData;
