import { useQuery } from "@tanstack/react-query";

import APICLIENT from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";
import type  Platform  from "../entities/Platform";

const apiClient = new APICLIENT<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
