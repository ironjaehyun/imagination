import { FunctionComponent } from 'react';

type SampleButttonProps = {
  onClick: (num: number) => void;
  value: number;
  selected: boolean;
};

export const SampleButtton: FunctionComponent<SampleButttonProps> = ({
  onClick,
  value,
  selected,
}) => {
  const handleNumberClick = () => onClick(value);
  return (
    <button
      className={`sample-btn ${selected ? 'selected' : ''}`}
      type="button"
      onClick={handleNumberClick}
    >
      {value}
    </button>
  );
};
