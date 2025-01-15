/*
  Warnings:

  - Added the required column `config` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ended_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `started_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tariff` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "config" TEXT NOT NULL,
ADD COLUMN     "ended_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "started_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL,
ADD COLUMN     "tariff" TEXT NOT NULL;
