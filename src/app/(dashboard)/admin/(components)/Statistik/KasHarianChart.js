'use client'

// Next Imports
import dynamic from 'next/dynamic'


// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import Chip from '@mui/material/Chip'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Third Party Imports
import classnames from 'classnames'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const KasHarianChart = ({ serverMode }) => {
  const theme = useTheme()
  const { mode } = useColorScheme()
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode
  const primaryColorWithOpacity = rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 0.16)`)

  // Data fake untuk penerimaan dan pengeluaran kas harian
  const series = [
    { name: 'Penerimaan', data: [100, 200, 150, 300, 400, 250, 350] },
    { name: 'Pengeluaran', data: [50, 100, 75, 150, 200, 125, 175] }
  ]

  const data = [
    {
      title: 'Penerimaan',
      progress: 75,
      stats: 'Rp.1.400',
      progressColor: 'primary',
      avatarColor: 'primary',
      avatarIcon: 'tabler-currency-dollar'
    },
    {
      title: 'Pengeluaran',
      progress: 50,
      stats: 'Rp.800',
      progressColor: 'error',
      avatarColor: 'error',
      avatarIcon: 'tabler-brand-paypal'
    },
    {
      title: 'Total Kas',
      progress: 60,
      stats: 'Rp.600',
      progressColor: 'info',
      avatarColor: 'info',
      avatarIcon: 'tabler-chart-pie-2'
    }
  ]

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    tooltip: { enabled: false },
    grid: {
      show: false,
      padding: {
        top: -31,
        left: 0,
        right: 0,
        bottom: -9
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        distributed: true,
        columnWidth: '42%'
      }
    },
    legend: { show: true },
    dataLabels: { enabled: false },
    colors: [
      rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 0.9)`),
      rgbaToHex(`rgb(${theme.palette.error.mainChannel} / 0.9)`)
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      axisTicks: { show: false },
      axisBorder: { show: false },
      labels: {
        style: {
          fontSize: '13px',
          colors: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`)
        }
      }
    },
    yaxis: { show: false }
  }

  return (
    <Card>
      <CardHeader
        title='Laporan Kas Harian'
        subheader='Penerimaan dan Pengeluaran'
        action={<OptionMenu options={['Minggu Ini', 'Bulan Ini', 'Tahun Ini']} />}
        className='pbe-0'
      />
      <CardContent className='flex flex-col gap-5 max-md:gap-5 max-[1015px]:gap-[62px] max-[1051px]:gap-10 max-[1200px]:gap-5 max-[1310px]:gap-10'>
        <div className='flex flex-col items-center justify-between gap-8 sm:flex-row'>
          <div className='flex flex-col gap-3 is-full sm:is-[unset]'>
            <div className='flex items-center gap-2.5'>
              <Typography variant='h2'>Rp1.400</Typography>
              <Chip size='small' variant='tonal' color='success' label='+4.2%' />
            </div>
            <Typography variant='body2' className='text-balance'>
              Penerimaan kas minggu ini dibandingkan minggu lalu
            </Typography>
          </div>
          <AppReactApexCharts type='bar' height={163} width='100%' series={series} options={options} />
        </div>
        <div className='flex flex-col gap-6 p-5 border rounded sm:flex-row'>
          {data.map((item, index) => (
            <div key={index} className='flex flex-col gap-2 is-full'>
              <div className='flex items-center gap-2'>
                <CustomAvatar skin='light' variant='rounded' color={item.avatarColor} size={26}>
                  <i className={classnames(item.avatarIcon, 'text-lg')} />
                </CustomAvatar>
                <Typography variant='h6' className='font-normal leading-6'>
                  {item.title}
                </Typography>
              </div>
              <Typography variant='h4'>{item.stats}</Typography>
              <LinearProgress
                value={item.progress}
                variant='determinate'
                color={item.progressColor}
                className='max-bs-1'
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default KasHarianChart
