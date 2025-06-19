import useSS from "../hooks/useSS";
import { Image, SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useSS(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <>
    <Text fontSize={50}>Screenshots</Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {data?.results.map((file) => (
          <Image key={file.id} src={file.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
