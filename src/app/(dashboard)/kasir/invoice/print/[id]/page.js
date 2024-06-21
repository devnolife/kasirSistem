

// app/(dashboard)/kasir/invoice/print/[id]/page.js

'use client'

// Next Imports
import { useParams } from 'next/navigation'

// Component Imports
import PrintPage from '@/app/(dashboard)/kasir/(components)/invoice/print/Print'

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

const PrintInvoicePage = () => {
  const { id } = useParams()

  return <PrintPage invoiceData={invoiceData} id={id} />
}

export default PrintInvoicePage
