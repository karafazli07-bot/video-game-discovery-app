import { Button, HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <HStack justify="space-between">
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
      <Button onClick={toggleColorMode}>
        {isDark ? "Açık moda geç" : "Koyu moda geç"}
      </Button>
    </HStack>
  );
};

export default NavBar;
