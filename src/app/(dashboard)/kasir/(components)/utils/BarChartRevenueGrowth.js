'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))
const series = [{ data: [32, 52, 72, 94, 116, 94, 72] }]

const BarChartRevenueGrowth = ({ serverMode }) => {
  // Hook
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode

  // Vars
  const successColorWithOpacity = rgbaToHex(`rgb(${theme.palette.success.mainChannel} / 0.16)`)

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        distributed: true,
        columnWidth: '55%'
      }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [
      successColorWithOpacity,
      successColorWithOpacity,
      successColorWithOpacity,
      successColorWithOpacity,
      theme.palette.success.main,
      successColorWithOpacity,
      successColorWithOpacity
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      show: false,
      padding: {
        top: -15,
        left: 0,
        right: 0,
        bottom: -5
      }
    },
    xaxis: {
      categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: 'on',
      labels: {
        style: {
          colors: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`),
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize
        }
      }
    },
    yaxis: { show: false },
    responsive: [
      {
        breakpoint: 1240,
        options: {
          chart: {
            width: 150
          }
        }
      },
      {
        breakpoint: 1200,
        options: {
          plotOptions: { bar: { columnWidth: '65%' } },
          options: {
            chart: {
              width: 200
            }
          }
        }
      },
      {
        breakpoint: 410,
        options: {
          chart: {
            width: 150
          },
          plotOptions: {
            bar: { columnWidth: '60%' }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardContent className='flex justify-between gap-2'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-y-2'>
            <Typography variant='h5'>Pengeluaran Kas Perhari</Typography>
            <Typography>Weekly Report</Typography>
          </div>
          <div className='flex flex-col items-start gap-y-2'>
            <Typography variant='h3'>Rp.450440</Typography>
            <Chip variant='tonal' size='small' color='success' label='+15.2%' />
          </div>
        </div>
        <AppReactApexCharts type='bar' width={170} height={172} series={series} options={options} />
      </CardContent>
    </Card>
  )
}

export default BarChartRevenueGrowth
