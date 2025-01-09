import { useEffect, useState } from "react";
import { ButtonModal } from "./button-modal";

export const ButtonComponent: React.FC = () => {
  const [sizeButton, setSizeButton] = useState<string | undefined>("lg");
  const [variants, setVariants] = useState<string | undefined>("solid");
  const [bgColors, setBgColors] = useState<string | undefined>("teal");
  const [hoverColor, setHoverColor] = useState<string | undefined>("blue");
  const [textButton, setTextButton] = useState<string | undefined>(
    "Dentsu es genial"
  );

  useEffect(() => {
    const sizes = ["lg", "md", "sm", "xs"];
    const variants = ["ghost", "link", "outline", "solid", "unstyled"];
    const bgColors = [
      "gray",
      "red",
      "orange",
      "yellow",
      "green",
      "teal",
      "blue",
      "cyan",
      "purple",
      "pink",
    ];

    const TextsDensut = [
      "Transforma tu marca con dentsu",
      "Trabaja con dentsu",
      "Dentsu es genial",
    ];

    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    const randomVariant = variants[Math.floor(Math.random() * variants.length)];
    const randomBgColors =
      bgColors[Math.floor(Math.random() * bgColors.length)];
    const randomHoverColor =
      bgColors[Math.floor(Math.random() * bgColors.length)];

    const randomTextButton =
      TextsDensut[Math.floor(Math.random() * TextsDensut.length)];

    setVariants(randomVariant);
    setSizeButton(randomSize);
    setBgColors(randomBgColors);
    setHoverColor(randomHoverColor);
    setTextButton(randomTextButton);
  }, []);

  return (
    <ButtonModal
      bgColors={bgColors}
      hoverColor={hoverColor}
      sizeButton={sizeButton}
      variants={variants}
      textButton={textButton}
      key={"buttonTest"}
    />
  );
};
