import logo from './logo.svg';
import './App.css';
import Plot from './components/Plot';

import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  const plotData = {
    datasets: [
      {
        label: 'Sample Data',
        data: data.slice(0, 100).map((item) => ({
          x: item.x,
          y: item.y,
        })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  async function getData() {
    const res = await fetch('http://localhost:5000/api/data');
    const data = await res.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='App'>
      <Plot data={plotData} />
    </div>
  );
}

export default App;
