/*
  Warnings:

  - You are about to drop the `ManajemenKas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PenerimaanKas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PengeluaranKas` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "role" AS ENUM ('admin', 'kasir');

-- CreateEnum
CREATE TYPE "jenis_nota" AS ENUM ('INCP', 'INVC');

-- DropTable
DROP TABLE "ManajemenKas";

-- DropTable
DROP TABLE "PenerimaanKas";

-- DropTable
DROP TABLE "PengeluaranKas";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "role" NOT NULL DEFAULT 'kasir',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "akun" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "access_token" TEXT,
    "jenis_token" TEXT,
    "expires_at" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "akun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "tokenSesi" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "berakhirPada" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "penerimaan_kas" (
    "id" SERIAL NOT NULL,
    "jenisNota" "jenis_nota" NOT NULL,
    "nomorNota" TEXT NOT NULL,
    "nilai" DOUBLE PRECISION NOT NULL,
    "keterangan" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "penerimaan_kas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pengeluaran_kas" (
    "id" SERIAL NOT NULL,
    "nilai" DOUBLE PRECISION NOT NULL,
    "keterangan" TEXT,
    "user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pengeluaran_kas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manajemen_kas" (
    "id" SERIAL NOT NULL,
    "pecahan" INTEGER NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "manajemen_kas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_token" (
    "identifikator" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "berakhirPada" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "akun_user_id_key" ON "akun"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "session_tokenSesi_key" ON "session"("tokenSesi");

-- CreateIndex
CREATE UNIQUE INDEX "penerimaan_kas_nomorNota_key" ON "penerimaan_kas"("nomorNota");

-- CreateIndex
CREATE UNIQUE INDEX "verification_token_token_key" ON "verification_token"("token");

-- CreateIndex
CREATE UNIQUE INDEX "verification_token_identifikator_token_key" ON "verification_token"("identifikator", "token");

-- AddForeignKey
ALTER TABLE "akun" ADD CONSTRAINT "akun_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "penerimaan_kas" ADD CONSTRAINT "penerimaan_kas_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pengeluaran_kas" ADD CONSTRAINT "pengeluaran_kas_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
