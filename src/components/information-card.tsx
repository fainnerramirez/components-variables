import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import confetti, { Shape } from "canvas-confetti";
import clsx from "clsx";
import { useCallback, useEffect, useMemo, useState } from "react";
import { API_DOGS, API_POSTS } from "../api/api.config";
import style from "../style/global.module.css";
import { BORDERRADIUS, BORDERSTYLES, COLORS } from "../utils/consts/constants";

const DIRECTIONS = ["row", "column"];

type POSTS = {
  title: string;
  description: string;
};

type PHOTODOG = {
  url: string;
};

export const InformationCard: React.FC = () => {
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [loadingDog, setLoadingDog] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>("#FFFFFF");
  const [borderStyle, setBorderStyle] = useState<string | undefined>(undefined);
  const [borderRadius, setBorderRadius] = useState<string | undefined>(
    undefined
  );
  const [responsePost, setResponsePost] = useState<POSTS | null>(null);
  const [responseDog, setResponseDog] = useState<PHOTODOG | null>(null);

  // Generación de color de fondo aleatorio al inicializar
  useEffect(() => {
    const changeBackgroundColor = () => {
      const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
      setBgColor(randomColor);
    };
    changeBackgroundColor();
  }, []);

  // Fetch del post al cargar el componente
  useEffect(() => {
    let timePost: number | undefined;
    const getPostResponse = async () => {
      setLoadingData(true);
      const randomPost = Math.floor(Math.random() * 100);
      const response = await API_POSTS.get(`/posts/${randomPost}`);

      if (response.status === 200 && response.data != null) {
        timePost = setTimeout(() => {
          setLoadingData(false);
        }, 1000);
        setResponsePost({
          title: response.data.title,
          description: response.data.body,
        });
      }
    };

    getPostResponse();
    return () => {
      clearTimeout(timePost);
    };
  }, []);

  // Fetch de la foto del perro al cargar el componente
  useEffect(() => {
    let timeDog: number | undefined;
    const getPhotoDogResponse = async () => {
      setLoadingDog(true);
      const response = await API_DOGS.get(`/breeds/image/random/random`);
      if (response.status === 200 && response.data != null) {
        const URL = response.data.message ?? "";
        setResponseDog({ url: URL });

        timeDog = setTimeout(() => {
          setLoadingDog(false);
        }, 1000);
      }
    };

    getPhotoDogResponse();
    return () => {
      clearTimeout(timeDog);
    };
  }, []);

  // Generación de bordes aleatorios al cargar el componente
  useEffect(() => {
    const randomBorderStyle =
      BORDERSTYLES[Math.floor(Math.random() * BORDERSTYLES.length)];
    const randomImageBorderRadius =
      BORDERRADIUS[Math.floor(Math.random() * BORDERRADIUS.length)];

    setBorderStyle(randomBorderStyle);
    setBorderRadius(randomImageBorderRadius);
  }, []);

  // Uso de clsx para las clases dinámicas
  const classes = clsx([style.shades, style.effectGlass]);

  // Shapes de confetti generados una sola vez
  const shapesOptions: Shape[] = useMemo(() => {
    const triangle = confetti.shapeFromPath({ path: "M0 10 L5 0 L10 10z" });
    const heart = confetti.shapeFromPath({
      path: "M5 8s3-3 5-5c1-1 1-2 0-3s-2-2-3 0C6 1 5 3 5 3s-1-2-2-3c-1-2-3-1-3 0C2 3 5 8 5 8z",
    });
    const happy = confetti.shapeFromPath({
      path: "M5 0 C2.5 0 0 2.5 0 5 C0 7.5 2.5 10 5 10 C7.5 10 10 7.5 10 5 C10 2.5 7.5 0 5 0z M3 3 C3.5 3.5 4 3.5 4 3 C4 2.5 3.5 2 3 2 C2.5 2 2 2.5 2 3 C2 3.5 2.5 3.5 3 3z M7 3 C7.5 3.5 8 3.5 8 3 C8 2.5 7.5 2 7 2 C6.5 2 6 2.5 6 3 C6 3.5 6.5 3.5 7 3z M3 6 C3 7 4 8 5 8 C6 8 7 7 7 6",
    });
    const hand = confetti.shapeFromPath({
      path: "M5 0 L5 7 L4 8 L4 9 L6 9 L6 8 L5 7 L5 0z M4 3 L3 4 L4 5 L5 4z",
    });
    const textRandom = confetti.shapeFromText({
      text: "OK!",
      fontFamily: "Helvetica",
    });

    return [triangle, heart, happy, hand, textRandom];
  }, []);

  // Función para manejar el confetti, memorizada
  const handleDetails = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      shapes: [shapesOptions[Math.floor(Math.random() * shapesOptions.length)]],
    });
  }, [shapesOptions]);

  return (
    <Card
      width={"md"}
      bg={bgColor}
      borderStyle={borderStyle}
      borderColor={"#000000"}
      borderWidth={10}
      className={classes}
    >
      <CardBody>
        <Skeleton isLoaded={!loadingDog}>
          <Image
            src={responseDog?.url}
            alt="Foto de un perro"
            borderRadius={borderRadius}
            objectFit={"cover"}
            width={"full"}
            maxH={"md"}
          />
        </Skeleton>
        <Divider bg={"#000000"} p={0.5} mt={2} />
        <Stack mt="6" spacing="3">
          <Skeleton isLoaded={!loadingData}>
            <Heading size="md" color={"gray.50"}>
              {responsePost?.title}
            </Heading>
          </Skeleton>
          <Skeleton isLoaded={!loadingData}>
            <Text color={"gray.100"}>{responsePost?.description}</Text>
          </Skeleton>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          colorScheme="teal"
          onClick={handleDetails}
          size={"lg"}
          zIndex={100}
        >
          Celebremos
        </Button>
      </CardFooter>
    </Card>
  );
};
