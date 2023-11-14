import LnbRight from './LnbRight';

interface LnbProps {
  onClick?: () => void;
}

const Lnb: React.FC<LnbProps> = ({ onClick }) => {
  return (
    <div className="Lnb">
      <form action="" className="Lnb-form">
        <input type="text" className="Lnb-search-input" />
      </form>
      <LnbRight onClick={onClick} />
    </div>
  );
};

export default Lnb;
