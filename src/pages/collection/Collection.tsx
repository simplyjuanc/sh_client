import { Item } from '../../models/Item';
import Toggle from '../../ui/toggle';
import { MainContent } from './MainContent';
import { SidePanel } from './SidePanel';

const Collection: React.FC = () => {
  // Filtering functionality should live here
  // That with the search bar at the side panel
  // We also need to fetch the data
  // Meaning we need to add some URL stateme management
  // (TanStack) useSearchParams hook

  // const items =
  const items: Item[] = [
    {
      id: 'default-id',
      condition: 'MINT',
      ownerId: 'some-owner-id',
      notes: '',
      price: { amount: 25.0, currency: 'GBP' },
      releaseId: 'default-release-id',
      format: 'VINYL',
    },
  ];

  return (
    <div className='container'>
      <SidePanel />
      <MainContent />
      {items.length > 0 && <Toggle children={<SidePanel />} />}
    </div>
  );
};

export default Collection;
