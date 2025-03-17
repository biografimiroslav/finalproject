const searchTime = document.getElementsByClassName("search_img");
let time = document.getElementById("calc_time");
const resultForTime = document.getElementById("resoult");
let userName; 

function saveUser() {
  input = document.getElementById("inpUser").value;
  
  if (input === "") {
    alert("Ведіть своє ім'я")
    return;
  }
  
  userName = input 
  
  document.getElementById("userName").textContent = "Привіт, " + userName;
  document.getElementById("myModal").style.display = "none";
  
}



function showResult(text, elementId, color) {
    const resultDiv = document.getElementById(elementId);
    resultDiv.innerHTML = text;
    resultDiv.style.color = color;
}

function checkYear() {
  let year = document.getElementById("yearInput").value.trim();

  if (year === "" || !/^\d+$/) {
      return showResult("Введіть правильний рік!", "leapYearResult", "red");
  }

  year = parseInt(year);
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  const message = `${year} - ${isLeap ? "Ви народилися у високосний рік!" : "не високосний рік."}`;
  const color = isLeap ? "green" : "red"; 

  showResult(message, "leapYearResult", color);
}



function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomaizer() {
  let randomNumber = getRandomNumber(1, 10);
  let userValue = parseInt(document.getElementById("random-inp").value.trim());

  if (userValue === "")  {
    document.randomaizerResoult.textContent = ".";
    return;
  }

  if (userValue === randomNumber) {
    showResultForRandomaizer("Ви вгадали!", "randomaizerResoult", "green");
  } else {
    showResultForRandomaizer(`Не вгадали! Загадане число: ${randomNumber}`, "randomaizerResoult", "red");
  }
}

function showResultForRandomaizer(text, elementId, color) {
  const resultDiv = document.getElementById(elementId);
  resultDiv.innerHTML = text;
  resultDiv.style.color = color;
}


function ChoseUserRPS(UserChose) {
  const resultRPS = document.getElementById("resultRPS")
  const choices = ['Камінь', 'Ножиці', 'Папір'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';

  if (UserChose === computerChoice) {
    result = 'Нічия';
    resultRPS.style.color = "black"
  } else if (
    (UserChose === "Камінь" && computerChoice === "Ножиці") ||
    (UserChose === "Ножиці" && computerChoice === "Папір") ||
    (UserChose === "Папір" && computerChoice === "Камінь")
  ) {
    result = 'Ви виграли раунд!';
    resultRPS.style.color = "green"
  } else {
    result = 'Ви програли раунд!';
    resultRPS.style.color = "red"
  }

  resultRPS.innerHTML = result;

  console.log(UserChose, computerChoice, result);
}


function calc(UserChhoise, result) {
  let resultINP = document.getElementById("calcResult")
  let firstItem = parseInt(document.getElementById("firstItem").value)
  let secondItem = parseInt(document.getElementById("secondItem").value)

  switch (UserChhoise) {
    case "+":
      result = firstItem + secondItem
      break;

    case "*":
      result = firstItem * secondItem
      break;  

    case "-":
      result = firstItem - secondItem
      break; 
      
    case "/":
      result = firstItem / secondItem
      break;  

  
    default:
      break;  
  }

  resultINP.value = result
}


function convertMinutes() {
  let timeValue = Number.parseInt(time.value, 10);
  
  if (isNaN(timeValue) || timeValue < 0) {
    resultForTime.textContent = "Введіть коректне число!";
    resultForTime.style.color = "red";
    return;
  }

  let hours = Math.floor(timeValue / 60);
  let minutes = timeValue % 60;
  resultForTime.textContent = `${hours} год. ${minutes} хв.`;
}

document.getElementById("convert_btn").addEventListener("click", function() {
  convertMinutes();
});


function hightNum() {
  let a = 1;
  let b = 2;
  let c = 3;
  const hightNum = document.getElementById("highNum")

  let max = Math.max(a, b, c)

  hightNum.textContent = max
}

