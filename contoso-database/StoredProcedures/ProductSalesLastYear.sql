CREATE PROCEDURE SalesLT.ProductSalesLastYear 
    @PRODUCTID INT
AS
BEGIN
    DECLARE @LASTYEAR DATETIME = DATEADD(YEAR, -1, GETDATE());

    SELECT ISNULL(SUM(SOD.OrderQty),0) AS TotalQtySold
        , ISNULL(SUM(SOD.LineTotal),0) AS TotalRevenue
        , COUNT(DISTINCT SOD.SalesOrderID) AS OrderCount
    FROM SalesLT.SalesOrderDetails SOD
    INNER JOIN SalesLT.SalesOrderHeader SH ON SOD.SalesOrderID = SH.SalesOrderID
    WHERE SOD.ProductID = @PRODUCTID AND SH.OrderDate >= @LASTYEAR;
END
GO

