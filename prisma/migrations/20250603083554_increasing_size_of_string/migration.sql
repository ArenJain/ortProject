BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[User] DROP CONSTRAINT [User_userName_key];

-- AlterTable
ALTER TABLE [dbo].[AdvisorPackage] ALTER COLUMN [name] NVARCHAR(4000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[AnalyzerPackage] ALTER COLUMN [purl] NVARCHAR(4000) NOT NULL;
ALTER TABLE [dbo].[AnalyzerPackage] ALTER COLUMN [description] NVARCHAR(max) NOT NULL;
ALTER TABLE [dbo].[AnalyzerPackage] ALTER COLUMN [homepageUrl] NVARCHAR(4000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[BinaryArtifact] ALTER COLUMN [url] NVARCHAR(4000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[Copyrights] ALTER COLUMN [statement] NVARCHAR(max) NOT NULL;
ALTER TABLE [dbo].[Copyrights] ALTER COLUMN [path] NVARCHAR(4000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[DeclaredLicenses] ALTER COLUMN [name] NVARCHAR(4000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[DeclaredLicensesProcessed] ALTER COLUMN [spdxExpression] NVARCHAR(4000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[Licenses] ALTER COLUMN [licenseName] NVARCHAR(4000) NOT NULL;
ALTER TABLE [dbo].[Licenses] ALTER COLUMN [path] NVARCHAR(4000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[PackageAuthor] ALTER COLUMN [name] NVARCHAR(4000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[References] ALTER COLUMN [url] NVARCHAR(max) NOT NULL;
ALTER TABLE [dbo].[References] ALTER COLUMN [scoringSystem] NVARCHAR(4000) NOT NULL;
ALTER TABLE [dbo].[References] ALTER COLUMN [vector] NVARCHAR(4000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[Scan] ALTER COLUMN [artifactUrl] NVARCHAR(1000) NULL;

-- AlterTable
ALTER TABLE [dbo].[SourceArtifact] ALTER COLUMN [url] NVARCHAR(4000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[User] ALTER COLUMN [userName] NVARCHAR(200) NOT NULL;
ALTER TABLE [dbo].[User] ALTER COLUMN [email] NVARCHAR(200) NULL;
ALTER TABLE [dbo].[User] ALTER COLUMN [password] NVARCHAR(200) NULL;

-- AlterTable
ALTER TABLE [dbo].[Vcs] ALTER COLUMN [type] NVARCHAR(4000) NOT NULL;
ALTER TABLE [dbo].[Vcs] ALTER COLUMN [url] NVARCHAR(4000) NOT NULL;
ALTER TABLE [dbo].[Vcs] ALTER COLUMN [revision] NVARCHAR(4000) NOT NULL;
ALTER TABLE [dbo].[Vcs] ALTER COLUMN [path] NVARCHAR(4000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[VcsProcessed] ALTER COLUMN [type] NVARCHAR(4000) NOT NULL;
ALTER TABLE [dbo].[VcsProcessed] ALTER COLUMN [url] NVARCHAR(4000) NOT NULL;
ALTER TABLE [dbo].[VcsProcessed] ALTER COLUMN [revision] NVARCHAR(4000) NOT NULL;
ALTER TABLE [dbo].[VcsProcessed] ALTER COLUMN [path] NVARCHAR(4000) NOT NULL;

-- AlterTable
ALTER TABLE [dbo].[Vulnerabilities] ALTER COLUMN [summary] NVARCHAR(max) NOT NULL;
ALTER TABLE [dbo].[Vulnerabilities] ALTER COLUMN [description] NVARCHAR(max) NOT NULL;

-- CreateIndex
ALTER TABLE [dbo].[User] ADD CONSTRAINT [User_userName_key] UNIQUE NONCLUSTERED ([userName]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
