import { useQuery } from "@tanstack/react-query";
import { getPersonalCollection } from "../../server/clients/collection";

export function useGetUserCollection(userId: string) {
  return useQuery({
    queryKey: ['collection', userId],
    queryFn: () => getPersonalCollection(userId),
  });
}
