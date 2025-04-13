export type MainContentProps = {
  view: 'grid' | 'list';
};

export const MainContent: React.FC<MainContentProps> = (
  props: MainContentProps
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
