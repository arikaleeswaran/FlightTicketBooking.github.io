function values()
        {
			var from = document.getElementById("fc").value;	
			localStorage.setItem("fromplace",from);
			var to = document.getElementById("tc").value;
			localStorage.setItem("toplace",to);
			var date = document.getElementById("dpt").value;
			localStorage.setItem("ddate",date);
			var passengerA = document.getElementById("count-a").value;
			var passengerC = document.getElementById("count-c").value;
			localStorage.setItem("passenger",parseInt(passengerA)+parseInt(passengerC)); 
			var passenger = (parseInt(passengerA)+parseInt(passengerC));
			localStorage.setItem("price",(parseInt(parseInt(passenger)*10000)));
			if(from == to)
			{
				alert("Origin and Destination should not be same!");
				return false;
			}
			else{
				true;
			}
		 }