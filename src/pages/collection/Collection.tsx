import Toggle from '../../shared/ui/toggle';
import { MainContent } from './MainContent';
import { SidePanel } from './SidePanel';
import { useGetUserCollection } from '../../shared/hooks/useGetUserCollection';

const Collection: React.FC = () => {
  const userId = '1234';

  const { isPending, error, data: items } = useGetUserCollection(userId);
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Filtering functionality should live here
  // That with the search bar at the side panel
  // We also need to fetch the data
  // Meaning we need to add some URL stateme management
  // (TanStack) useSearchParams hook
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
