import { Box, ChakraProvider } from "@chakra-ui/react";
import { InformationCard } from "./components/information-card";

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <ChakraProvider>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100vw"}
        height={"100vh"}
        bg={"#f0e7db"}
      >
        <InformationCard />
      </Box>
    </ChakraProvider>
  );
};

export default App;
