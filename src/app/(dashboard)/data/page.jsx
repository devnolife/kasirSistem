"use client"

import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import TabelData from './TabelData';
import CircularProgress from '@mui/material/CircularProgress'
const getData = async () => {
  const res = await fetch('http://localhost:3000/api/pengeluaran', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const LihatData = () => {
  const [pengeluaranKas, setPengeluaranKas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setPengeluaranKas(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const pengeluaranKasColumns = [
    { field: 'id', headerName: 'ID' },
    { field: 'nilai', headerName: 'Nilai' },
    { field: 'keterangan', headerName: 'Keterangan' },
    { field: 'createdAt', headerName: 'Tanggal' },
  ];

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress size={80} />
      </div>
    )
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Lihat Data Kas
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h6" component="h2">
              Data Pengeluaran Kas
            </Typography>
            <TabelData data={pengeluaranKas} columns={pengeluaranKasColumns} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LihatData;
