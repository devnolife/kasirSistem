'use client'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import MuiTimeline from '@mui/lab/Timeline'
import CustomAvatar from '@core/components/mui/Avatar'

const Timeline = styled(MuiTimeline)({
  '& .MuiTimelineItem-root': {
    '&:before': {
      display: 'none'
    }
  }
})

const ActivityTimeline = () => {
  return (
    <Card>
      <CardHeader
        title='Timeline Pengeluaran Kas'
        avatar={<i className='tabler-currency-dollar text-textSecondary' />}
        titleTypographyProps={{ variant: 'h5' }}
      />
      <CardContent>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4 pbe-[7px]'>
                <Typography className='font-medium text-textPrimary'>Pengeluaran oleh Admin</Typography>
                <Typography variant='caption'>12 menit yang lalu</Typography>
              </div>
              <Typography className='mbe-2'>Dana sebesar Rp1.000.000 telah dikeluarkan untuk pembelian perlengkapan kantor.</Typography>
              <div className='flex'>
                <div className='flex gap-2.5 items-center pli-2.5 bg-actionHover plb-[0.3125rem] rounded'>
                  <Typography className='font-medium'>invoice.pdf</Typography>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='success' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4 pbe-[7px]'>
                <Typography className='font-medium text-textPrimary'>Pengeluaran oleh Kasir</Typography>
                <Typography variant='caption'>45 menit yang lalu</Typography>
              </div>
              <Typography className='mbe-2'>Dana sebesar Rp500.000 telah dikeluarkan untuk pembayaran listrik.</Typography>
              <div className='flex items-center gap-2.5'>
                <CustomAvatar src='/images/avatars/1.png' size={32} />
                <div>
                  <Typography className='font-medium' variant='body2'>
                    John Doe (Kasir)
                  </Typography>
                  <Typography variant='body2'>Finance Department</Typography>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='info' />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex items-center justify-between flex-wrap gap-x-4 pbe-[7px]'>
                <Typography className='font-medium text-textPrimary'>Pengeluaran oleh Supervisor</Typography>
                <Typography variant='caption'>2 hari yang lalu</Typography>
              </div>
              <Typography className='mbe-2'>Dana sebesar Rp300.000 telah dikeluarkan untuk biaya operasional harian.</Typography>
              <div className='flex items-center gap-2.5'>
                <CustomAvatar src='/images/avatars/2.png' size={32} />
                <div>
                  <Typography className='font-medium' variant='body2'>
                    Jane Smith (Supervisor)
                  </Typography>
                  <Typography variant='body2'>Operations Department</Typography>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default ActivityTimeline
