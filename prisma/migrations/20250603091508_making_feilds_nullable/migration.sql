BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[AdvisorPackage] ALTER COLUMN [name] NVARCHAR(4000) NULL;

-- AlterTable
ALTER TABLE [dbo].[AnalyzerPackage] ALTER COLUMN [packId] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[AnalyzerPackage] ALTER COLUMN [purl] NVARCHAR(4000) NULL;
ALTER TABLE [dbo].[AnalyzerPackage] ALTER COLUMN [description] NVARCHAR(max) NULL;
ALTER TABLE [dbo].[AnalyzerPackage] ALTER COLUMN [homepageUrl] NVARCHAR(4000) NULL;

-- AlterTable
ALTER TABLE [dbo].[BinaryArtifact] ALTER COLUMN [url] NVARCHAR(4000) NULL;

-- AlterTable
ALTER TABLE [dbo].[Copyrights] ALTER COLUMN [statement] NVARCHAR(max) NULL;
ALTER TABLE [dbo].[Copyrights] ALTER COLUMN [path] NVARCHAR(4000) NULL;
ALTER TABLE [dbo].[Copyrights] ALTER COLUMN [startLine] INT NULL;
ALTER TABLE [dbo].[Copyrights] ALTER COLUMN [endLine] INT NULL;

-- AlterTable
ALTER TABLE [dbo].[DeclaredLicenses] ALTER COLUMN [name] NVARCHAR(4000) NULL;

-- AlterTable
ALTER TABLE [dbo].[DeclaredLicensesProcessed] ALTER COLUMN [spdxExpression] NVARCHAR(4000) NULL;

-- AlterTable
ALTER TABLE [dbo].[Licenses] ALTER COLUMN [licenseName] NVARCHAR(4000) NULL;
ALTER TABLE [dbo].[Licenses] ALTER COLUMN [path] NVARCHAR(4000) NULL;
ALTER TABLE [dbo].[Licenses] ALTER COLUMN [startLine] INT NULL;
ALTER TABLE [dbo].[Licenses] ALTER COLUMN [endLine] INT NULL;
ALTER TABLE [dbo].[Licenses] ALTER COLUMN [score] FLOAT(53) NULL;

-- AlterTable
ALTER TABLE [dbo].[PackageAuthor] ALTER COLUMN [name] NVARCHAR(4000) NULL;

-- AlterTable
ALTER TABLE [dbo].[Project] ALTER COLUMN [name] NVARCHAR(1000) NULL;

-- AlterTable
ALTER TABLE [dbo].[References] ALTER COLUMN [url] NVARCHAR(max) NULL;
ALTER TABLE [dbo].[References] ALTER COLUMN [scoringSystem] NVARCHAR(4000) NULL;
ALTER TABLE [dbo].[References] ALTER COLUMN [severity] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[References] ALTER COLUMN [score] FLOAT(53) NULL;
ALTER TABLE [dbo].[References] ALTER COLUMN [vector] NVARCHAR(4000) NULL;

-- AlterTable
ALTER TABLE [dbo].[Scan] ALTER COLUMN [gitRunId] NVARCHAR(1000) NULL;

-- AlterTable
ALTER TABLE [dbo].[SourceArtifact] ALTER COLUMN [url] NVARCHAR(4000) NULL;

-- AlterTable
ALTER TABLE [dbo].[Vcs] ALTER COLUMN [type] NVARCHAR(4000) NULL;
ALTER TABLE [dbo].[Vcs] ALTER COLUMN [url] NVARCHAR(4000) NULL;
ALTER TABLE [dbo].[Vcs] ALTER COLUMN [revision] NVARCHAR(4000) NULL;
ALTER TABLE [dbo].[Vcs] ALTER COLUMN [path] NVARCHAR(4000) NULL;

-- AlterTable
ALTER TABLE [dbo].[VcsProcessed] ALTER COLUMN [type] NVARCHAR(4000) NULL;
ALTER TABLE [dbo].[VcsProcessed] ALTER COLUMN [url] NVARCHAR(4000) NULL;
ALTER TABLE [dbo].[VcsProcessed] ALTER COLUMN [revision] NVARCHAR(4000) NULL;
ALTER TABLE [dbo].[VcsProcessed] ALTER COLUMN [path] NVARCHAR(4000) NULL;

-- AlterTable
ALTER TABLE [dbo].[Vulnerabilities] ALTER COLUMN [summary] NVARCHAR(max) NULL;
ALTER TABLE [dbo].[Vulnerabilities] ALTER COLUMN [description] NVARCHAR(max) NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
