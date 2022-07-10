const app = Vue.createApp({
	data() {
		return {
			adviceList: [],
			adviceId: 117,
			adviceText:
				"It is easy to sit up and take notice, what's difficult is getting up and taking action.",
			API: "https://api.adviceslip.com/advice",
		};
	},
	methods: {
		async fetchAdvice() {
			await fetch(this.API)
				.then((response) => response.json())
				.then((data) => {
					//console.log("data :>> ", data);
					this.adviceId = data.slip.id;
					this.adviceText = data.slip.advice;
				});
		},
	},
});

app.mount("#app");
