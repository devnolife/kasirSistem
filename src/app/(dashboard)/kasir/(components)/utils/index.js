// MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

// Component Imports

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'
import CardStatsVertical from '@/app/(dashboard)/kasir/(components)/utils/Vertical'
import BarChartRevenueGrowth from '@/app/(dashboard)/kasir/(components)/utils/BarChartRevenueGrowth'
import DonutChartGeneratedLeads from '@/app/(dashboard)/kasir/(components)/utils/DonutChartGeneratedLeads'

const DashboardCRM = () => {
  // Vars
  const serverMode = getServerMode()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={2}>
          <CardStatsVertical
            title='Pengeluaran'
            subtitle='Perhari'
            stats='60.28k'
            avatarColor='error'
            avatarIcon='tabler-currency-dollar'
            avatarSkin='light'
            avatarSize={44}
            avatarIconSize={28}
            chipText='-12.2%'
            chipColor='error'
            chipVariant='tonal'
          />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
          <CardStatsVertical
            title='Pemasukan'
            subtitle='Perhari'
            stats='240.67k'
            avatarColor='success'
            avatarIcon='tabler-currency-dollar'
            avatarSkin='light'
            avatarSize={44}
            avatarIconSize={28}
            chipText='+24.67%'
            chipColor='success'
            chipVariant='tonal'
          />
      </Grid>
      <Grid item xs={12} md={8} lg={4}>
        <Box display="flex" height="100%">
          <BarChartRevenueGrowth serverMode={serverMode} />
        </Box>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Box display="flex" height="100%">
          <DonutChartGeneratedLeads serverMode={serverMode} />
        </Box>
      </Grid>
    </Grid>
  )
}

export default DashboardCRM
