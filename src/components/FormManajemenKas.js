"use client"
import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

const FormManajemenKas = () => {
  const [pecahan, setPecahan] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [total, setTotal] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Logika penanganan form
    await fetch('/api/manajemen-kas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pecahan: parseInt(pecahan, 10),
        jumlah: parseInt(jumlah, 10),
        total: parseFloat(total),
      }),
    }).then((res) => {
      console.log(res);
    })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Pecahan"
            type="number"
            value={pecahan}
            onChange={(e) => setPecahan(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Jumlah"
            type="number"
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Total"
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
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

export default FormManajemenKas;
