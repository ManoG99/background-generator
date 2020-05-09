var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button1");

var style = getComputedStyle(body);
var color3 = style.backgroundImage; //getPropertyValue("background-image")
console.log(color3);

css.textContent = color3;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function randomNumber(length){
	var retr = "";
	var char = "abcdef0123456789";
	var charLength  = char.length;
	for (var i =0; i<length; i++){
		retr += char.charAt(Math.floor(Math.random() * charLength));
	}
	
	return retr;
}

function setGradientRandom(){
	body.style.background = "linear-gradient(to right, #" + randomNumber(6)+" , #" + randomNumber(6)+")";
	css.textContent = body.style.background + ";";
}

button.addEventListener("click",setGradientRandom);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
console.log(randomNumber(6));