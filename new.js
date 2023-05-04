function input()
			{
				var name = document.getElementById("fname").value;
				localStorage.setItem("uname",name);
				var passwrd= document.getElementById("password").value;
				localStorage.setItem("password",passwrd); 
			}