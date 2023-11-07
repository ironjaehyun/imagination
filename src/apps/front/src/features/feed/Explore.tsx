import Lnb from './components/Lnb';
import BigGnb from './components/BigGnb';
import FeedLayout from './components/FeedLayout';
const Explore = () => {
  return (
    <div>
      <main className="MainContainer">
        <Lnb></Lnb>
        <FeedLayout />
      </main>
      <BigGnb></BigGnb>
    </div>
  );
};

export default Explore;
