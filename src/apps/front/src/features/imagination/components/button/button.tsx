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
type SizeButtonProps = {
  size: [number, number];
  onClick: (size: [number, number]) => void;
  selectedSize: [number, number];
};

export const SizeButton: FunctionComponent<SizeButtonProps> = ({
  size,
  onClick,
  selectedSize,
}) => {
  const handleSizeClick = () => onClick(size);
  const selected = size[0] === selectedSize[0] && size[1] === selectedSize[1];

  return (
    <button
      className={`size-btn ${selected ? 'selectedSize' : ''}`}
      type="button"
      onClick={handleSizeClick}
    >
      {`${size[0]} X ${size[1]}`}
    </button>
  );
};
