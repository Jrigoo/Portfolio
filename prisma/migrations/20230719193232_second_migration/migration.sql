/*
  Warnings:

  - You are about to drop the `Languages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LanguagesToProjects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_LanguagesToProjects" DROP CONSTRAINT "_LanguagesToProjects_A_fkey";

-- DropForeignKey
ALTER TABLE "_LanguagesToProjects" DROP CONSTRAINT "_LanguagesToProjects_B_fkey";

-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "tech_stack" TEXT[];

-- DropTable
DROP TABLE "Languages";

-- DropTable
DROP TABLE "_LanguagesToProjects";
