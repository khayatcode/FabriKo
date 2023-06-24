<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Shop Home</title>
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
	<main class="text-center p-5">
	
		<H1>I am Home!</H1>
		
		<c:choose>
			<c:when test="${userId != null}">
				<a href="/logout">Logout</a>
			</c:when>
			<c:otherwise>
			<a href="/login">Login</a>
			</c:otherwise>
		</c:choose>
		
		<c:forEach items="${products}" var="oneProduct">
		<div>
			<p>Item Name: <c:out value="${oneProduct.name}">${oneProduct.name}</c:out></p>
		</div>
		</c:forEach>
		<a href="/product">product</a>
		<div><a href="/user/shoppingCart">Shopping Cart</a></div>
	</main>
</body>
</html>