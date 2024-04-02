import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import TagData from "../TagData/TagData";
import "../../index.css";

export default {
  title: "Components/TagData",
  component: TagData,
};
export const Basic = () => (
  <MantineProvider defaultColorScheme="dark">
    <TagData />
  </MantineProvider>
);
