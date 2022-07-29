import { FC } from 'react';

interface ErrorProps {
  error: string;
}

export const Error: FC<ErrorProps> = ({ error }) => {
  return <p className="text-center font-bold text-red-600">{error}</p>;
};
