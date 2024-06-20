"use client"
import React, { useState } from 'react';
import { TextField, Button, MenuItem, Grid, Box } from '@mui/material';

const FormPenerimaanKas = () => {
  const [jenisNota, setJenisNota] = useState('');
  const [nomorNota, setNomorNota] = useState('');
  const [nilai, setNilai] = useState('');
  const [keterangan, setKeterangan] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch('/api/penerimaan-kas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jenisNota,
        nomorNota,
        nilai: parseFloat(nilai),
        keterangan,
      }),
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            select
            label="Jenis Nota"
            value={jenisNota}
            onChange={(e) => setJenisNota(e.target.value)}
            fullWidth
          >
            <MenuItem value="INCP">INCP</MenuItem>
            <MenuItem value="INVC">INVC</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Nomor Nota"
            value={nomorNota}
            onChange={(e) => setNomorNota(e.target.value)}
            fullWidth
          />
        </Grid>
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

export default FormPenerimaanKas;
