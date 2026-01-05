import { topics } from '@/utils/data/Topics';
import FeadContent from '@/components/itemsPublicFeed/FeadContent'; 

const Fead = () => {
  return (
    <main className="px-6 py-6">
      <FeadContent topics={topics} />
    </main>
  );
};

export default Fead;