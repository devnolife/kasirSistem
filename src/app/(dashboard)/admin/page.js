import React from 'react';
import { Grid, Card } from '@mui/material';

import KasHarianChart from './(components)/Statistik/KasHarianChart';
import TimeLineKas from './(components)/Statistik/TimeLineKas';
import PieChart from './(components)/Statistik/PieChart';
import UserList from '@/app/(dashboard)/admin/(components)/user/list';
import fakeDataUsers from '@/data/fakeDataUser';
import UserListCards from '@/app/(dashboard)/admin/(components)/user/list/UserListCards';
import ListPecahanRupiah from "@components/ListPecahanRupiah";

const DashboardKasir = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={9}>
        <Card style={{ padding: '16px', marginBottom: '18px' }}>
          <KasHarianChart />
        </Card>
        <Card style={{ padding: '16px', marginBottom: '16px' }}>
          <ListPecahanRupiah />
        </Card>
        <Card style={{ padding: '16px', marginBottom: '16px' }}>
          <UserList userData={fakeDataUsers} />
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card style={{ padding: '16px', marginBottom: '16px' }}>
          <PieChart />
        </Card>
        <Card style={{ padding: '16px' }}>
          <TimeLineKas />
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardKasir;
