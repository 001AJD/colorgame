var numSquares = 6
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("resetbtn")
var modeButtons = document.querySelectorAll(".mode");


init();

function init()
{
	setUpModeButtons();
	setUpSquares();		
	reset();
}

function setUpSquares()
{
	for(var i = 0; i <squares.length; i++)
	{	
		squares[i].addEventListener("click",function(){

			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor)
			{
				
				messageDisplay.textContent = "correct!";
				resetBtn.textContent = "Play Again!";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else
			{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "try again";
			}
		});
	}
}

function setUpModeButtons()
{
	//mode buttons eventlisteners
	for(var i = 0; i < modeButtons.length; i++)
	{
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}


function reset()
{
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetBtn.textContent = "New Colors";
	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		}
		else
		{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";	
}



resetBtn.addEventListener("click",function(){reset();});



function changeColor(color)
{
	for(var i = 0; i < colors.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor()
{
	var randomNum = Math.floor(Math.random() * colors.length);
	return colors[randomNum];
}

function generateRandomColors(num)
{
		var arr = [];
		for(var i =0; i < num; i++)
		{
			arr.push(randomColor());

		}

		return arr;

}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}