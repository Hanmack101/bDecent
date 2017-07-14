//------LATEST VERSION------//
console.log("test test test")

//select all images
var carObjects = document.getElementsByClassName("li_1");
//reminder carObjects is an array --> console.log(carObjects[1]);
var icounter = 0;

//set hidden to all but first item in image array
for (i=1; i< carObjects.length; i++) {
	var individualObject = carObjects[i];
	individualObject.classList.add("hidden");
	console.log(individualObject)
}
//adding in buttons for 1st set 
var buttons = '<div id="controls"><p id="control-prev" class="btn btn-primary">Previous slide</p><p id="control-next" class="btn btn-primary">Next slide</p></div>'
carousel.insertAdjacentHTML("afterend", buttons)

//working loop for button functionaity first forwards set
document.getElementById("control-next").addEventListener(
	"click",
	function goingforwards(event) {
				//shows the next item
		carObjects[icounter].classList.add("hidden")
		icounter=(icounter+1)%6;
		carObjects[icounter].classList.remove("hidden")
	    }
	);	

//working loop for button functionaity first backawards set

document.getElementById("control-prev").addEventListener(
	"click",
	function goingBackwards(event) {
		carObjects[icounter].classList.add("hidden")
		icounter=((icounter-1)+6)%6;
		carObjects[icounter].classList.remove("hidden")
	    }
    );




//---------work for SECOND SET of everything----------------//
//hide all irrelevant objects
var carObjects2 = document.getElementsByClassName("li_2");

var icounter_2 = 0;
console.log(carObjects2.length);
//setting hidden
for (i=1; i< carObjects2.length; i++) {
	var individualObject2 = carObjects2[i];
	individualObject2.classList.add("hidden");
	console.log(individualObject2)
}
//adding buttons for second set - wrong position
var buttons = '<div id="controls"><p id="control-prev2" class="btn btn-primary">Previous slide2</p><p id="control-next2" class="btn btn-primary">Next slide2</p></div>'
carousel2.insertAdjacentHTML("afterend", buttons)

//working loop - control next	
document.getElementById("control-next2").addEventListener(
	"click",
	function goingforwards(event) {
				//shows the next item
		carObjects2[icounter_2].classList.add("hidden")
		icounter_2=(icounter_2+1)%6;
		carObjects2[icounter_2].classList.remove("hidden")

		//console.log(icounter);
		//console.log(i);
		//console.log(carObjects[icounter]);
	}
	);
//working loop - control previous

document.getElementById("control-prev2").addEventListener(
	"click",
	function goingBackwards(event) {
		carObjects2[icounter_2].classList.add("hidden")
		icounter_2=((icounter_2-1)+6)%6;
		//console.log(icounter);
		carObjects2[icounter_2].classList.remove("hidden")
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
//---- show/hide experiment ----//
// var unit=document.getElementById("carousel");
// var title =
// console.log(unit);
// //console.log(title.innerText);
//
// unit.addEventListener(
// 	"click",
// 	function hide(event) {
// 		carousel.classList.add("hidden")
// 		console.log("bye")
//
// 	}
// );
// console.log(div.classList.contains("row-fluid"));
//
// if (div.classList.contains("row-fluid")) {
// 	insertAdjacentHTML(
// 			"afterbegin",
// 			"<h2>you're in trouble now</h2>");
// }
//
//



