import prisma from '../../../libs/prisma';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { nilai, keterangan } = await request.json()
    console.log("🚀 ~ POST ~  nilai, keterangan:", nilai, keterangan)
    const newPengeluaranKas = await prisma.pengeluaran_kas.create({
      data: {
        nilai,
        keterangan,
      },
    });
    return NextResponse.json(newPengeluaranKas);
  } catch (e) {
    return NextResponse.error(e, { status: 500 });
  }
}

export async function GET() {
  try {
    const pengeluaranKas = await prisma.pengeluaran_kas.findMany();
    return NextResponse.json(pengeluaranKas);
  } catch (e) {
    console.error(e);
  }
}
