'use client'

// React Imports
import { useState } from 'react'

import InputLabel from '@mui/material/InputLabel';


// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'

// Component Imports
import classnames from 'classnames'

import AddCustomerDrawer, { initialFormData } from './AddCustomerDrawer'
import Logo from '@components/layout/shared/Logo'
import CustomTextField from '@core/components/mui/TextField'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

import fakeData from '@/data/fakedata'

const InvoiceForm = () => {
  const [selectData, setSelectData] = useState(null)
  const [issuedDate, setIssuedDate] = useState(null)
  const [dueDate, setDueDate] = useState(null)
  const [formData, setFormData] = useState(initialFormData)
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(1)
  const isBelowMdScreen = useMediaQuery(theme => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery(theme => theme.breakpoints.down('sm'))

  const onFormSubmit = data => {
    setFormData(data)
  }

  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('.repeater-item').remove()
  }

  return (
    <Card>
      <CardContent className='sm:!p-12'>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <div className='p-6 rounded bg-actionHover'>
              <div className='flex flex-col justify-between gap-4 sm:flex-row'>
                <div className='flex flex-col gap-6'>
                  <div className='flex items-center gap-2.5'>
                    <Logo />
                  </div>
                  <div>
                    <Typography color='text.primary'>Jl. Sulawesi No.360, Butung, Kec. Wajo</Typography>
                    <Typography color='text.primary'>Kota Makassar, Sulawesi Selatan 90164</Typography>
                    <Typography color='text.primary'>+04113610620</Typography>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-4'>
                    <Typography variant='h5' className='min-is-[95px]'>
                      Invoice
                    </Typography>
                    <CustomTextField
                      fullWidth
                      value={fakeData[0].id}
                      InputProps={{
                        disabled: true,
                        startAdornment: <InputAdornment position='start'>#</InputAdornment>
                      }}
                    />
                  </div>
                  <div className='flex items-center'>
                    <Typography className='min-is-[95px] mie-4' color='text.primary'>
                      Tanggal Awal:
                    </Typography>
                    <AppReactDatepicker
                      boxProps={{ className: 'is-full' }}
                      selected={issuedDate}
                      placeholderText='YYYY-MM-DD'
                      dateFormat={'yyyy-MM-dd'}
                      onChange={date => setIssuedDate(date)}
                      customInput={<CustomTextField fullWidth />}
                    />
                  </div>
                  <div className='flex items-center'>
                    <Typography className='min-is-[95px] mie-4' color='text.primary'>
                      Tanggal Akhir:
                    </Typography>
                    <AppReactDatepicker
                      boxProps={{ className: 'is-full' }}
                      selected={dueDate}
                      placeholderText='YYYY-MM-DD'
                      dateFormat={'yyyy-MM-dd'}
                      onChange={date => setDueDate(date)}
                      customInput={<CustomTextField fullWidth />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Divider className='border-dashed' />
          </Grid>
          <Grid item xs={12}>
            {Array.from(Array(count).keys()).map((item, index) => (
              <div
                key={index}
                className={classnames('repeater-item flex relative mbe-4 border rounded', {
                  'mbs-8': !isBelowMdScreen,
                  '!mbs-14': index !== 0 && !isBelowMdScreen,
                  'gap-5': isBelowMdScreen
                })}
              >
                <Grid container spacing={5} className='m-0 pbe-5'>
                  <Grid item md={2} xs={12}>
                    <Typography className='font-medium md:absolute md:-top-8'>No Nota</Typography>
                    <CustomTextField
                      {...(isBelowMdScreen && { fullWidth: true })}
                      placeholder='1'
                      defaultValue='1'
                      InputProps={{ inputProps: { min: 0 } }}
                    />
                  </Grid>
                  <Grid item lg={6} md={5} xs={12}>
                    <Typography className='font-medium md:absolute md:-top-8' color='text.primary'>
                      Jenis Kas
                    </Typography>
                    <CustomTextField select fullWidth defaultValue='App Design' className='mbe-5'>
                      <MenuItem value='App Design'>Pengeluaran Kas</MenuItem>
                      <MenuItem value='App Customization'>Pemasukan Kas</MenuItem>
                    </CustomTextField>
                    <CustomTextField rows={2} fullWidth multiline defaultValue='Keterangan Kas' />
                  </Grid>
                  <Grid item lg={2} md={3} xs={12}>
                    <Typography className='font-medium md:absolute md:-top-8'>Nilai (Rp)</Typography>
                    <CustomTextField
                      {...(isBelowMdScreen && { fullWidth: true })}
                      type='number'
                      placeholder='24000'
                      defaultValue='2400'
                      className='mbe-5'
                      InputProps={{ inputProps: { min: 0 } }}
                    />
                  </Grid>
                </Grid>
                <div className='flex flex-col justify-start border-is'>
                  <IconButton size='small' onClick={deleteForm}>
                    <i className='tabler-x text-actionActive' />
                  </IconButton>
                </div>
              </div>
            ))}
            <Grid item xs={12}>
              <Button
                size='small'
                variant='contained'
                onClick={() => setCount(count + 1)}
                startIcon={<i className='tabler-plus' />}
              >
                Tambah Invoice
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider className='border-dashed' />
          </Grid>
          <Grid item xs={12}>
            <div className='flex flex-col justify-between gap-4 sm:flex-row'>
              <div className='flex flex-col gap-4 order-2 sm:order-[unset]'>
                <div className='flex items-center gap-2'>
                  <Typography className='font-medium' color='text.primary'>
                    Kasir:
                  </Typography>
                  <CustomTextField defaultValue='Angel' />
                </div>
                <CustomTextField placeholder='Catatan ...' />
              </div>
              <div className='min-is-[200px]'>
                <div className='flex items-center justify-between'>
                  <Typography>Pemasukan:</Typography>
                  <Typography className='font-medium' color='text.primary'>
                    Rp.1800
                  </Typography>
                </div>
                <div className='flex items-center justify-between'>
                  <Typography>Pengeluaran:</Typography>
                  <Typography className='font-medium' color='text.primary'>
                    Rp.28
                  </Typography>
                </div>
                <Divider className='mlb-2' />
                <div className='flex items-center justify-between'>
                  <Typography>Total:</Typography>
                  <Typography className='font-medium' color='text.primary'>
                    Rp.1828
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Divider className='border-dashed' />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor='invoice-note' className='inline-flex mbe-1 text-textPrimary'>
              Note:
            </InputLabel>
            <CustomTextField
              id='invoice-note'
              rows={2}
              fullWidth
              multiline
              className='border rounded'
              defaultValue='Ketikan catatan disini...'
            />
          </Grid>
        </Grid>
      </CardContent>
      <AddCustomerDrawer open={open} setOpen={setOpen} onFormSubmit={onFormSubmit} />
    </Card>
  )
}

export default InvoiceForm
