import './App.css';
import Collection from './pages/collection/Collection';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <Header />
        <Collection />
      </QueryClientProvider>
    </>
  );
}

export default App;
