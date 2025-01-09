import {
  Box,
  Button,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { FaCheckCircle } from "react-icons/fa";

type Props = {
  bgColors: string | undefined;
  variants: string | undefined;
  sizeButton: string | undefined;
  hoverColor: string | undefined;
  textButton: string | undefined;
};

export const ButtonModal: React.FC<Props> = ({
  bgColors,
  variants,
  sizeButton,
  hoverColor,
  textButton,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClickModal = () => {
    console.log("Modal opened");
    onOpen();
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        whileDrag={{ scale: 0.9, rotate: 10 }}
        drag
      >
        <Button
          p={5}
          onClick={handleClickModal}
          colorScheme={bgColors}
          variant={variants}
          size={sizeButton}
          _hover={{
            backgroundColor: hoverColor,
            color: "white",
            boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          {textButton}
        </Button>
      </motion.button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg={"blackAlpha.900"} color={"whiteAlpha.900"}>
            Dentsu
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text fontWeight="bold" mb="1rem">
                Esta variante tiene las siguientes caracteristicas
              </Text>
              <Box>
                <List>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} />
                    Color: {bgColors}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} />
                    Variantes: {variants}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} />
                    Tamaño del botón: {sizeButton}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} />
                    Hover color: {hoverColor}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} />
                    Texto del botón: {textButton}
                  </ListItem>
                </List>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
