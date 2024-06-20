"use client"
import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormPengeluaranKas = () => {
  const [nilai, setNilai] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    const myPromise = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('http://localhost:3000/api/pengeluaran', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nilai: parseInt(nilai),
            keterangan,
          }),
        });

        if (response.ok) {
          resolve(response);
        } else {
          reject(response);
        }
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(myPromise, {
      pending: 'Loading...',
      success: 'Data berhasil disimpan',
      error: 'Data gagal disimpan'
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <ToastContainer />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Nilai"
            type="number"
            value={nilai}
            onChange={(e) => setNilai(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Keterangan"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormPengeluaranKas;
