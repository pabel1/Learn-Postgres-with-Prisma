-- CreateTable
CREATE TABLE "DepartmentSalary" (
    "id" SERIAL NOT NULL,
    "departname" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DepartmentSalary_id_key" ON "DepartmentSalary"("id");

-- AddForeignKey
ALTER TABLE "DepartmentSalary" ADD CONSTRAINT "DepartmentSalary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
