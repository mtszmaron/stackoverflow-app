import { Button } from "@mantine/core";
import { useAppStateStore } from "../../store/AppStore";

function Pagination() {
  const { page, setPage } = useAppStateStore();

  return (
    <div className="flex items-center justify-center mt-8">
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Back
      </Button>

      <span className="mx-2 rounded border px-3 py-1">{page}</span>
      <Button onClick={() => setPage(page + 1)}>Next</Button>
    </div>
  );
}

export default Pagination;
