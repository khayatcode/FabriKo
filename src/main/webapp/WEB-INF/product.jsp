<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>{Category} Shirts</title>
<link rel="stylesheet" type="text/css" href="/css/style.css">
	<script type="text/javascript" src="/js/app.js"></script>
	<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css"/>
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
	<h1>This is the Product page!</h1>
	<a href="/product/add">Add Product</a>
	
		<c:forEach items="${products}" var="oneProduct">
		<div>
			<p>Item Name: <c:out value="${oneProduct.name}">${oneProduct.name}</c:out></p>
		</div>
		<a href="/product/edit/${oneProduct.id}">edit</a>
		<a href="/product/item/${oneProduct.id}">Show Item</a>
		</c:forEach>
</body>
</html>