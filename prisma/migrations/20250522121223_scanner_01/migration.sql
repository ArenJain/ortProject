BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Scanner] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Scanner_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [scanId] INT NOT NULL,
    CONSTRAINT [Scanner_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Scanner_scanId_key] UNIQUE NONCLUSTERED ([scanId])
);

-- CreateTable
CREATE TABLE [dbo].[Licenses] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Licenses_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [licenseName] NVARCHAR(1000) NOT NULL,
    [path] NVARCHAR(1000) NOT NULL,
    [startLine] INT NOT NULL,
    [endLine] INT NOT NULL,
    [score] FLOAT(53) NOT NULL,
    [scannerId] INT NOT NULL,
    CONSTRAINT [Licenses_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Copyrights] (
    [id] INT NOT NULL IDENTITY(1,1),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Copyrights_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [statement] NVARCHAR(1000) NOT NULL,
    [path] NVARCHAR(1000) NOT NULL,
    [startLine] INT NOT NULL,
    [endLine] INT NOT NULL,
    [scannerId] INT NOT NULL,
    CONSTRAINT [Copyrights_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Scanner] ADD CONSTRAINT [Scanner_scanId_fkey] FOREIGN KEY ([scanId]) REFERENCES [dbo].[Scan]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Licenses] ADD CONSTRAINT [Licenses_scannerId_fkey] FOREIGN KEY ([scannerId]) REFERENCES [dbo].[Scanner]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Copyrights] ADD CONSTRAINT [Copyrights_scannerId_fkey] FOREIGN KEY ([scannerId]) REFERENCES [dbo].[Scanner]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
