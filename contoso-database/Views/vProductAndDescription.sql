CREATE VIEW [SalesLT].[vProductAndDescription]

AS
-- View (indexed or standard) to display products and product descriptions by language.
SELECT
    p.[ProductID]
    ,p.[Name]
FROM [SalesLT].[Product] p

GO

