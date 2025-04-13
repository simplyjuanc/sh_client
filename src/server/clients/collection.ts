import { Item } from "../../models/Item";




export const getPersonalCollection = async (userId: string): Promise<Item[]> => {
  console.log({ 'getPersonalCollection called with userId': userId });
  return await new Promise((resolve) => resolve([
    {
      id: 'default-id',
      condition: 'MINT',
      ownerId: 'some-owner-id',
      notes: '',
      price: { amount: 25.0, currency: 'GBP' },
      releaseId: 'default-release-id',
      format: 'VINYL',
    },
  ]));
};