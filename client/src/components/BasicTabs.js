import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Plot from './Plot';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [data, setData] = useState([]);

  const plotData = {
    datasets: [
      {
        label: 'Sample Data',
        data: data.slice(0, 50).map((item) => ({
          x: item.x,
          y: item.y,
        })),
        borderColor: 'rgb(3, 252, 11)',
        backgroundColor: 'rgb(3, 252, 11)',
        tension: 0.1,
        borderWidth: 1,
        elements: {
          point: {
            radius: 0,
          },
        },
      },
    ],
  };

  useEffect(() => {
    async function getData() {
      const res = await fetch('http://localhost:5000/api/data');
      const data = await res.json();
      setData(data);
    }
    getData();
  }, []);

  const [data1, setData1] = useState([]);

  const plotData1 = {
    datasets: [
      {
        label: 'Sample Data',
        data: data1.slice(0, 50).map((item) => ({
          x: item.x,
          y: item.y,
        })),
        borderColor: 'rgb(3, 252, 11)',
        backgroundColor: 'rgb(3, 252, 11)',
        tension: 0.1,
        borderWidth: 1,
        elements: {
          point: {
            radius: 0,
          },
        },
      },
    ],
  };

  useEffect(() => {
    async function getData1() {
      const res = await fetch('http://localhost:5000/api/data1');
      const data = await res.json();
      setData1(data);
    }
    getData1();
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Item One' {...a11yProps(0)} />
          <Tab label='Item Two' {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Plot data={plotData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Plot data={plotData1}/>
      </TabPanel>
    </Box>
  );
}
