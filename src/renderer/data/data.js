import { useEffect, useState, useContext } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

import supabase from 'renderer/supabase';

import Nav from 'renderer/nav';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { SupabaseContext } from '../SupabaseContext';
import Loader from 'renderer/loader';
import './style.scss';

function Data() {
  const { session, updateSession } = useContext(SupabaseContext);
  const [memberData, setMemberData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [memberCount, setMemberCount] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);
  const [inactiveCount, setInactiveCount] = useState(0);

  useEffect(() => {
    async function getAllMembers() {
      setIsLoading(true);
      const { data: members, error } = await supabase
        .from('membervis')
        .select('*', { count: 'exact' })
        .eq('type', 'Member');

      const { data: visitors, verror } = await supabase
        .from('membervis')
        .select('*', { count: 'exact' })
        .eq('type', 'Visitor');

      const { data: active, active_error } = await supabase
        .from('membervis')
        .select('*', { count: 'exact' })
        .eq('status', 'Active');

      const { data: inactive, inactive_error } = await supabase
        .from('membervis')
        .select('*', { count: 'exact' })
        .eq('status', 'Inactive');

      setIsLoading(false);
      setMemberCount(members.length);
      setVisitorCount(visitors.length);
      setActiveCount(active.length);
      setInactiveCount(inactive.length);
    }
    getAllMembers();
  }, []);

  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const doughnutData = {
    labels: ['Members', 'Visitors'],
    datasets: [
      {
        label: 'Count: ',
        data: [memberCount, visitorCount],
        backgroundColor: ['#ff8080', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const activeStatusData = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        label: 'Member Status Count',
        data: [activeCount, inactiveCount],
        backgroundColor: ['rgba(253, 203, 110,0.7)', 'rgba(196, 196, 196,0.7)'],
        // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <div
          className="chart-container"
          style={{
            // border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: 'white',
          }}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <div className="d-flex justify-content-between">
              <Doughnut data={doughnutData} />
              <div className="p-3">
                <small>Members</small>
                <h2>{memberCount}</h2>
                <hr />
                <small>Visitors</small>
                <h2>{visitorCount}</h2>
              </div>
            </div>
          )}
        </div>

        <div
          className="weekly_visits"
          style={{
            // border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: 'white',
          }}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <div>
              <h5>Weekly Visitors</h5>
              <h1 className="h1-values">10</h1>
            </div>
          )}
        </div>
      </div>

      <div className="d-flex justify-content-between mb-4">
        <div
          className="weekly_visits"
          style={{
            // border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: 'white',
          }}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <div>
              <h5>Weekly Visitors</h5>
              <h1 className="h1-values">0</h1>
            </div>
          )}
        </div>

        <div
          className="weekly_visits"
          style={{
            // border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: 'white',
          }}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <div>
              <h5>Weekly Visitors</h5>
              <h1 className="h1-values">0</h1>
            </div>
          )}
        </div>

        <div
          className="weekly_visits"
          style={{
            // border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: 'white',
          }}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <div>
              <h5>Weekly Visitors</h5>
              <h1 className="h1-values">0</h1>
            </div>
          )}
        </div>
      </div>

      <div className="d-flex justify-content-between mb-4">
        <div
          className="chart-container-second"
          style={{
            // border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: 'white',
          }}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <div className="d-flex justify-content-around">
              <Bar data={activeStatusData} />
              <div className="p-3">
                <small>Active</small>
                <h2>{activeCount}</h2>
                <hr />
                <small>Inactive</small>
                <h2>{inactiveCount}</h2>
              </div>
            </div>
          )}
        </div>

        <div
          className="weekly_visits"
          style={{
            // border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: 'white',
          }}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <div>
              <h5>Weekly Attendance</h5>
              <h1 className="h1-values">0</h1>
            </div>
          )}
        </div>

        <div
          className="weekly_visits"
          style={{
            // border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: 'white',
          }}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <div>
              <h5>Average Weekly Baptisms</h5>
              <h1 className="h1-values">10</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Data;
