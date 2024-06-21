'use client'

// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import PreviewCard from "./PreviewCard";
import PreviewActions from "./PreviewActions";


const InvoicePreviewPage = () => {
  const { id } = useParams()

  const invoiceData = {
    id,
    issuedDate: '2024-06-01',
    dueDate: '2024-06-15',
    name: 'Client Name',
    company: 'Client Company',
    address: 'Client Address',
    contact: 'Client Contact',
    companyEmail: 'client@example.com'
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={8}>
        <PreviewCard invoiceData={invoiceData} id={id} />
      </Grid>
      <Grid item xs={4}>
        <PreviewActions id={id} />
      </Grid>
    </Grid>
  )
}

export default InvoicePreviewPage
