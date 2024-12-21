import { createLazyFileRoute } from '@tanstack/react-router';
import Dashboard from '../pages/collection/Dashboard';

export const Route = createLazyFileRoute('/collection')({
  component: Collection,
});

function Collection() {
  return <Dashboard />;
}
