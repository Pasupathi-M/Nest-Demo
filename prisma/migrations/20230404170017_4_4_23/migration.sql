-- CreateTable
CREATE TABLE "Movies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "updatedBy" TEXT DEFAULT NULL

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);
