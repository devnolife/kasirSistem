import { Container, Typography, Box, Grid } from '@mui/material';
import React from 'react';
import ChartNota from './ChartNota';
import KasHarianChart from './KasHarianChart';
import TimeLineKas from './TimeLineKas';
import PieChart from './PieChart';
import BarChartPenerimaanKas from './BarChartPenerimaanKas'
const DashboardKasir = () => {

  return (
    <Grid container spacing={2} >
      <Grid item xs={12} md={8}>
        <KasHarianChart />
      </Grid>
      <Grid item xs={12} md={4}>
        <TimeLineKas />
      </Grid>
      <Grid item xs={12} md={3}>
        <PieChart />
      </Grid>

    </Grid>
  );
};


export default DashboardKasir;
