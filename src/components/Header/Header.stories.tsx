import { MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css";
import Header from '../Header/Header';
import '../../index.css'

export default {
  title: 'Components/Header',
  component: Header,
};
export const Basic = () => (
  <MantineProvider defaultColorScheme="dark">
    <Header />
  </MantineProvider>
);