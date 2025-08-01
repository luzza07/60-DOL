import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <>
      <Box
        _hover={{
          transform: "scale(1.03)",
          transition: "transform .15 ease-in",
        }}
        width="100%"
        borderRadius={10}
        overflow="hidden"
      >
        {children}
      </Box>
    </>
  );
};

export default GameCardContainer;
