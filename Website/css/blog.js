//deze code niet aanraken het zorgt voor de fade effect op de blogteskten

const myText = document.getElementById("myText1");
const myButtonMore = document.getElementById("myButtonMore");
const myButtonLess = document.getElementById("myButtonLess");
const myBackground1 = document.getElementById("text-background1");
const myBackground = document.getElementById("background");
const myDiv1 = document.getElementById("div2");

const text2 = document.getElementById("text2");
const more2 = document.getElementById("more2");
const less2 = document.getElementById("less2");
const bBackground2 = document.getElementById("background2");
const myDiv3 = document.getElementById("div3");

let textVisible = false;

myButtonMore.addEventListener("click", () => {
	myText.style.height = "auto";
	myButtonMore.classList.add("hidden");
	myButtonLess.classList.remove("hidden");
	myBackground1.classList.remove("hidden");
	myDiv1.classList.add("height");
});

myButtonLess.addEventListener("click", () => {
	myText.style.height = "16.5em";
	myButtonMore.classList.remove("hidden");
	myButtonLess.classList.add("hidden");
	myBackground1.classList.add("hidden");
	myDiv1.classList.remove("height");
});

more2.addEventListener("click", () => {
	text2.style.height = "auto";
	more2.classList.add("hidden2");
	less2.classList.remove("hidden2");
	background2.classList.remove("hidden2");
	text2.classList.add("height2");
});

less2.addEventListener("click", () => {
	text2.style.height = "16.5em";
	more2.classList.remove("hidden2");
	less2.classList.add("hidden2");
	background2.classList.add("hidden2");
	myDiv3.classList.remove("height2");
});
