const Dashboard: React.FC = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <SidePanel />
        <MainContent />
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Collection</h1>
    </header>
  );
};

const SidePanel: React.FC = () => {
  return (
    <aside>
      <button>Add Item</button>
    </aside>
  );
};

const MainContent: React.FC = () => {
  return (
    <>
      <h2>Items</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  );
};

export default Dashboard;
