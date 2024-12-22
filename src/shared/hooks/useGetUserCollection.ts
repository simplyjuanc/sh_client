import { useQuery } from "@tanstack/react-query";
import { getPersonalCollection } from "../../server/clients/collection";

export function useGetUserCollection() {
  const userId = '1234';
  return useQuery({
    queryKey: ['collection', userId],
    queryFn: () => getPersonalCollection(userId),
  });
}
