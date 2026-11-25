import useGames from "@/hooks/usegames";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, Error } = useGames();

  return (
    <>
      {Error && <Text>{Error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
