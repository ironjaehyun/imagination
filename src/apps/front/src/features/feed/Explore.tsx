import Lnb from './components/Lnb';
import BigGnb from './components/BigGnb';
import FeedLayout from './components/FeedLayout';
const Explore = () => {
  return (
    <div>
      <main>
        <Lnb />
        <FeedLayout />
      </main>
      <BigGnb />
    </div>
  );
};

export default Explore;
