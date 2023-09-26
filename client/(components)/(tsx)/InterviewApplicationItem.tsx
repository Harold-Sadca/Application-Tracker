import React from 'react';
import { TypeApplicationResponse } from '@/utils/types';

interface InterviewApplicationItemProps {
  item: TypeApplicationResponse;
  onItemClick: (item: TypeApplicationResponse) => void;
}

const InterviewApplicationItem: React.FC<InterviewApplicationItemProps> = ({
  item,
  onItemClick,
}) => {
  return (
    <div
      className='application'
      onClick={() => {
        onItemClick(item);
      }}
    >
      <p>{item.company}</p>
      <p>
        {item.status
          ? item.status
          : (item.nextInterview.date as unknown as string)}
      </p>
    </div>
  );
};

export default InterviewApplicationItem;
