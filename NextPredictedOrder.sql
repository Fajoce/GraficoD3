USE [StoreSample]
GO
/****** Object:  StoredProcedure [dbo].[NextPredictedOrder]    Script Date: 25/02/2023 10:20:08 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROC [dbo].[NextPredictedOrder]
AS
	BEGIN
		SELECT
		  C.companyname, Max(O.orderdate) [LastOrderDate],  
		  CAST((MAX(CAST(O.orderdate AS FLOAT))
			+ (MAX(CAST(O.orderdate AS FLOAT))- MIN(CAST(O.orderdate AS FLOAT))
			) / (COUNT(*))
		  ) AS DATETIME) [NextPredictedOrder]
		FROM
		  sales.Customers C join Sales.Orders O
		ON C.custid = O.custid
		GROUP BY
		  C.companyname
		HAVING
		  COUNT(*) > 1
		END