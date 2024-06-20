-- CreateTable
CREATE TABLE "PenerimaanKas" (
    "id" SERIAL NOT NULL,
    "jenisNota" TEXT NOT NULL,
    "nomorNota" TEXT NOT NULL,
    "nilai" DOUBLE PRECISION NOT NULL,
    "keterangan" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PenerimaanKas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PengeluaranKas" (
    "id" SERIAL NOT NULL,
    "nilai" DOUBLE PRECISION NOT NULL,
    "keterangan" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PengeluaranKas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManajemenKas" (
    "id" SERIAL NOT NULL,
    "pecahan" INTEGER NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ManajemenKas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PenerimaanKas_nomorNota_key" ON "PenerimaanKas"("nomorNota");
