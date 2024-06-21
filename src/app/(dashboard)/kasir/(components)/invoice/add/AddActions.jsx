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
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import Divider from '@mui/material/Divider'

// Component Imports
import SendInvoiceDrawer from '@/app/(dashboard)/kasir/invoice/shared/SendInvoiceDrawer'
import CustomTextField from '@core/components/mui/TextField'

const InvoiceActions = () => {
  const [sendDrawerOpen, setSendDrawerOpen] = useState(false)
  const { lang: locale } = useParams()

  const [pecahan, setPecahan] = useState([
    { denomination: 500, quantity: 10, total: 5000 },
    { denomination: 1000, quantity: 20, total: 20000 },
    { denomination: 2000, quantity: 20, total: 40000 },
    { denomination: 5000, quantity: 20, total: 100000 },
    { denomination: 10000, quantity: 20, total: 200000 },
    { denomination: 20000, quantity: 20, total: 400000 },
    { denomination: 50000, quantity: 10, total: 500000 },
    { denomination: 100000, quantity: 10, total: 1000000 }
  ])

  const handleQuantityChange = (index, quantity) => {
    const newPecahan = [...pecahan]
    newPecahan[index].quantity = quantity
    newPecahan[index].total = newPecahan[index].denomination * quantity
    setPecahan(newPecahan)
  }

  const totalUangAwal = pecahan.reduce((acc, item) => acc + item.total, 0)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
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
            <Button
              fullWidth
              component={Link}
              color='secondary'
              variant='tonal'
              className='capitalize'
              href='/kasir/invoice/preview/1'
            >
              Preview
            </Button>
          </CardContent>
        </Card>
        <SendInvoiceDrawer open={sendDrawerOpen} handleClose={() => setSendDrawerOpen(false)} />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant='h6' gutterBottom>
              Input Pecahan Uang Awal
            </Typography>
            <Grid container>
              {pecahan.map((item, index) => (
                <Grid item xs={8} sm={3} md={12} key={index}>
                  <CustomTextField
                    label={`Pecahan ${item.denomination}`}
                    type='number'
                    value={item.quantity}
                    onChange={e => handleQuantityChange(index, parseInt(e.target.value))}
                    fullWidth
                    InputProps={{
                      endAdornment: <InputAdornment position='end'>qty</InputAdornment>
                    }}
                  />
                  <Typography
                    className='text-right'
                  >Total: Rp.{item.total.toLocaleString()}</Typography>
                </Grid>
              ))}
            </Grid>
            <Divider className='my-3' />
            <Typography variant='h6'>Total Uang Awal: Rp.{totalUangAwal.toLocaleString()}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default InvoiceActions
