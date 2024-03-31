import { SegmentedControl } from "@mantine/core";
import { NumberInput } from "@mantine/core";
import { useAppStateStore } from "../../store/AppStore";

function Header() {
  const {
    orderBy,
    sortBy,
    numberOfItems,
    setOrderBy,
    setSortBy,
    setNumberOfItems,
  } = useAppStateStore();

  return (
    <div className="flex mb-8">
      <div className="flex flex-col items-start mr-5">
        <p className="mb-2">Number of items</p>
        <NumberInput
          placeholder="Input placeholder"
          value={numberOfItems}
          onChange={setNumberOfItems}
          allowNegative={false}
          max={100}
        />
      </div>

      <div className="flex flex-col items-start  mr-5">
        <p className="mb-2">Order By</p>
        <SegmentedControl
          value={orderBy}
          onChange={setOrderBy}
          data={[
            { label: "Descending", value: "desc" },
            { label: "Ascending", value: "asc" },
          ]}
        />
      </div>
      <div className="flex flex-col items-start">
        <p className="mb-2">Sort By</p>
        <SegmentedControl
          value={sortBy}
          onChange={setSortBy}
          data={[
            { label: "Popular", value: "popular" },
            { label: "Activity", value: "activity" },
            { label: "Name", value: "name" },
          ]}
        />
      </div>
    </div>
  );
}

export default Header;
