import Collection from './Collection';
import { MainContent } from './MainContent';
import { wrapper } from '../../shared/utils/tanstackQueryUtils';
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { useGetUserCollection } from '../../shared/hooks/useGetUserCollection';
import { generateItem } from '../../shared/testutils/objectGenerators';

vi.mock('../../shared/hooks/useGetUserCollection');

describe('Collection', () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test(`should render a side panel and a main content area`, () => {
    vi.mocked(useGetUserCollection, { partial: true }).mockReturnValue({
      data: [],
      isSuccess: true,
      isPending: false,
      error: null,
    });
    render(wrapper({ children: <Collection /> }));

    const sidePanel = screen.queryByRole('complementary');
    const mainContent = screen.queryByText(/items/i);
    console.log({ sidePanel, mainContent });

    expect(sidePanel).toBeVisible();
    expect(mainContent).toBeVisible();
  });

  test('should not show the view toggle button when there are no items in the collection', async () => {
    vi.mocked(useGetUserCollection, { partial: true }).mockReturnValue({
      data: [],
      isSuccess: true,
      isPending: false,
      error: null,
    });

    render(wrapper({ children: <Collection /> }));

    const viewToggleBtn = screen.queryByText(/change view/i);
    expect(viewToggleBtn).toBeNull();
  });


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
