import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { pecahan, jumlah, total } = req.body;

    const newManajemenKas = await prisma.manajemen_kas.create({
      data: {
        pecahan,
        jumlah,
        total,
      },
    });

    res.status(200).json(newManajemenKas);
  } else if (req.method === 'GET') {
    const manajemenKas = await prisma.manajemen_kas.findMany();
    res.status(200).json(manajemenKas);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
