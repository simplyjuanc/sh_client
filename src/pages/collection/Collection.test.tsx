import Collection from './Collection';
import { render } from 'vitest-browser-react';
import '@testing-library/jest-dom/vitest';
import { Item } from '../../models/Item';
import { generateItem } from '../../utils/testutils/objectGenerators';

describe('Collection', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it(`should render a side panel and a main content area`, () => {
    const { getByRole } = render(<Collection />);

    const sidePanel = getByRole('complementary');
    const mainContent = getByRole('heading', { name: /item/i });

    expect(sidePanel.element()).toBeInTheDocument();
    expect(mainContent.element()).toBeInTheDocument();
  });

  it.skip(`should retrieve the collection items of the user`, () => {
    const expectedItems: Item[] = Array(5)
      .fill(null)
      .map((_, idx) => {
        return generateItem({ id: idx.toString() });
      });

    const collectionMock = vi.fn().mockResolvedValueOnce(expectedItems);
    vi.mock('../../services/collection', () => ({
      getCollection: collectionMock,
    }));

    const { getByRole } = render(<Collection />);
    const items = getByRole('list');
    console.log({ elements: items.elements() });
    expect(items.elements()).toBeInTheDocument();
  });

  it('should not show the view toggle button when there are no items in the collection', () => {
    const { getByText } = render(<Collection />);
    const viewToggleBtn = getByText(/change view/i);

    if (viewToggleBtn) console.log({ viewToggleBtn });

    expect(viewToggleBtn.query()).toBeNull();
  });

  it.skip('should allow the user to toggle the view between list and grid', () => {});

  it.skip('should allow the user to filter the collection data', () => {});

  it.skip('should keep state accurately with the URL query params', () => {});
});

// describe('Fetch User data', () => {
// it.skip(`should fetch the user's collection data`, () => {
//   // TODO
//   const { getByRole } = render(<Dashboard />);

//   expect(getByRole('listitem').elements().at(0)).toBeInTheDocument();
// });
// it.skip('should handle errors when fetching collection data', () => {
//   // TODO
// });
// });
