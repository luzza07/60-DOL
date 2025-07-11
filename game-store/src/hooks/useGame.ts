import { useQuery } from "@tanstack/react-query";
import APICLIENT from "../services/api-client";
import type  Game  from "../entities/Game";

const apiClient = new APICLIENT<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
