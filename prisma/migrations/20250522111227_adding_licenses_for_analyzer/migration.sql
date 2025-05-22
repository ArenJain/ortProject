BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[DeclaredLicenses] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [packageId] INT NOT NULL,
    CONSTRAINT [DeclaredLicenses_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[DeclaredLicensesProcessed] (
    [id] INT NOT NULL IDENTITY(1,1),
    [spdxExpression] NVARCHAR(1000) NOT NULL,
    [packageId] INT NOT NULL,
    CONSTRAINT [DeclaredLicensesProcessed_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[DeclaredLicenses] ADD CONSTRAINT [DeclaredLicenses_packageId_fkey] FOREIGN KEY ([packageId]) REFERENCES [dbo].[AnalyzerPackage]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[DeclaredLicensesProcessed] ADD CONSTRAINT [DeclaredLicensesProcessed_packageId_fkey] FOREIGN KEY ([packageId]) REFERENCES [dbo].[AnalyzerPackage]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
