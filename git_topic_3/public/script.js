$(document).ready(function() {
	$("form").submit(function(event) {
		event.preventDefault();
		var username = $("#username").val();
		var password = $("#password").val();
		$.post("/login", {username: username, password: password})
			.done(function(data) {
				if (data === "user1") {
					window.location.href = "/user1";
				} else if (data === "user2") {
					window.location.href = "/user2";
				} else {
					alert("Invalid username or password!");
				}
			});
	});
});
