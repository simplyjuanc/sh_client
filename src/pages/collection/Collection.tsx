import Toggle from '../../shared/ui/toggle';
import { MainContent } from './MainContent';
import { SidePanel } from './SidePanel';
import { useGetUserCollection } from '../../shared/hooks/useGetUserCollection';
import { useState } from 'react';

const Collection: React.FC = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const toggleView = () => {
    setView((prev) => (prev === 'grid' ? 'list' : 'grid'));
  };

  const userId = '1234';
  const { isPending, error, data: items } = useGetUserCollection(userId);
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Filtering functionality should live here
  // That with the search bar at the side panel
  // We also need to fetch the data
  // Meaning we need to add some URL state management
  // (TanStack) useSearchParams hook
  return (
    <div className='container'>
      <SidePanel />
      <MainContent view={view} />
      {items.length > 0 && (
        <Toggle children={<div>Change view</div>} onPress={toggleView} />
      )}
    </div>
  );
};

export default Collection;
