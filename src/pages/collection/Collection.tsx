import { MainContent } from './MainContent';
import { SidePanel } from './SidePanel';

const Collection: React.FC = () => {
  // Filtering functionality should live here
  // That with the search bar at the side panel
  // We also need to fetch the data
  // Meaning we need to add some URL stateme management
  // (TanStack) useSearchParams hook

  // const items =

  return (
    <div className='container'>
      <SidePanel />
      <MainContent />
    </div>
  );
};

export default Collection;
