BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[AdvisorPackage] DROP CONSTRAINT [AdvisorPackage_advisorId_key];

-- DropIndex
ALTER TABLE [dbo].[References] DROP CONSTRAINT [References_vulnerabilitiesId_key];

-- DropIndex
ALTER TABLE [dbo].[Vulnerabilities] DROP CONSTRAINT [Vulnerabilities_advisorPackageId_key];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
