-- CreateTable
CREATE TABLE "Languages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "github" TEXT,
    "deploy" TEXT,
    "image" TEXT,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LanguagesToProjects" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LanguagesToProjects_AB_unique" ON "_LanguagesToProjects"("A", "B");

-- CreateIndex
CREATE INDEX "_LanguagesToProjects_B_index" ON "_LanguagesToProjects"("B");

-- AddForeignKey
ALTER TABLE "_LanguagesToProjects" ADD CONSTRAINT "_LanguagesToProjects_A_fkey" FOREIGN KEY ("A") REFERENCES "Languages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LanguagesToProjects" ADD CONSTRAINT "_LanguagesToProjects_B_fkey" FOREIGN KEY ("B") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
