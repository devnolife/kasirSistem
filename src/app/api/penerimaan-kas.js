import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { jenisNota, nomorNota, nilai, keterangan } = req.body;

    const newPenerimaanKas = await prisma.penerimaan_kas.create({
      data: {
        jenisNota,
        nomorNota,
        nilai,
        keterangan,
      },
    });

    res.status(200).json(newPenerimaanKas);
  } else if (req.method === 'GET') {
    const penerimaanKas = await prisma.penerimaan_kas.findMany();
    res.status(200).json(penerimaanKas);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
