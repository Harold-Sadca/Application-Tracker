'use client';

import Applications from '../applications/page';
import Archives from '../archives/page';
import Interviews from '../interviews/page';

export default function Dashboard() {
  return (
    <main>
      <div className='main-body'>
        <h1 className='header'>Dashboard</h1>
        <div>
          <Interviews />
          <Applications />
          <Archives />
        </div>
      </div>
    </main>
  );
}
