import Collection from './Collection';
import { wrapper } from '../../shared/utils/tanStackQueryUtils';
import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { useGetUserCollection } from '../../shared/hooks/useGetUserCollection';
import { generateItem } from '../../shared/testutils/objectGenerators';
import { act } from 'react';

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

  test('should allow the user to toggle the view between list and grid', () => {
    const mainContentSpy = vi.fn();
    vi.mocked(useGetUserCollection, { partial: true }).mockReturnValue({
      data: [
        generateItem({ id: '1' }),
        generateItem({ id: '2' }),
        generateItem({ id: '3' }),
      ],
      isSuccess: true,
      isPending: false,
      error: null,
    });

    render(wrapper({ children: <Collection /> }));

    const viewToggleBtn = screen.getByText(/change view/i);

    act(() => {
      viewToggleBtn.click();
      viewToggleBtn.click();
    });

    expect(viewToggleBtn).toBeVisible();

    expect(mainContentSpy).toHaveBeenCalledTimes(2);

    expect(mainContentSpy).toHaveBeenCalledWith(
      expect.objectContaining({ view: 'grid' })
    );

    expect(mainContentSpy).toHaveBeenCalledWith(
      expect.objectContaining({ view: 'list' })
    );
  });
  // test.skip('should allow the user to filter the collection data', () => {});

  // test.skip('should keep state accurately with the URL query params', () => {});
});
