import { MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css";
import TagTable from '../TagTable/TagTable';
import '../../index.css'

export default {
  title: 'Components/TagTable',
  component: TagTable,
};
export const Basic = () => (
  <MantineProvider defaultColorScheme="dark">
    <TagTable />
  </MantineProvider>
);