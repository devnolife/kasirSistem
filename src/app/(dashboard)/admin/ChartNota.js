'use client'
import dynamic from 'next/dynamic'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useColorScheme, useTheme } from '@mui/material/styles'
import { rgbaToHex } from '@/utils/rgbaToHex'
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))
const series = [32, 41, 41]

const ChartNota = ({ serverMode }) => {
  // Hook
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode

  // Vars
  const textSecondary = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.7)`)
  const successColor = theme.palette.info.main

  const options = {
    colors: [
      theme.palette.info.main,
      rgbaToHex(`rgb(${theme.palette.info.mainChannel} / 0.7)`),
      rgbaToHex(`rgb(${theme.palette.info.mainChannel} / 0.5)`),
      rgbaToHex(`rgb(${theme.palette.info.mainChannel} / 0.16)`)
    ],
    stroke: { width: 0 },
    legend: { show: false },
    tooltip: { enabled: true, theme: 'false' },
    dataLabels: { enabled: false },
    labels: ['INCP', 'INVC', 'Manual'],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      padding: {
        top: -22,
        bottom: -18
      }
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        expandOnClick: false,
        donut: {
          size: '73%',
          labels: {
            show: true,
            name: {
              offsetY: 25,
              color: textSecondary,
              fontFamily: theme.typography.fontFamily
            },
            value: {
              offsetY: -15,
              fontWeight: 500,
              formatter: val => `${val}`,
              color: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.9)`),
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.h3.fontSize
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total',
              color: successColor,
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.body1.fontSize
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        options: {
          chart: { width: 200, height: 237 }
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          chart: { width: 150, height: 199 }
        }
      }
    ]
  }

  return (
    <Card className='overflow-visible'>
      <CardContent className='flex justify-between gap-4'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col'>
            <Typography variant='h5'>Jenis Nota</Typography>
            <Typography>Laporan Bulanan</Typography>
          </div>
          <div className='flex flex-col items-start'>
            <Typography variant='h3'>4,350 Total</Typography>
            <div className='flex items-center gap-1'>
              <i className='text-xl tabler-chevron-up text-success'></i>
              <Typography color='success.main' component='span'>
                +15.8%
              </Typography>
            </div>
          </div>
        </div>
        <AppReactApexCharts type='donut' width={150} height={200} series={series} options={options} />
      </CardContent>
    </Card>
  )
}

export default ChartNota
