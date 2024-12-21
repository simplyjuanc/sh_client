import { MainContent } from './MainContent';
import { SidePanel } from './SidePanel';

const Dashboard: React.FC = () => {
  return (
    <div className='container'>
      <SidePanel />
      <MainContent />
    </div>
  );
};

export default Dashboard;
