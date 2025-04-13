export type CollectionProps = {
  view: 'grid' | 'list';
};

export const Collection: React.FC<CollectionProps> = (
  props: CollectionProps
) => {
  console.log('MainContent', { props });
  return (
    <>
      <h2>Items</h2>
      <section className='items'>
        <div>Item Collection</div>
      </section>
    </>
  );
};
