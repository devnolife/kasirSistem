'use client'
import dynamic from 'next/dynamic'
import Card from '@mui/material/Card'
import { useColorScheme, useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))
const donutColors = {
  series1: '#fdd835',
  series2: '#00d4bd',
  series3: '#826bf8'
}

const PieChart = ({ serverMode }) => {
  const theme = useTheme()
  const { mode } = useColorScheme()
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode
  const textSecondary = `rgba(${theme.palette.text.secondary})`
  const options = {
    stroke: { width: 0 },
    labels: ['INCP', 'INVC', 'Manual'],
    colors: [donutColors.series1, donutColors.series2, donutColors.series3],
    dataLabels: {
      enabled: true,
      formatter: val => `${parseInt(val, 10)}%`
    },
    legend: {
      fontSize: '13px',
      position: 'bottom',
      markers: {
        offsetX: theme.direction === 'rtl' ? 7 : -4
      },
      labels: { colors: textSecondary },
      itemMargin: {
        horizontal: 9
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '1.2rem'
            },
            value: {
              fontSize: '1.2rem',
              color: textSecondary,
              formatter: val => `${parseInt(val, 10)}`
            },
            total: {
              show: true,
              fontSize: '1.2rem',
              label: 'Total',
              formatter: () => `${parseInt(80)}%`,
              color: `rgba(${theme.palette.text.primary})`
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380
          },
          legend: {
            position: 'bottom'
          }
        }
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1rem'
                  },
                  value: {
                    fontSize: '1rem'
                  },
                  total: {
                    fontSize: '1rem'
                  }
                }
              }
            }
          }
        }
      }
    ]
  }
  return (
    <Card>
      <CardHeader title='Distribusi Penerimaan Kasir per Jenis Nota' subheader='Proporsi penerimaan kasir' />
      <CardContent>
        <AppReactApexCharts type='donut' width='100%' height={400} options={options} series={[100000, 150000, 200000]} />
      </CardContent>
    </Card>
  )
}

export default PieChart
