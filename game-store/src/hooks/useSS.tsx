import { useQuery } from "@tanstack/react-query";
import APICLIENT from "../services/api-client";
import type  Screenshot  from "../entities/SS";

const useSS = (gameId: number) => {
  const apiClient = new APICLIENT<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useSS;
