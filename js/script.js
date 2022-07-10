const API = "https://api.adviceslip.com/advice";
const adviceId = document.querySelector(".advice__id>span");
const adviceText = document.querySelector(".advice__text");
const adviceGeneratorButton = document.querySelector(".advice__generator");

/* async function randomAdvice() {
	adviceId.textContent = "loading...";
	adviceText.textContent = "loading...";
	const request = await fetch("https://api.adviceslip.com/advice");
	const response = await request.json();
	console.log('request :>> ', request);
	console.log('response :>> ', response);
	setTimeout(() => {
		adviceId.textContent = response.slip.id;
		adviceText.textContent = response.slip.advice;
	}, 2500);
	//console.log('response :>> ', response.slip);
} */
//adviceGeneratorButton.addEventListener("click", randomAdvice);
adviceGeneratorButton.addEventListener("click", async () => {
	adviceId.textContent = "loading...";
	adviceText.textContent = "loading...";
	await fetch("https://api.adviceslip.com/advice").then((response) => {
		//response.json();
		console.log("response.json() :>> ", response.json());

		setTimeout(() => {
			adviceId.textContent = response.slip.id;
			adviceText.textContent = response.slip.advice;
		}, 2500);
	});
	//console.log('response :>> ', response.slip);
});
//setInterval(randomAdvice, 3000);
