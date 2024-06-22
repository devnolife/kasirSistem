'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

// Component Imports
import AddPaymentDrawer from '@/app/(dashboard)/kasir/(components)/invoice/shared/AddPaymentDrawer'
import SendInvoiceDrawer from '@/app/(dashboard)/kasir/(components)/invoice/shared/SendInvoiceDrawer'

const PreviewActions = ({ id }) => {
  const [paymentDrawerOpen, setPaymentDrawerOpen] = useState(false)
  const [sendDrawerOpen, setSendDrawerOpen] = useState(false)
  const { lang: locale } = useParams()

  return (
    <>
      <Card>
        <CardContent className='flex flex-col gap-4'>
          <Button
            fullWidth
            variant='contained'
            className='capitalize'
            startIcon={<i className='tabler-send' />}
            onClick={() => setSendDrawerOpen(true)}
          >
            Kirim Invoice
          </Button>
          <Button fullWidth color='secondary' variant='tonal' className='capitalize'>
            Download
          </Button>
          <div className='flex items-center gap-4'>
            <Button
              fullWidth
              target='_blank'
              component={Link}
              color='secondary'
              variant='tonal'
              className='capitalize'
              href={`/kasir/invoice/print/${id}`}
            >
              Print
            </Button>
            <Button
              fullWidth
              component={Link}
              color='secondary'
              variant='tonal'
              className='capitalize'
              href={`/kasir/invoice/edit/${id}`}
            >
              Edit
            </Button>
          </div>
        </CardContent>
      </Card>
      <AddPaymentDrawer open={paymentDrawerOpen} handleClose={() => setPaymentDrawerOpen(false)} />
      <SendInvoiceDrawer open={sendDrawerOpen} handleClose={() => setSendDrawerOpen(false)} />
    </>
  )
}

export default PreviewActions
