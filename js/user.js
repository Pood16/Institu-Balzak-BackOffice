document.getElementById('logout-button').addEventListener('click', function() {
  sessionStorage.clear();
  location.reload();
});

document.addEventListener("DOMContentLoaded", function() {
  if (sessionStorage.getItem("connected") === null) {
    window.location.href = 'login.html';
    return;
  }
  start();
});

function start() {
  // DOM 
  const levelButtons = document.querySelectorAll('.btn');
  const subLevelButtons = document.querySelectorAll('.sub-btn');
  const questionContainer = document.getElementById('questions-container');
  const questionStructure = document.getElementById('question-structure');
  const timerElement = document.getElementById('timer');
  const scoreElement = document.getElementById('header_score');
  const nextReplayButton = document.getElementById('next-replay');
  const subLevelButtonsContainer = document.getElementById('sub-levels');
  const categoryType = document.getElementById('category-type');
  const updateSelectedLevelInCategories = document.getElementById('selected-level');
  const connectedUser = document.getElementById("username-bar");

  // Variables
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  let userProgress;
  let activeIndex;
  let score = 0;
  let timer = 10;
  let currentIndex = 0;
  let currentCategory = '';
  let currentLevel = '';
  let timerId;
  let questions = [];

  // localStorage
  let questionns = JSON.parse(localStorage.getItem("questions")) || [];
  let activeUserInformation = JSON.parse(sessionStorage.getItem("connected"));
  let users = JSON.parse(localStorage.getItem("utilisateurs")) || [];
  let userSaving = JSON.parse(localStorage.getItem("saveUserQuestionStatu")) || [];

  // update user name in the UI
  connectedUser.innerText = activeUserInformation.username;

  // active user progress
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === activeUserInformation.username) {
      userProgress = users[i];
      activeIndex = i;
      break;
    }
  }
  console.log(userProgress);
  //updates
  updateLevelStyles();
  updateCategoryStyles();

  function updateLevelStyles() {
    for (let i = 0; i < levelButtons.length; i++) {
      let button = levelButtons[i];
      let buttonText = button.textContent.trim();
      let currentLevelIndex = levels.indexOf(userProgress.currentLevel);
      let buttonLevelIndex = levels.indexOf(buttonText);
      
      button.classList.remove("bg-red-500", "hover:bg-red-600", "active:bg-red-700");
      button.classList.remove("bg-green-500", "hover:bg-green-600", "active:bg-green-700");
      
      if (buttonLevelIndex <= currentLevelIndex) {
        button.classList.add("bg-green-500", "hover:bg-green-600", "active:bg-green-700");
      } else {
        button.classList.add("bg-red-500", "hover:bg-red-600", "active:bg-red-700");
      }
    }
  }

  function updateCategoryStyles() {
    for (let i = 0; i < subLevelButtons.length; i++) {
      let button = subLevelButtons[i];
      let category = button.textContent.trim();
      
      button.classList.remove("bg-green-500", "hover:bg-green-600", "active:bg-green-700");
      button.classList.remove("bg-rose-500", "hover:bg-rose-600", "active:bg-rose-700");
      
      if (currentLevel && userProgress.levels[currentLevel]) {
        if (userProgress.levels[currentLevel][category]) {
          if (userProgress.levels[currentLevel][category][1]  ) {
            button.classList.add("bg-green-500", "hover:bg-green-600", "active:bg-green-700");
          } else {
            button.classList.add("bg-rose-500", "hover:bg-rose-600", "active:bg-rose-700");
          }
        }
      } else {
        button.classList.add("bg-rose-500", "hover:bg-rose-600", "active:bg-rose-700");
      }
    }
  }

  

  // questions array length
  function totalQuestionsForCategory(level, category) {
    for (let i = 0; i < questionns.length; i++) {
      if (questionns[i].level === level) {
        if (questionns[i].categories[category]) {
          return questionns[i].categories[category].length;
        }
      }
    }
    return 0;
  }

  // levels
  for (let i = 0; i < levelButtons.length; i++) {
      levelButtons[i].addEventListener('click', function(event) {
      let selectedLevel = event.target.innerText;
      let currentLevelIndex = levels.indexOf(userProgress.currentLevel);
      let selectedLevelIndex = levels.indexOf(selectedLevel);
      
      if (selectedLevelIndex <= currentLevelIndex) {
        currentLevel = selectedLevel;
        updateSelectedLevelInCategories.innerText = "niveau actuelle : " + currentLevel;
        subLevelButtonsContainer.classList.remove('addRemove');
        updateCategoryStyles();
      } else {
        alert('Complete the current level to unlock this one.');
      }
    });
  }

  // Categories
  for (let i = 0; i < subLevelButtons.length; i++) {
    subLevelButtons[i].addEventListener('click', function(event) {
      currentCategory = event.target.innerText.trim();
      categoryType.innerText = "categorie actuelle : " + currentCategory;

      let levelData = null;
      for (let j = 0; j < questionns.length; j++) {
        if (questionns[j].level === currentLevel) {
          levelData = questionns[j];
          break;
        }
      }
    
      if (levelData && levelData.categories[currentCategory]) {
        questions = levelData.categories[currentCategory];
        currentIndex = 0;
        score = 0;
        scoreElement.textContent = "Score: 0 / " + questions.length;
        questionContainer.classList.remove('addRemove');
        startQuiz();
      } else {
        alert('Pas de questions pour cette categorie.');
      }
    });
  }

  function startQuiz() {
    showQuestion();
    startTimer();
  }

  function showQuestion() {
      if (currentIndex < questions.length) {
          nextReplayButton.classList.add('addRemove');
          let questionHtml = '<h2 id="question">' + (currentIndex + 1) + '. ' + questions[currentIndex].question + '</h2>';
          questionHtml += '<div id="answer-buttons">';
          
          
          for (let i = 0; i < questions[currentIndex].answers.length; i++) {
              questionHtml += '<button class="mt-8 w-11/12 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 border border-blue-700 rounded text-left" data-index="' + i + '">';
              questionHtml += '<span class="text-2xl">' + questions[currentIndex].answers[i].text + '</span>';
              questionHtml += '</button>';
          }
          
          questionHtml += '</div>';
          questionStructure.innerHTML = questionHtml;

          
          let answerButtons = document.querySelectorAll('#answer-buttons button');
          for (let i = 0; i < answerButtons.length; i++) {
              answerButtons[i].addEventListener('click', function() {
                  checkAnswer(parseInt(this.getAttribute('data-index')));
              });
          }
      }
  }
  function checkAnswer(selectedIndex) {
      clearInterval(timerId);
      let answerState = questions[currentIndex].answers[selectedIndex].correct;
      
      if (answerState === true) {
          score++;
          scoreElement.textContent = `Score: ${score}/${questions.length}`; 
      }
  
      let answerButtons = document.querySelectorAll('#answer-buttons button');
      for (let i = 0; i < answerButtons.length; i++) {
          answerButtons[i].disabled = true;
          answerButtons[i].classList.add('opacity-60', 'cursor-not-allowed', 'text-black');
      }
  
      let currentTime = timerElement.textContent;
      let timeNumber = parseInt(currentTime.replace(/[^0-9]/g, ''), 10);
      let timeSpent = 10 - timeNumber;
      
      userSaving.push({
          level: currentLevel,
          category: currentCategory,
          question: questions[currentIndex].question,
          chosenAnswer: questions[currentIndex].answers[selectedIndex].text,
          answerState: answerState,
          answerTime: timeSpent
      });
  
      localStorage.setItem("saveUserQuestionStatu", JSON.stringify(userSaving));
      nextReplayButton.classList.remove('addRemove');
  }
  function startTimer() {
    clearInterval(timerId);
    timer = 10;
    timerElement.textContent = `Time left: ${timer} s`;
    
    timerId = setInterval(function() {
      timer--;
      timerElement.textContent = `Time left: ${timer} s`;
      
      if (timer === 0) {
        clearInterval(timerId);
        nextReplayButton.classList.remove('addRemove');
        
        let answerButtons = document.querySelectorAll('#answer-buttons button');
        for (let i = 0; i < answerButtons.length; i++) {
          answerButtons[i].disabled = true;
          answerButtons[i].classList.add('opacity-60', 'cursor-not-allowed', 'text-black');
        }
        
        userSaving.push({
          level: currentLevel,
          category: currentCategory,
          question: questions[currentIndex].question,
          chosenAnswer: "pas de reponse",
          answerState: false,
          answerTime: 10
        });
        
        localStorage.setItem("saveUserQuestionStatu", JSON.stringify(userSaving));
      }
    }, 1000);
  }

  nextReplayButton.addEventListener('click', function() {
    currentIndex = currentIndex + 1;
    if (currentIndex < questions.length) {
      showQuestion();
      startTimer();
    } else {
      completeQuiz();
    }
  });

  function completeQuiz() {
    
    alert(`Le test est terminé! votre Score: ${score}/${questions.length}`);
  
    userProgress.levels[currentLevel][currentCategory][0].push({
      score: score,
      testdate: new Date().toISOString().split('T')[0]
    });

    if (score === questions.length) {
      userProgress.levels[currentLevel][currentCategory][1] = true;
    } else {
      userProgress.levels[currentLevel][currentCategory][1] = false;
      userProgress.levels[currentLevel][currentCategory][2]++;
    }

  
    let allComplete = true;
    for (let category in userProgress.levels[currentLevel]) {
      if (!userProgress.levels[currentLevel][category][1]) {
        allComplete = false;
        break;
      }
    }

  
    if (allComplete) {
      let currentLevelIndex = levels.indexOf(currentLevel);
      if (currentLevelIndex < levels.length - 1) {
        let nextLevel = levels[currentLevelIndex + 1];
        userProgress.currentLevel = nextLevel;
        updateLevelStyles();
        alert("Le niveau " + nextLevel + " est ouvert.");
      }
    }

    
    users[activeIndex] = userProgress;
    localStorage.setItem("utilisateurs", JSON.stringify(users));
  
    questionContainer.classList.add('addRemove');
    updateCategoryStyles();
    
  }
}