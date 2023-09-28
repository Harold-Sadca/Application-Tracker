import React from 'react';
import { TypeApplicationResponse } from '@/utils/types';
import { TypeInterview } from '../../../server/types/types';
import { formatDate } from '@/utils/utils';

interface InterviewApplicationItemProps {
  item: TypeApplicationResponse;
  secondItem: string | null;
  onItemClick: (item: TypeApplicationResponse) => void;
}

const InterviewApplicationItem: React.FC<InterviewApplicationItemProps> = ({
  item,
  secondItem,
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
      <p>{secondItem ? formatDate(secondItem) : item.status}</p>
    </div>
  );
};

export default InterviewApplicationItem;
