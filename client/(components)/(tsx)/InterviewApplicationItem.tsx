import React from 'react';
import { TypeApplicationResponse } from '@/utils/types';
import { TypeInterview } from '../../../server/types/types';
import { formatDate } from '@/utils/utils';
import '../(css)/dashboard.css';

interface InterviewApplicationItemProps {
  item: TypeApplicationResponse;
  secondItem: { date: string; time: string } | null;
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
      {secondItem ? (
        <>
          <p>{formatDate(secondItem.date)}</p>
          <p>{secondItem.time}</p>
        </>
      ) : (
        item.status
      )}
    </div>
  );
};

export default InterviewApplicationItem;
