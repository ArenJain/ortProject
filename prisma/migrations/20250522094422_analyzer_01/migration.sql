BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [userId] UNIQUEIDENTIFIER NOT NULL,
    [userName] NVARCHAR(100),
    [email] NVARCHAR(100),
    [password] NVARCHAR(100),
    [createdAt] DATETIME,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([userId]),
    CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Project] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Project_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [userId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [Project_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Project_userId_name_key] UNIQUE NONCLUSTERED ([userId],[name])
);

-- CreateTable
CREATE TABLE [dbo].[Scan] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Scan_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [gitRunId] NVARCHAR(1000) NOT NULL,
    [projectId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Scan_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Scan_gitRunId_key] UNIQUE NONCLUSTERED ([gitRunId])
);

-- CreateTable
CREATE TABLE [dbo].[Analyzer] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Analyzer_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [scanId] INT NOT NULL,
    CONSTRAINT [Analyzer_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Analyzer_scanId_key] UNIQUE NONCLUSTERED ([scanId])
);

-- CreateTable
CREATE TABLE [dbo].[AnalyzerPackage] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [AnalyzerPackage_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [packId] NVARCHAR(1000) NOT NULL,
    [purl] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [homepageUrl] NVARCHAR(1000) NOT NULL,
    [analyzerId] INT NOT NULL,
    CONSTRAINT [AnalyzerPackage_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[PackageAuthor] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [packageId] INT NOT NULL,
    CONSTRAINT [PackageAuthor_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[BinaryArtifact] (
    [id] INT NOT NULL IDENTITY(1,1),
    [url] NVARCHAR(1000) NOT NULL,
    [packageId] INT NOT NULL,
    CONSTRAINT [BinaryArtifact_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[SourceArtifact] (
    [id] INT NOT NULL IDENTITY(1,1),
    [url] NVARCHAR(1000) NOT NULL,
    [packageId] INT NOT NULL,
    CONSTRAINT [SourceArtifact_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Vcs] (
    [id] INT NOT NULL IDENTITY(1,1),
    [type] NVARCHAR(1000) NOT NULL,
    [url] NVARCHAR(1000) NOT NULL,
    [revision] NVARCHAR(1000) NOT NULL,
    [path] NVARCHAR(1000) NOT NULL,
    [packageId] INT NOT NULL,
    CONSTRAINT [Vcs_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[VcsProcessed] (
    [id] INT NOT NULL IDENTITY(1,1),
    [type] NVARCHAR(1000) NOT NULL,
    [url] NVARCHAR(1000) NOT NULL,
    [revision] NVARCHAR(1000) NOT NULL,
    [path] NVARCHAR(1000) NOT NULL,
    [packageId] INT NOT NULL,
    CONSTRAINT [VcsProcessed_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Project] ADD CONSTRAINT [Project_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([userId]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Scan] ADD CONSTRAINT [Scan_projectId_fkey] FOREIGN KEY ([projectId]) REFERENCES [dbo].[Project]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Analyzer] ADD CONSTRAINT [Analyzer_scanId_fkey] FOREIGN KEY ([scanId]) REFERENCES [dbo].[Scan]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AnalyzerPackage] ADD CONSTRAINT [AnalyzerPackage_analyzerId_fkey] FOREIGN KEY ([analyzerId]) REFERENCES [dbo].[Analyzer]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PackageAuthor] ADD CONSTRAINT [PackageAuthor_packageId_fkey] FOREIGN KEY ([packageId]) REFERENCES [dbo].[AnalyzerPackage]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[BinaryArtifact] ADD CONSTRAINT [BinaryArtifact_packageId_fkey] FOREIGN KEY ([packageId]) REFERENCES [dbo].[AnalyzerPackage]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SourceArtifact] ADD CONSTRAINT [SourceArtifact_packageId_fkey] FOREIGN KEY ([packageId]) REFERENCES [dbo].[AnalyzerPackage]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Vcs] ADD CONSTRAINT [Vcs_packageId_fkey] FOREIGN KEY ([packageId]) REFERENCES [dbo].[AnalyzerPackage]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[VcsProcessed] ADD CONSTRAINT [VcsProcessed_packageId_fkey] FOREIGN KEY ([packageId]) REFERENCES [dbo].[AnalyzerPackage]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
