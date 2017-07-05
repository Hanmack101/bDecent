//------LATEST VERSION------//
console.log("test test test")
//select all images
var carObjects = document.getElementsByClassName("li_1");
console.log(carObjects);
 var icounter = 0;
console.log(carObjects.length);
//setting hidden
for (i=1; i< carObjects.length; i++) {
	var individualObject = carObjects[i];
	individualObject.addClass("class","hidden");
	console.log(individualObject)
}
//adding in buttons
var buttons = '<div id="controls"><p id="control-prev" class="btn btn-primary">Previous slide</p><p id="control-next" class="btn btn-primary">Next slide</p></div>'
carousel.insertAdjacentHTML("afterend", buttons)


	

//working loop	
document.getElementById("control-next").addEventListener(
	"click",
	function goingforwards(event) {
				//shows the next item
		carObjects[icounter].classList.add("hidden")
		icounter=(icounter+1)%6;
		carObjects[icounter].classList.remove("hidden")

		//console.log(icounter);
		//console.log(i);
		//console.log(carObjects[icounter]);
	}
	);	

//working - no looping

document.getElementById("control-prev").addEventListener(
	"click",
	function goingBackwards(event) {
		carObjects[icounter].classList.add("hidden")
		icounter=((icounter-1)+6)%6;
		//console.log(icounter);
		carObjects[icounter].classList.remove("hidden")
		// console.log(icounter);
		// console.log(i);
		// console.log(carObjects[icounter]);
		//shows the next item
	
	}

	);

// modular division of this instance works as you have (for forwards), at place 3
//3%6 = 3 so counter is at 3. There is no need to cap to avoid -11 etc bc when
//you divide 6%6 you get 0 and so it jumps back and the process starts again.
//it's harder going backwards becasue you get to your last good one (0) and THAT'S
//the trigger to go the the last photo so you have (0)-1 = -1 + 6 = 5%6. You go back to 5 
//but 'up' to 0. 

var unit=document.getElementById("carousel");
var title = 
console.log(unit);
//console.log(title.innerText);

unit.addEventListener(
	"click",
	function hide(event) {
		carousel.classList.add("hidden")
		console.log("bye")

	}
);
// console.log(div.classList.contains("row-fluid"));
// 
// if (div.classList.contains("row-fluid")) {
// 	insertAdjacentHTML(
// 			"afterbegin",
// 			"<h2>you're in trouble now</h2>");
// }
// 
// 




