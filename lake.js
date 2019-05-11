var eq = {
	fishz: 0
};
var czas;
var bob;
var bite;
var reel;
var species;
var loc=0;

	function bobber() {
		
		if (reel===1) {
			if (bob>bite-2) {
				whatAmI();
			document.getElementById("bobber").innerHTML="You've got a fish! It is "+species+"!";
			eq.fishz++;
			shoMeGoodz();
			document.getElementById("reelin").innerHTML="";
			document.getElementById("cast").innerHTML='<button onclick="fishNow();" >Cast!</button>';
			reel=0;
			return;
			} else {
				document.getElementById("bobber").innerHTML="There was no fish. What were you thinking?";
				document.getElementById("cast").innerHTML='<button onclick="fishNow();" >Cast!</button>';
				document.getElementById("reelin").innerHTML="";
				return;
			}
		}
		bob++;
		
		if ((bob===bite)||(bob===bite+1)) {
			document.getElementById("bobber").innerHTML="Fish is in range! Reel in this bad boy!";
			document.getElementById("cast").innerHTML='<button onclick="reelin();" >Reel!</button>';
		} else if (bob>bite+1) { 
			document.getElementById("bobber").innerHTML="You've missed your chance, you slacker!";
				document.getElementById("cast").innerHTML='<button onclick="fishNow();" >Cast!</button>';
			return;
		}
		
	if (bob!=czas) setTimeout("bobber()", 1000);
	}
	
	function fishNow() {
		bite=parseInt(Math.random()*(15-3)+3);
		reel=0;
		bob=0;
		czas=16;
			document.getElementById("bobber").innerHTML="Bobber is floating still. Wait for it...";
			document.getElementById("cast").innerHTML='<button onclick="reelin();" >Reel!</button>';
		bobber();
	}
	
	function reelin() {
		reel=1;
		document.getElementById("reelin").innerHTML="<i>reelin</i>";
	}
	
	function shoMeGoodz() {
		document.getElementById("bag").innerHTML="You have "+eq.fishz+" <b><i>fish</i></b>!";
	}
	
	function whatAmI() {
		switch(loc) {
			case 0: species="yo momma";
			break;
		}
	}