import Grid from '@mui/material/Grid'

import InvoiceListTable from './(components)/invoice/list/InvoiceListTable'
import SalesCard from '@/app/(dashboard)/kasir/(components)/utils'

const Kasir = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SalesCard />
      </Grid>
      <Grid item xs={12}>
        <InvoiceListTable />
      </Grid>
    </Grid>
  )
}

export default Kasir
