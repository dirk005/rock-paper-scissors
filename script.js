// Cashing DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// Get random choice for computer
const getComputerChoice = () => {
	const choices = ["rock", "paper", "scissors"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
//Convert word
const convertWord = (rps) =>{
	return rps === 'rock'? "Rock" : rps === 'paper' ? "Paper" : "Scissors"
}

//Win
const win = (user , computer) =>{
	userScore++;
	userScore_span.innerHTML = userScore;	
	const smallUserWord = "user".fontsize(2).sub();
	const smallCompWord = "comp".fontsize(2).sub();
	const userChoice_div = document.getElementById(user);
	result_p.innerHTML = `${convertWord(user)}${smallUserWord} beats ${convertWord(computer)}${smallCompWord} . You win!`;
	userChoice_div.classList.add('green-glow');
	setTimeout(()=>	userChoice_div.classList.remove('green-glow'),400)
}

//lose
const lose = (user , computer) => {
	computerScore++;	
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(2).sub();
	const smallCompWord = "comp".fontsize(2).sub();
	const userChoice_div = document.getElementById(user);
	result_p.innerHTML = `${convertWord(user)}${smallUserWord} loses to ${convertWord(computer)}${smallCompWord} . You lost...`;
	userChoice_div.classList.add('red-glow');
	setTimeout(()=>	userChoice_div.classList.remove('red-glow') ,400)
}

// draw
const draw = (user , computer) => {
	const smallUserWord = "user".fontsize(2).sub();
	const smallCompWord = "comp".fontsize(2).sub();
	const userChoice_div = document.getElementById(user);
	result_p.innerHTML = `${convertWord(user)}${smallUserWord} equals ${convertWord(computer)}${smallCompWord} . It's a draw.`;
	userChoice_div.classList.add('gray-glow');
	setTimeout(()=>	userChoice_div.classList.remove('gray-glow'),400)
}

// Game functions
const game = (userChoice) => {
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win(userChoice ,computerChoice);
			break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
			lose(userChoice ,computerChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw(userChoice ,computerChoice);
			break;
	}
}

const main = () => {
	//add click event listeners
	rock_div.addEventListener('click',() =>	game("rock"))
	paper_div.addEventListener('click',() =>game("paper"))
	scissors_div.addEventListener('click',() =>	game("scissors"))
}

main();

