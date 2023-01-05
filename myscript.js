let playerScore = 0;
let pcScore = 0;
let winstreak = 0;

document.getElementById("rock").addEventListener("click", function() { showPick("rock"); });
document.getElementById("paper").addEventListener("click", function() { showPick("paper"); });
document.getElementById("scissors").addEventListener("click", function() { showPick("scissors"); });
document.getElementById("reset").addEventListener("click", reset);

function showPick(pick) {
	let playPick = pick;
	let pcPick1 = pcPick();
	let container = document.getElementById("game");
	let childdiv = document.getElementById("child");
	let newdiv = document.createElement("div");
	newdiv.class = "match";
	newdiv.innerText =
		`your pick is ${playPick}
    the pc picked ${pcPick1}
    the point goes to ${scoreEvaluation(pick, pcPick1)}`;
	container.insertBefore(newdiv, childdiv);
}

function pcPick() {
	const options = ["rock", "paper", "scissors"];
	const random = Math.floor(Math.random() * options.length);
	return (options[random]);
}

function reset() {
	playerScore = 0;
	pcScore = 0;
	winstreak = 0;
	infanticide();
	update();
}

function infanticide() {
	const parent = document.getElementById("game");
	const children = parent.children;
	while (children.length > 1) {
		children[0].remove();
	}
}

function update() {
   document.getElementById('result-pc').innerHTML = pcScore;
	document.getElementById('result-player').innerHTML = playerScore;
	document.getElementById('win-streak').innerHTML = winstreak; 
}


function scoreEvaluation(pick, pcPick) {
	switch (pick) {
		case "rock":
			if (pcPick == "rock") {
				return "nobody! it's a tie!";
			} else if (pcPick == "paper") {
				pcScore += 1;
				winstreak = 0;
				update();
				return "pc!";
			} else {
				playerScore += 1;
				winstreak += 1;
				update();
				return "you!";
			};
		case "paper":
			if (pcPick == "paper") {
				return "nobody! it's a tie!";
			} else if (pcPick == "scissors") {
				pcScore += 1;
				winstreak = 0;
				update();
				return "pc!";
			} else {
				playerScore += 1;
				winstreak += 1;
				update();
				return "you!";
			};
		case "scissors":
			if (pcPick == "scissors") {
				return "nobody! it's a tie!";
			} else if (pcPick == "rock") {
				pcScore += 1;
				winstreak = 0;
				update();
				return "pc!";
			} else {
				playerScore += 1;
				winstreak += 1;
				update();
				return "you!";
			};
	}
}
