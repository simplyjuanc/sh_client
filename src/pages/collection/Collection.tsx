import { useQuery } from '@tanstack/react-query';
import Toggle from '../../ui/toggle';
import { MainContent } from './MainContent';
import { SidePanel } from './SidePanel';
import { getPersonalCollection } from '../../server/clients/collection';

const Collection: React.FC = () => {
  // Filtering functionality should live here
  // That with the search bar at the side panel
  // We also need to fetch the data
  // Meaning we need to add some URL stateme management
  // (TanStack) useSearchParams hook
  const userId = '5';

  const {
    data: items,
    error,
    isPending,
  } = useQuery({
    queryKey: ['collection', userId],
    queryFn: () => getPersonalCollection(userId),
  });

  if (error) {
    return <div>Something went wrong</div>;
  }
  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <SidePanel />
      <MainContent />
      {items.length > 0 && (
        <Toggle
          children={<div>Change view</div>}
          onPressedChange={() => {
            // TODO: Implement the toggle functionality
          }}
        />
      )}
    </div>
  );
};

export default Collection;
