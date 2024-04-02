import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import TagTable from "../TagTable/TagTable";
import "../../index.css";

interface TableProps {
  data: [];
  error: boolean;
  loading: boolean;
}

export default {
  title: "Components/TagTable",
  component: TagTable,
  argTypes: {
    data: {
      control: {
        type: "array",
      },
    },
    error: {
      control: {
        type: "boolean | string",
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
    },
  },
};
export const Basic = ({ data, error, loading }: TableProps) => (
  <MantineProvider defaultColorScheme="dark">
    <TagTable data={data} error={error} loading={loading} />
  </MantineProvider>
);

Basic.args = {
  data: [
    {
      name: "Tag 1",
      count: 10,
    },
    {
      name: "Tag 2",
      count: 20,
    },
    {
      name: "Tag 3",
      count: 30,
    },
    {
      name: "Tag 4",
      count: 40,
    },
    {
      name: "Tag 5",
      count: 50,
    },
  ],
  error: false,
  loading: false,
};

export const Error = ({ data, error, loading }: TableProps) => (
  <MantineProvider defaultColorScheme="dark">
    <TagTable data={data} error={error} loading={loading} />
  </MantineProvider>
);

Error.args = {
  data: [],
  error: "Something went wrong...",
  loading: false,
};

export const EmptyLoading = ({ data, error, loading }: TableProps) => (
  <MantineProvider defaultColorScheme="dark">
    <TagTable data={data} error={error} loading={loading} />
  </MantineProvider>
);

EmptyLoading.args = {
  data: [],
  error: false,
  loading: true,
};

export const LoadingWithTags = ({ data, error, loading }: TableProps) => (
  <MantineProvider defaultColorScheme="dark">
    <TagTable data={data} error={error} loading={loading} />
  </MantineProvider>
);

LoadingWithTags.args = {
  data: [
    {
      name: "Tag 1",
      count: 10,
    },
    {
      name: "Tag 2",
      count: 20,
    },
    {
      name: "Tag 3",
      count: 30,
    },
    {
      name: "Tag 4",
      count: 40,
    },
    {
      name: "Tag 5",
      count: 50,
    },
  ],
  error: false,
  loading: true,
};
