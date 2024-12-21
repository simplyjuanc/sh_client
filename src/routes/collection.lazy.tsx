import { createLazyFileRoute } from '@tanstack/react-router';
import CollectionComponent from '../pages/collection/Collection';

export const Route = createLazyFileRoute('/collection')({
  component: Collection,
});

function Collection() {
  return <CollectionComponent />;
}
