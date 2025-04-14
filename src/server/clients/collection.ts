import { Item } from "../../models/Item";




export const getPersonalCollection = async (userId: string): Promise<Item[]> => {
  console.log({ 'getPersonalCollection called with userId': userId });
  return await new Promise((resolve) => resolve([
    {
      id: 'default-id',
      title: 'example-title',
      condition: 'MINT',
      artists: ["test-artist-1", "test-artist-2"],
      ownerId: 'some-owner-id',
      notes: 'some-dummy-notes',
      price: { amount: 25.0, currency: 'GBP' },
      format: 'VINYL',
      coverUrl: "https://cdn-images.dzcdn.net/images/cover/c4993158ddf60a7df2b7c8ca495854ba/0x1900-000000-80-0-0.jpg"
    },
  ]));
};