import React from 'react';
import Layout from './Layout';
import Collection from './Collection';
import { useGetUserCollection } from '../../shared/hooks/useGetUserCollection';

const CollectionPage: React.FC = () => {
  const userId = '1234';
  const { isPending, error, data: items } = useGetUserCollection(userId);
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log({ items });
  return (
    <Layout>
      <Collection view={'grid'} />
    </Layout>
  );
};

export default CollectionPage;
