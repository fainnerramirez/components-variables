import { ChakraProvider, Stack } from "@chakra-ui/react";
import { ButtonComponent } from "./components/button-component";
import { InformationCard } from "./components/information-card";

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <ChakraProvider>
      <Stack
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100vw"}
        height={"100vh"}
        bg={"#f0e7db"}
        spacing={10}
        flexDir={{ base: "column", lg: "row" }}
      >
        <InformationCard />
        <ButtonComponent />
      </Stack>
    </ChakraProvider>
  );
};

export default App;
