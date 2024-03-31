import Header from "./components/Header/Header";
import TagTable from "./components/TagTable/TagTable";
import Pagination from "./components/Pagination/Pagination";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./App.css";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Header />
      <TagTable />
      <Pagination />
    </MantineProvider>
  );
}

export default App;
