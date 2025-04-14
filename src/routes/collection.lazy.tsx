import { createLazyFileRoute } from '@tanstack/react-router';
import CollectionPage from '../pages/collection';

export const Route = createLazyFileRoute('/collection')({
  component: Collection,
});

function Collection() {
  return <CollectionPage />;
}
