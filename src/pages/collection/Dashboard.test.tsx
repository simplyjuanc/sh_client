import Dashboard from './Dashboard';
import { render } from 'vitest-browser-react';
import '@testing-library/jest-dom/vitest';

describe('Dashboard', () => {
  it(`should render a side panel and a main content area`, () => {
    const { getByRole } = render(<Dashboard />);

    const sidePanel = getByRole('complementary');
    const mainContent = getByRole('heading', { name: /item/i });

    expect(sidePanel.element()).toBeInTheDocument();
    expect(mainContent.element()).toBeInTheDocument();
  });

  it.skip('should allow the user to toggle the view between list and grid', () => {});

  it.skip('should not show the view toggle button when there are no items in the collection', () => {});

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
