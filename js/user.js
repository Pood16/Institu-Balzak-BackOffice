document.getElementById('logout-button').addEventListener('click', ()=> {
  
  sessionStorage.clear();
  
  location.reload();
});
document.addEventListener("DOMContentLoaded",function(){
  if(!sessionStorage.getItem("connected")){
    window.location.href = 'login.html'
  }
  
});

// From HTML 
const levelButtons = document.querySelectorAll('.btn');
const subLevelButtons = document.querySelectorAll('.sub-btn');
const questionContainer = document.getElementById('questions-container');
const questionStructure = document.getElementById('question-structure');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('header_score');
const nextReplayButton = document.getElementById('next-replay');
const subLevelButtonsContainer = document.getElementById('sub-levels');
let categoryType = document.getElementById('category-type');
let updateSelectedLevelInCategories = document.getElementById('selected-level');
let connectedUser = document.getElementById("username-bar");
let activeUserInformation = JSON.parse(sessionStorage.getItem("connected"));
connectedUser.innerText = activeUserInformation.username;
let activeUserUserName = activeUserInformation.username;


// Variables
let userProgress;
let score = 0;
let timer = 10;
let currentIndex = 0;
let currentCategory;
let currentLevel;
let timerId;
let questions = [];
let activeIndex;
let questionStartTime;
let userSaving = JSON.parse(localStorage.getItem("saveUserQuestionStatu")) || [];

// from local storage

  let questionns = JSON.parse(localStorage.getItem("questions")) || [];

const users = JSON.parse(localStorage.getItem("utilisateurs")) || [];
for (let i = 0; i < users.length; i++) {
  if (users[i].username === activeUserUserName){
      userProgress = users[i];
      activeIndex = i;
      break;
  }
}

// levels
levelButtons.forEach(button => {
  
  button.addEventListener('click', (event) => {
    const selectedLevel = event.target.innerText;
    
    if (selectedLevel === userProgress.currentLevel) {
      currentLevel = selectedLevel;
      updateSelectedLevelInCategories.innerText = `niveau actuelle :${currentLevel}.`;
      subLevelButtonsContainer.classList.remove('addRemove');
    } else {
      alert('Complete the current level to unlock this one.');
    }
  });
});

// Sub-levels
subLevelButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    currentCategory = event.target.innerText;
    categoryType.innerText = `categorie actuelle : ${currentCategory}.`;

    const levelData = questionns.find(q => q.level === currentLevel);
    

    if (levelData) {
      questions = levelData.categories[currentCategory] || [];
      
    } else {
      questions = [];
    }

    if (questions.length > 0) {
      currentIndex = 0;
      score = 0;
      questionContainer.classList.remove('addRemove');
      startQuiz();
    } else {
      alert('Pas de questions pour cette categorie.');
    }
  });
});

// Start the quiz
function startQuiz() {
  showQuestion();
  startTimer();
}

// Display question
function showQuestion() {
  
  if (currentIndex < questions.length) {
    questionStructure.innerHTML = `
      <h2 id="question">${currentIndex + 1}. ${questions[currentIndex].question}</h2>
      <div id="answer-buttons">
        ${questions[currentIndex].answers.map((answer, index) => `
          <button class="mt-8 w-11/12 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 border border-blue-700 rounded text-left" onclick="checkAnswer(${index})">
            <span class="text-2xl">${answer.text}</span>
          </button>
        `).join('')}
      </div>
    `;
  }
}

// Check the users answer
function checkAnswer(selectedIndex) {
  clearInterval(timerId);
  const answerState = questions[currentIndex].answers[selectedIndex].correct;
  if (answerState) {
    score++;
    scoreElement.textContent = `Score: ${score} / ${questions.length}`;
  }
  document.querySelectorAll('#answer-buttons button').forEach(button => {
    button.disabled = true;
    button.classList.add('opacity-60', 'cursor-not-allowed', 'text-black');
  });
 
  userSaving.push({
    level: currentLevel,
    category: currentCategory,
    question: questions[currentIndex].question,
    chosenAnswer: questions[currentIndex].answers[selectedIndex].text,
    answerState: answerState, 
    answerTime : 10 - parseInt(timerElement.textContent.replace(/[^0-9]/g, ''), 10)                                          
  });
  localStorage.setItem("saveUserQuestionStatu", JSON.stringify(userSaving));
  nextReplayButton.classList.remove('addRemove');
}

// next button
nextReplayButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    nextReplayButton.classList.add('addRemove');
    showQuestion();
    startTimer();
  } else {
    completeQuiz();
  }
});

// timer
function startTimer() {
  clearInterval(timerId);
  timer = 10;
  timerElement.textContent = `Time left: ${timer}s`;
  timerId = setInterval(() => {
    timer--;
    timerElement.textContent = `Time left: ${timer}s`;
    if (timer === 0) {
      clearInterval(timerId);
      nextReplayButton.classList.remove('addRemove');
      userSaving.push({
        level: currentLevel,
        category: currentCategory,
        question: questions[currentIndex].question,
        chosenAnswer: "pas de reponce",
        answerState: false, 
        answerTime : 10
      });
      localStorage.setItem("saveUserQuestionStatu", JSON.stringify(userSaving));
    }
  }, 1000);
}

// Complete the quiz - update progress
function completeQuiz() {
  alert(`Le test est terminé! votre Score: ${score} / ${questions.length}`);
 
  if(score === questions.length){
      userProgress.levels[currentLevel][currentCategory][0].status = true;
    }else{
    userProgress.levels[currentLevel][currentCategory][0].tentative += 1; 
  }
  userProgress.levels[currentLevel][currentCategory][0].score = score;

  // open level
  const allComplete = Object.values(userProgress.levels[currentLevel]).every(
    category => category[0].status
  );

  if (allComplete) {
    const nextLevel = openNextLevel(currentLevel);
    if (nextLevel) {
      userProgress.currentLevel = nextLevel;
      alert(`Le niveau ${nextLevel} est ouvert.`);
    }
    levelButtons.forEach(button =>{
      if (button.value === nextLevel){
        let parentDiv = button.parentElement;
        parentDiv.querySelector(".fa-lock-open").classList.remove("addRemove");
        parentDiv.querySelector(".fa-lock").classList.add("addRemove");
      }
    });
    
    
  }

  // localStorage.setItem('userProgress', JSON.stringify(userProgress));
  
  users[activeIndex] = userProgress;
  localStorage.setItem("utilisateurs", JSON.stringify(users));
  
  questionContainer.classList.add('addRemove');
}

// Get the next level
function openNextLevel(currentLevel) {
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const currentIndex = levels.indexOf(currentLevel);
  return levels[currentIndex + 1];
}
