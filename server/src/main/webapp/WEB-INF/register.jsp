<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Register</title>
<link rel="stylesheet" href="/css/style.css">
<script type="text/javascript" src="/js/app.js"></script>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css" />
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script src="/js/javascript.js"></script>

</head>
<body>
	<main>

			<form:form action="/register" method="post" modelAttribute="newUser" 
				class="col-6 p-5">
				<h2 class="mb-3">New Registration</h2>
				<div class="mb-3">
					<form:label path="firstName">First Name:</form:label>
					<form:errors path="firstName" class="text-danger"/>
					<form:input path="firstName" type="text" class="form-control" />
				</div>
				<div class="mb-3">
					<form:label path="lastName">Last Name:</form:label>
					<form:errors path="lastName" class="text-danger"/>
					<form:input path="lastName" type="text" class="form-control" />
				</div>
				<div class="mb-3">
					<form:label path="email">Email:</form:label>
					<form:errors path="email" class="text-danger"/>
					<form:input path="email" type="email" class="form-control" />
				</div>
				<form:label path="accountType">Account Type:</form:label>
				<form:errors path="accountType" class="text-danger" />
 				<form:select path="accountType" type="text" class="form-control">
					<option value=""></option>
					<option value="Shopper">Shopper</option>
					<option value="Admin">Admin</option>
				</form:select>
				<div class="mb-3">
					<form:label path="password">Password:</form:label>
					<form:errors path="password" class="text-danger"/>
					<form:input path="password" type="password" class="form-control" />
				</div>
				<div class="mb-3">
					<form:label path="confirm">Confirm PW:</form:label>
					<form:errors path="confirm" class="text-danger"/>
					<form:input path="confirm" type="password" class="form-control" />
				</div>
				<input type="submit" value="Register" class="btn btn-primary"/>
			</form:form>
	</main>
</body>
</html>