import Header from "./components/Header/Header";
import Pagination from "./components/Pagination/Pagination";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./App.css";
import TagData from "./components/TagData/TagData";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Header />
      <TagData />
      <Pagination />
    </MantineProvider>
  );
}

export default App;
