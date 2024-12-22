import { Item } from "../../models/Item";

export const generateItem = (overrides: Partial<Item> = {}): Item => {
  return {
    id: 'default-id',
    condition: 'MINT',
    ownerId: 'some-owner-id',
    notes: '',
    price: { amount: 25.00, currency: 'GBP' },
    releaseId: 'default-release-id',
    format: 'VINYL',
    ...overrides,
  };
};
