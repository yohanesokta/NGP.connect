/*
  Warnings:

  - The `class` column on the `Users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "class",
ADD COLUMN     "class" JSONB NOT NULL DEFAULT '[]';
