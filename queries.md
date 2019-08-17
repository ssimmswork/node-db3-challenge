# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT p.ProductName, c.CategoryName
FROM Products as p
INNER JOIN Categories as c
ON c.CategoryID = p.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.OrderID, s.ShipperName
FROM Orders as o
INNER JOIN Shippers as s
ON o.ShipperID = s.ShipperID

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT p.ProductName, o.Quantity 
FROM OrderDetails as o
INNER JOIN Products as p
on p.ProductID = o.ProductID
WHERE o.OrderID = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT o.OrderID, c.CustomerName, e.LastName 
FROM Orders as o
INNER JOIN Customers c on c.CustomerID = o.CustomerID
INNER JOIN Employees e on e.EmployeeID = o.EmployeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT c.CategoryName, p.Unit as Count 
FROM [Categories] as c
INNER JOIN Products as p

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

SELECT o.OrderID, od.Quantity as ItemCount 
FROM [Orders] as o
INNER JOIN [OrderDetails] as od
ON od.OrderID = o.OrderID
