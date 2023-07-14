import data from './data.json';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';



const LineChart = () => {
    const values = Object.values(data);
    const labels  = Object.keys(data);
    const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Drogen Toten in München',
        data: values,
        fill: true,
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        x: {
          display: true,
        },
        y: {
          display: true,
        },
    },
    layout: {
        padding: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 30,
        },
    }
  };


  return (
      <Line data={chartData} options={chartOptions} />
  );
};

export default LineChart;



