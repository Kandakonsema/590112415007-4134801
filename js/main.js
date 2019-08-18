function getData(){
		value = document.getElementById('in1').value;

		showData(value);
	};

	function showData(msg){
		document.getElementById('lb1').innerHTML = msg;
	};