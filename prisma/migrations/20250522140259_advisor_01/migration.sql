BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Advisor] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Advisor_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [scanId] INT NOT NULL,
    CONSTRAINT [Advisor_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Advisor_scanId_key] UNIQUE NONCLUSTERED ([scanId])
);

-- CreateTable
CREATE TABLE [dbo].[AdvisorPackage] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [AdvisorPackage_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [name] NVARCHAR(1000) NOT NULL,
    [advisorId] INT NOT NULL,
    CONSTRAINT [AdvisorPackage_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [AdvisorPackage_advisorId_key] UNIQUE NONCLUSTERED ([advisorId])
);

-- CreateTable
CREATE TABLE [dbo].[Vulnerabilities] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Vulnerabilities_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [vulId] NVARCHAR(1000) NOT NULL,
    [summary] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [advisorPackageId] INT NOT NULL,
    CONSTRAINT [Vulnerabilities_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Vulnerabilities_advisorPackageId_key] UNIQUE NONCLUSTERED ([advisorPackageId])
);

-- CreateTable
CREATE TABLE [dbo].[References] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [References_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [url] NVARCHAR(1000) NOT NULL,
    [scoringSystem] NVARCHAR(1000) NOT NULL,
    [severity] NVARCHAR(1000) NOT NULL,
    [score] FLOAT(53) NOT NULL,
    [vector] NVARCHAR(1000) NOT NULL,
    [vulnerabilitiesId] INT NOT NULL,
    CONSTRAINT [References_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [References_vulnerabilitiesId_key] UNIQUE NONCLUSTERED ([vulnerabilitiesId])
);

-- AddForeignKey
ALTER TABLE [dbo].[Advisor] ADD CONSTRAINT [Advisor_scanId_fkey] FOREIGN KEY ([scanId]) REFERENCES [dbo].[Scan]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AdvisorPackage] ADD CONSTRAINT [AdvisorPackage_advisorId_fkey] FOREIGN KEY ([advisorId]) REFERENCES [dbo].[Advisor]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Vulnerabilities] ADD CONSTRAINT [Vulnerabilities_advisorPackageId_fkey] FOREIGN KEY ([advisorPackageId]) REFERENCES [dbo].[AdvisorPackage]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[References] ADD CONSTRAINT [References_vulnerabilitiesId_fkey] FOREIGN KEY ([vulnerabilitiesId]) REFERENCES [dbo].[Vulnerabilities]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
