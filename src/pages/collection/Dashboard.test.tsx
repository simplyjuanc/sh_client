import Dashboard from './Dashboard';
import { render } from 'vitest-browser-react';
import '@testing-library/jest-dom/vitest';

describe('Dashboard', () => {
  it(`should render a side panel and a main content area`, () => {
    const { getByRole } = render(<Dashboard />);
    const sidePanel = getByRole('complementary');
    const mainContent = getByRole('listitem');

    expect(sidePanel.element()).toBeInTheDocument();
    expect(mainContent.elements().at(0)).toBeInTheDocument();
  });

  // it.skip(`should fetch the user's collection data`, () => {
  //   // TODO
  //   const { getByRole } = render(<Dashboard />);

  //   expect(getByRole('listitem').elements().at(0)).toBeInTheDocument();
  // });

  // it.skip('should display the collection data correctly', () => {
  //   // TODO
  // });

  // it.skip('should handle errors when fetching collection data', () => {
  //   // TODO
  // });

  // it.skip('should allow the user to add a new item to the collection', () => {
  //   // TODO
  // });

  // it.skip('should allow the user to remove an item from the collection', () => {
  //   // TODO
  // });

  // it.skip('should update the collection data when an item is edited', () => {
  //   // TODO
  // });
});
