// pages/kasir/invoice/add.js

'use client'


import Grid from '@mui/material/Grid'


import InvoiceForm from "@/app/(dashboard)/kasir/(components)/invoice/add/AddCard";
import InvoiceActions from "@/app/(dashboard)/kasir/(components)/invoice/add/AddActions";

const AddInvoicePage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={8}>
        <InvoiceForm />
      </Grid>
      <Grid item xs={4}>
        <InvoiceActions />
      </Grid>
    </Grid>
  )
}

export default AddInvoicePage
