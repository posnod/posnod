import { topics } from '@/utils/data/Topics';
import FeedContent from '@/components/itemsPublicFeed/FeedContent'; 

const Fead = () => {
  return (
    <main className="px-6 py-6">
      <FeedContent topics={topics} />
    </main>
  );
};

export default Fead;