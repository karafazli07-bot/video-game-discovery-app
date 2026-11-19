import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/navBar";

function App() {
  return (
    <Grid
      bg="white"
      color="gray.900"
      _dark={{ bg: "gray.900", color: "white" }}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem
        area="aside"
        bg="gold"
        display={{ base: "none", lg: "block" }}
        _dark={{ bg: "gray.700", color: "white" }}
      >
        Aside
      </GridItem>
      <GridItem area="main" bg="dodgerblue" _dark={{ bg: "gray.800" }}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
