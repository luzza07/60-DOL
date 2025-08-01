import { useQuery } from "@tanstack/react-query";
import APICLIENT from "../services/api-client";
import type  Trailer  from "../entities/Trailer";


const useTrailers = (gameId: number) => {
  const apiClient = new APICLIENT<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["tailers", gameId],
    queryFn:apiClient.getAll
  });
};

export default useTrailers
