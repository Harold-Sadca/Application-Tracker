'use client';

import Applications from '../applications/page';
import Archives from '../archives/page';
import Interviews from '../interviews/page';
import '../../(components)/(css)/dashboard.css';
import { useParams } from 'next/navigation';

export default function Dashboard() {
  const params = useParams();

  return (
    <main>
      <div className='main-body'>
        <div className='dashboard-body'>
          <Interviews />
          <Applications />
          <Archives />
        </div>
      </div>
    </main>
  );
}
