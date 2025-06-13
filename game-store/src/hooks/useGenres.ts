import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APICLIENT from "../services/api-client";
import genres from "../data/genres";

const apiClient = new APICLIENT<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
export default useGenres;
