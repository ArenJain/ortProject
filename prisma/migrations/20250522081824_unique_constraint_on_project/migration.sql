/*
  Warnings:

  - A unique constraint covering the columns `[userId,name]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[Project] ADD CONSTRAINT [Project_userId_name_key] UNIQUE NONCLUSTERED ([userId], [name]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
