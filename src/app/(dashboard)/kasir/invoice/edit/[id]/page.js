'use client'

// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import EditCard from '@/app/(dashboard)/kasir/(components)/invoice/edit/EditCard'
import EditActions from '@/app/(dashboard)/kasir/(components)/invoice/edit/EditActions'

// Dummy data for example purposes
const invoiceData = {
  issuedDate: '2024-06-01',
  dueDate: '2024-06-15',
  name: 'Client Name',
  company: 'Client Company',
  address: 'Client Address',
  contact: 'Client Contact',
  companyEmail: 'client@example.com'
}

const data = [
  { id: 1, name: 'Client Name 1', company: 'Company 1', address: 'Address 1', contact: 'Contact 1', companyEmail: 'email1@example.com' },
  { id: 2, name: 'Client Name 2', company: 'Company 2', address: 'Address 2', contact: 'Contact 2', companyEmail: 'email2@example.com' },
  { id: 3, name: 'Client Name 3', company: 'Company 3', address: 'Address 3', contact: 'Contact 3', companyEmail: 'email3@example.com' },
  { id: 4, name: 'Client Name 4', company: 'Company 4', address: 'Address 4', contact: 'Contact 4', companyEmail: 'email4@example.com' },
  { id: 5, name: 'Client Name 5', company: 'Company 5', address: 'Address 5', contact: 'Contact 5', companyEmail: 'email5@example.com' }
]

const EditInvoicePage = () => {
  const { id } = useParams()

  return (
    <Grid container spacing={6}>
      <Grid item xs={8}>
        <EditCard invoiceData={invoiceData} id={id} data={data} />
      </Grid>
      <Grid item xs={4}>
        <EditActions id={id} />
      </Grid>
    </Grid>
  )
}

export default EditInvoicePage
