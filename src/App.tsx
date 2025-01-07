import { ChakraProvider, Heading } from "@chakra-ui/react";

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <ChakraProvider>
      <Heading>Initial Commit</Heading>
    </ChakraProvider>
  );
};

export default App;
