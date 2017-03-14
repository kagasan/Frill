function Frill(){
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext('2d');
	canvas.width = 500;
	canvas.height = 500;
	
	ctx.fillStyle = 'rgb(200,200,200)';
	ctx.fillRect(0, 0, 500, 500);
	
	ctx.lineWidth = 1;
	ctx.strokeStyle='rgb(0,0,0)';
	ctx.beginPath();
	
	for(var t=0, flg = 1;t<Math.PI*2;t+=0.01){
		
		var a = 20;
		var x = 15*Math.sin(t*a)+200;
		var y = 500/(2.0*Math.PI)*(t-Math.sin(2*t*a)/a);
		
		var rad = 2.0*Math.PI*y/500;
		var x2 = Math.cos(rad) * x + 250;
		var y2 = Math.sin(rad) * x + 250;
		
		if(flg){
			flg = 0;
			ctx.moveTo(x2, y2);
		}
		else{
			ctx.lineTo(x2, y2);
		}
	}
	ctx.stroke();
	
	ctx.fillStyle = 'rgb(255,0,0)';
	
	for(var t=0, flg = 1;t<Math.PI*2;t+=0.01){
		var a = 20;
		var x = 15*Math.sin(t*a)+200;
		var y = 500/(2.0*Math.PI)*(t-Math.sin(2*t*a)/a);
		
		var rad = 2.0*Math.PI*y/500;
		var x2 = Math.cos(rad) * x + 250;
		var y2 = Math.sin(rad) * x + 250;
		
		if(Math.sin(2*t*a)>=0.9){
			ctx.beginPath();
			ctx.arc(x2, y2, 3, 0, Math.PI*2, true);
			ctx.fill();
		}
	}
	
	
	
	
	
	document.getElementById("Frill").innerHTML = "<img src='" + canvas.toDataURL() + "'>";
}
