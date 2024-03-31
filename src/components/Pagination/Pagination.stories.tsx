import { MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css";
import Pagination from '../Pagination/Pagination';
import '../../index.css'

export default {
  title: 'Components/Pagination',
  component: Pagination,
};
export const Basic = () => (
  <MantineProvider defaultColorScheme="dark">
    <Pagination />
  </MantineProvider>
);