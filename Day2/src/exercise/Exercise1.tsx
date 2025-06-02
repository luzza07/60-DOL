import { useState } from 'react'

const Exercise1 = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
          name: "Ram",
        },
      });
       const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Shyam" } });
  };
  return (
     <>
      <button onClick={handleClick}>Change Name</button>
      <div>Player Name: {game.player.name}</div>
    </>
  )
}

export default Exercise1