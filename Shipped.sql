USE [StoreSample]
GO
/****** Object:  StoredProcedure [dbo].[ResumenShipped]    Script Date: 25/02/2023 7:34:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROC [dbo].[ResumenShipped]
AS
BEGIN
	SELECT S.companyname, sum(O.freight) [totalFreight],
	Sum(OD.unitprice * Od.qty) [totalCostShipped],
	sum(OD.qty) [totalItemShipped]
	FROM Sales.Orders O join Sales.Shippers S
	on S.shipperid = O.shipperid 
	join Sales.OrderDetails OD
	on O.orderid = OD.orderid 
	group by S.companyname
	
END




	
	