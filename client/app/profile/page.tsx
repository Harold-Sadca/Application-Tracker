'use client';

import { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import { loginUser } from '@/redux/features/currentUserSlice';
import { RootState } from '@/redux/store';
import { getUser } from '@/utils/APIservices';
import { useDispatch, useSelector } from 'react-redux';
import { TypeApplicationResponse } from '@/utils/types';
import '../../(components)/(css)/profile.css';
import { getComputedStyleValue } from '@/utils/utils';
Chart.register(ArcElement);

export default function Profile() {
  const currentUser = useSelector(
    (state: RootState) => state.currentUserReducer.value
  );
  const [rejected, setRejected] = useState<TypeApplicationResponse[]>([]);
  const [interviewing, setInterviewing] = useState<TypeApplicationResponse[]>(
    []
  );
  const [noResponse, setNoResponse] = useState<TypeApplicationResponse[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser.username) {
      getUser().then((res) => {
        dispatch(loginUser(res));
        res.applications.map((app: TypeApplicationResponse) => {
          if (app.status == 'Rejected') {
            setRejected((prevVal) => [...prevVal, app]);
          } else if (app.nextInterview) {
            setInterviewing((prevVal) => [...prevVal, app]);
          } else {
            setNoResponse((prevVal) => [...prevVal, app]);
          }
        });
      });
    }
  }, [currentUser]);

  const data = {
    labels: ['Interviewing', 'Rejected', 'No Response'],
    datasets: [
      {
        data: [interviewing.length, rejected.length, noResponse.length],
        backgroundColor: [
          getComputedStyleValue('--success-colour'),
          getComputedStyleValue('--warning-colour'),
          getComputedStyleValue('--error-colour'),
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: 'white',
          font: {
            size: 18,
          },
          generateLabels: function (chart: any) {
            return chart.data.labels.map((label: any, i: any) => ({
              text: label,
              fillStyle: chart.data.datasets[0].backgroundColor[i],
              hidden: false,
              index: i,
            }));
          },
        },
      },
    },
  };

  return (
    <>
      <section className='main-body'>
        <h1 className='header'>Hello, {currentUser.username}</h1>
        <div className='stat-container'>
          <h4>Applications Statistics</h4>
          <div className='charts-container'>
            <PieChart
              data={[
                {
                  title: 'Interviewing',
                  value: interviewing.length,
                  color: 'var(--success-colour)',
                },
                {
                  title: 'Rejected',
                  value: rejected.length,
                  color: 'var(--warning-colour)',
                },
                {
                  title: 'No Response',
                  value: noResponse.length,
                  color: 'var(--error-colour)',
                },
              ]}
              animate={true}
              label={({ dataEntry }) =>
                `${dataEntry.title}: ${dataEntry.value}`
              }
              labelStyle={{
                fontSize: '5px',
                fill: 'var(--text-colour)',
              }}
            />
            <Doughnut data={data} options={options} />
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}
