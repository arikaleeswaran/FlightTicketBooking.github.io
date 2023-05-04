        alert("Login for continue ");
		 	
		var Nurname = localStorage.getItem("uname");
		var Npass = localStorage.getItem("password");
		console.log(Nurname);
		console.log(Npass);
		
		function validate()
		{
			var username = document.getElementById("uname").value;
			localStorage.setItem("urname",username);
			var password = document.getElementById("psw").value;
			localStorage.setItem("passwd",password);
			console.log(username);
			console.log(password);
	
		if(username == Nurname && password == Npass)
		{
			console.log("Welcome to Speicejet");
			true;
		}
		else if( username.trim() == "" || password.trim() == "")
		{
			alert("No blank values allowed");
			return false;
		}
		else
		{
			alert("Please enter valid values");
			return false;
		}
		
		}