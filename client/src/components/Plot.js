import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import styles from './Plot.module.css';

function Plot({ data }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    animations: false,
    responsive: true,
    showLine: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
        },
      },
      title: {
        display: true,
        text: 'Data Plot',
        color: 'white',
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgb(80, 80, 80)',
          borderDash: [5, 10],
          borderColor: 'white',
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgb(80, 80, 80)',
          borderColor: 'white',
          borderDash: [5, 10],
        },
      },
    },
  };
  console.log(data.datasets[0].data);
  if (data !== undefined && data.datasets[0].data.length !== 0) {
    console.log('scatter');
    return <Scatter className={styles.main} options={options} data={data} />;
  }
  return <div></div>;
}

export default Plot;
