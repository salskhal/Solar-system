<!-- This example requires Tailwind CSS v2.0+ -->
<template>
   <!-- This example requires Tailwind CSS v2.0+ -->
   <nav class="navbar navbar-full navbar-dark bg-primary">
	<button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#mainNavbarCollapse">
	&#9776;
	</button>
	<a class="navbar-brand" href="#">
	<img class="img-rounded" src="https://placehold.it/32/ffffff?text=B">
	</a>
	<div class="collapse navbar-toggleable-md" id="mainNavbarCollapse">
		<ul class="nav navbar-nav pull-lg-right">
			<li class="nav-item">
				<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">About</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Blog</a>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link" id="navbarDropdown1" data-target="#" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
				<ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
					<li><a class="dropdown-item" href="#">Action</a></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#">Contact</a>
			</li>
		</ul>
	</div>
</nav>

  </template>
  
  <script setup>
 
  </script>

  <style scoped>
  @media (max-width: 62em) {
	.navbar-nav {
		padding-top: .425rem;
		padding-left: 0.75rem;
	}
	.navbar-nav .nav-item {
		float: none;
	}
	.navbar-brand {
		float: right;
	}
	.navbar-brand,
	.navbar-nav .nav-item {
		display: block;
	}
	.navbar-nav .nav-item + .nav-item {
		margin-left: 0;
	}
	.dropdown-menu {
		position: relative;
		float: none;
	}
}
  </style>