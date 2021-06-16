import { Bar } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
} from '@material-ui/core';

const Sales = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: '#2b5784',
        data: [50, 30, 25, 65, 80],
        label: 'Porcentaje Completado'
      },
    ],
    labels: ['Emprendimiento', 'Algebra Lineal', 'Proyecto de Grado 1', 'Gerencia de Proyecto Informaticos', 'Programacion Web']
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 15,
          maxBarThickness: 100,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card {...props}>
      <CardHeader
        title="Progreso de Materias"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 546,
            position: 'relative'
          }}
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Sales;
