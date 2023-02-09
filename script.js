const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
const stepEl = document.querySelectorAll(".step")
const progressbarEl = document.querySelector(".progress-front")

let currentCheck = 1;

nextBtn.addEventListener('click', () => {
	currentCheck++;
	if(currentCheck > stepEl.length) {
		currentCheck = stepEl.length
	}
	updateCheck()
})

prevBtn.addEventListener('click', () => {
	currentCheck--;
	if(currentCheck < 1) {
		currentCheck = 1
	}
	updateCheck()
})

function updateCheck() {
	stepEl.forEach((step, index) => {
		if(index < currentCheck){
			step.classList.add("check")
			step.innerHTML= `<i class="fa fa-check" aria-hidden="true"></i>
			<small>${index === 0 ? "Start" 
			: index === stepEl.length -1 ? "Final" 
			: "Step " + index}</small>`

		} else {
			step.classList.remove("check");
			step.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`
		}
	})
	const checkEl = document.querySelectorAll(".check")
	progressbarEl.style.width= ((checkEl.length - 1) / (stepEl.length -1)) * 100 + "%";

	if(currentCheck === 1){
		prevBtn.disabled = true;
	} 
	else if(currentCheck === stepEl.length){
		console.log(nextBtn.disabled = true)
		nextBtn.disabled = true;
	} else{
		prevBtn.disabled = false;
		nextBtn.disabled = false;
	}
}