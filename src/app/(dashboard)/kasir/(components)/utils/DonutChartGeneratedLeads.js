'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))
const series = [32, 41, 41]

const DonutChartGeneratedLeads = ({ serverMode }) => {
  // Hook
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode

  // Vars
  const textSecondary = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.7)`)
  const successColor = theme.palette.success.main

  const options = {
    colors: [
      successColor,
      rgbaToHex(`rgb(${theme.palette.success.mainChannel} / 0.7)`),
      rgbaToHex(`rgb(${theme.palette.success.mainChannel} / 0.5)`),
      rgbaToHex(`rgb(${theme.palette.success.mainChannel} / 0.16)`)
    ],
    stroke: { width: 0 },
    legend: { show: false },
    tooltip: { theme: 'false' },
    dataLabels: { enabled: false },
    labels: ['INCP', 'INCV', 'MANUAL'],
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
        bottom: -18,
        right: 15
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
    }
  }

  return (
    <Card className='overflow-visible'>
      <CardContent className='flex justify-between gap-4'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col'>
            <Typography variant='h5'> Penerimaan Jenis Nota</Typography>
            <Typography>Perbulan</Typography>
          </div>
          <div className='flex flex-col items-start'>
            <Typography variant='h3'>4,350</Typography>
            <div className='flex items-center gap-1'>
              <i className='tabler-chevron-up text-success text-xl'></i>
              <Typography color='success.main' component='span'>
                +15.8%
              </Typography>
            </div>
          </div>
        </div>
        <AppReactApexCharts type='donut' width={165} height={170} series={series} options={options} />
      </CardContent>
    </Card>
  )
}

export default DonutChartGeneratedLeads
