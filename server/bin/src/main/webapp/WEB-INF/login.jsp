<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Login</title>
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
<main class="text-center">
		
		<form:form action="/login" method="post" modelAttribute="newLogin">
					<div class="my-5">
						<form:label path="email">Email Address:</form:label>
						<form:errors path="email" class="text-danger"/>
						<form:input path="email" type="email"/>
					</div>
					<div class="mb-3">
						<form:label path="password">Password:</form:label>
						<form:errors path="password" class="text-danger"/>
						<form:input path="password" type="password"/>
					</div>
					<div>
						<input type="submit" value="Login" class="btn btn-sm mt-3 bg-primary text-light" />
					</div>
					<div>
						<p>Don't have an account?<a href="/register">Register Here!</a></p>
					</div>
		</form:form>

</main>
</body>
</html>