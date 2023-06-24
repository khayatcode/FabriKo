<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Add Product</title>
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
<div class="text-center mx-auto col-6">
	<form:form action = "/product/add" method="post" modelAttribute = "product">
	<div>
		<form:label path="name">Name:</form:label>
		<form:errors path="name" class="text-danger"/>
		<form:input path="name" type="text"/>
	</div>
	<div>
		<form:label path="category">Category:</form:label>
		<form:errors path="category" class="text-danger" />
		<form:select path="category" type="text">
				<option value=""></option>
				<option value="Mens">Men</option>
				<option value="Women">Women</option>
		</form:select>
	</div>
	<div>
		<form:label path="price">Price:</form:label>
		<form:errors path="price" class="text-danger"/>
		<form:input path="price" type="number" step="0.01" min="0.01"/>
	</div>
	<div>
		<form:label path="description"></form:label>
		<form:errors path="description" class="text-danger"/>
		<form:textarea path="description" placeholder="Write your description here"/>
	</div>	
		<input type="file" name="file" />

		

		<input type="submit" value="submit" />
		</form:form>
	</div>
</body>
</html>