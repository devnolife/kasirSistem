'use client'
import dynamic from 'next/dynamic'
import Card from '@mui/material/Card'
import { useColorScheme, useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
const AppReactApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false })
const BarChartPenerimaanKas = ({ serverMode }) => {
  const theme = useTheme()
  const { mode } = useColorScheme()
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode
  const textSecondary = `rgba(${theme.palette.text.secondary})`
  const data = [
    { seller: 'Siska', amount: 100000 },
    { seller: 'Angel', amount: 150000 },
    { seller: 'Muli', amount: 200000 },
  ];

  const chartOptions = {
    chart: {
      id: 'penerimaan-kas-chart',
      type: 'bar',
    },
    xaxis: {
      categories: data.map(item => item.seller),
    },
    plotOptions: {
      bar: {
        horizontal: false,
      }
    },
    colors: ['#00d4bd'],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1
    },
    legend: {
      labels: { colors: textSecondary },
      itemMargin: {
        horizontal: 9
      }
    }
  };

  const chartData = [
    {
      name: 'Jumlah Uang',
      data: data.map(item => item.amount),
    },
  ];

  return (
    <Card>
      <CardHeader title='Penerimaan Kas per Penjual' subheader='Jumlah penerimaan kas dari setiap penjual' />
      <CardContent>
        <AppReactApexCharts type='bar' width='100%' height={400} options={chartOptions} series={chartData} />
      </CardContent>
    </Card>
  );
}

export default BarChartPenerimaanKas;
