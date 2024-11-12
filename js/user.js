
let questionns = [
  // Grammar questions
  {
    question: "Quel est le temps verbal dans 'Il avait mangé' ?",
    category: "grammar",
    answers: [
      { text: "Imparfait", correct: false },
      { text: "Plus-que-parfait", correct: true },
      { text: "Passé composé", correct: false },
      { text: "Passé simple", correct: false }
    ]
  },
  {
    question: "Quelle est la forme correcte du subjonctif présent ?",
    category: "grammar",
    answers: [
      { text: "que je fasse", correct: true },
      { text: "que je fait", correct: false },
      { text: "que je fais", correct: false },
      { text: "que j'ai fait", correct: false }
    ]
  },
  {
    question: "Quel pronom remplace 'à Marie' ?",
    category: "grammar",
    answers: [
      { text: "lui", correct: true },
      { text: "le", correct: false },
      { text: "elle", correct: false },
      { text: "leur", correct: false }
    ]
  },
  {
    question: "Choisissez la phrase au passé composé.",
    category: "grammar",
    answers: [
      { text: "Il mange une pomme", correct: false },
      { text: "Il avait mangé une pomme", correct: false },
      { text: "Il mangeait une pomme", correct: false },
      { text: "Il a mangé une pomme", correct: true }
    ]
  },
  {
    question: "Quel est l'infinitif du verbe conjugué 'j'irai' ?",
    category: "grammar",
    answers: [
      { text: "Aller", correct: true },
      { text: "Allié", correct: false },
      { text: "Allait", correct: false },
      { text: "Va", correct: false }
    ]
  },
  {
    question: "Comment s'accorde le participe passé avec 'avoir' ?",
    category: "grammar",
    answers: [
      { text: "Toujours avec le sujet", correct: false },
      { text: "Avec le complément d'objet direct s'il est avant", correct: true },
      { text: "Ne s'accorde jamais", correct: false },
      { text: "Avec le verbe", correct: false }
    ]
  },
  {
    question: "Quelle est la forme correcte du futur simple ?",
    category: "grammar",
    answers: [
      { text: "je courais", correct: false },
      { text: "je courirai", correct: false },
      { text: "je courirai", correct: false },
      { text: "je courrai", correct: true }
    ]
  },
  {
    question: "Quel est le féminin de 'acteur' ?",
    category: "grammar",
    answers: [
      { text: "Acteuse", correct: false },
      { text: "Actrice", correct: true },
      { text: "Acteure", correct: false },
      { text: "Actueur", correct: false }
    ]
  },
  {
    question: "Quelle phrase contient un verbe pronominal ?",
    category: "grammar",
    answers: [
      { text: "Il parle doucement", correct: false },
      { text: "Nous nous lavons les mains", correct: true },
      { text: "Elle étudie", correct: false },
      { text: "Ils ont mangé", correct: false }
    ]
  },
  {
    question: "Quel mot est un adverbe ?",
    category: "grammar",
    answers: [
      { text: "Lent", correct: false },
      { text: "Doucement", correct: true },
      { text: "Direct", correct: false },
      { text: "Douceur", correct: false }
    ]
  },

  // Vocabulary questions
  {
    question: "Quel mot signifie 'avoir faim' ?",
    category: "vocabulary",
    answers: [
      { text: "Dormir", correct: false },
      { text: "Manger", correct: true },
      { text: "Courir", correct: false },
      { text: "Parler", correct: false }
    ]
  },
  {
    question: "Quel mot est un synonyme de 'beau' ?",
    category: "vocabulary",
    answers: [
      { text: "Laid", correct: false },
      { text: "Magnifique", correct: true },
      { text: "Petit", correct: false },
      { text: "Froid", correct: false }
    ]
  },
  {
    question: "Quel mot complète : 'Il fait très ___ aujourd'hui' ?",
    category: "vocabulary",
    answers: [
      { text: "Chaud", correct: true },
      { text: "Petit", correct: false },
      { text: "Noir", correct: false },
      { text: "Doux", correct: false }
    ]
  },
  {
    question: "Quel mot désigne un fruit ?",
    category: "vocabulary",
    answers: [
      { text: "Pomme", correct: true },
      { text: "Lait", correct: false },
      { text: "Pain", correct: false },
      { text: "Bois", correct: false }
    ]
  },
  {
    question: "Quel mot désigne un moyen de transport ?",
    category: "vocabulary",
    answers: [
      { text: "Voiture", correct: true },
      { text: "Lunettes", correct: false },
      { text: "Chien", correct: false },
      { text: "Maison", correct: false }
    ]
  },
  {
    question: "Quel mot est un verbe ?",
    category: "vocabulary",
    answers: [
      { text: "Table", correct: false },
      { text: "Écrire", correct: true },
      { text: "Rouge", correct: false },
      { text: "Soleil", correct: false }
    ]
  },
  {
    question: "Quel mot signifie 'très content' ?",
    category: "vocabulary",
    answers: [
      { text: "Fatigué", correct: false },
      { text: "Heureux", correct: true },
      { text: "Lent", correct: false },
      { text: "Froid", correct: false }
    ]
  },
  {
    question: "Quel est l'opposé de 'rapide' ?",
    category: "vocabulary",
    answers: [
      { text: "Lent", correct: true },
      { text: "Fort", correct: false },
      { text: "Dur", correct: false },
      { text: "Lourd", correct: false }
    ]
  },
  {
    question: "Quel mot désigne un endroit pour dormir ?",
    category: "vocabulary",
    answers: [
      { text: "Lit", correct: true },
      { text: "Table", correct: false },
      { text: "Chaise", correct: false },
      { text: "Télé", correct: false }
    ]
  },
  {
    question: "Quel mot est un synonyme de 'petit' ?",
    category: "vocabulary",
    answers: [
      { text: "Minuscule", correct: true },
      { text: "Grand", correct: false },
      { text: "Énorme", correct: false },
      { text: "Moyen", correct: false }
    ]
  },

  // Comprehension questions
  {
    question: "Que signifie le mot 'boulanger' ?",
    category: "comprehension",
    answers: [
      { text: "Une personne qui cuit du pain", correct: true },
      { text: "Une personne qui vend des livres", correct: false },
      { text: "Une personne qui construit des maisons", correct: false },
      { text: "Un médecin", correct: false }
    ]
  },
  {
    question: "Quel est le contraire de 'triste' ?",
    category: "comprehension",
    answers: [
      { text: "Content", correct: true },
      { text: "Fatigué", correct: false },
      { text: "Endormi", correct: false },
      { text: "Petit", correct: false }
    ]
  },
  {
    question: "Que fait un professeur ?",
    category: "comprehension",
    answers: [
      { text: "Il enseigne", correct: true },
      { text: "Il cuisine", correct: false },
      { text: "Il répare des voitures", correct: false },
      { text: "Il soigne les malades", correct: false }
    ]
  },
  {
    question: "Où vit un poisson ?",
    category: "comprehension",
    answers: [
      { text: "Dans l'eau", correct: true },
      { text: "Dans un arbre", correct: false },
      { text: "Dans la terre", correct: false },
      { text: "Dans le ciel", correct: false }
    ]
  },
  {
    question: "Quel est le pluriel de 'chien' ?",
    category: "comprehension",
    answers: [
      { text: "Chiens", correct: true },
      { text: "Chienss", correct: false },
      { text: "Chienn", correct: false },
      { text: "Chienses", correct: false }
    ]
  },
  {
    question: "Quel objet est utilisé pour écrire ?",
    category: "comprehension",
    answers: [
      { text: "Stylo", correct: true },
      { text: "Couteau", correct: false },
      { text: "Assiette", correct: false },
      { text: "Clé", correct: false }
    ]
  },
  {
    question: "Que fait-on avec un téléphone ?",
    category: "comprehension",
    answers: [
      { text: "On appelle", correct: true },
      { text: "On mange", correct: false },
      { text: "On dort", correct: false },
      { text: "On nage", correct: false }
    ]
  },
  {
    question: "Que signifie 'écouter' ?",
    category: "comprehension",
    answers: [
      { text: "Utiliser ses oreilles pour entendre", correct: true },
      { text: "Utiliser ses yeux pour voir", correct: false },
      { text: "Parler à quelqu'un", correct: false },
      { text: "Manger un repas", correct: false }
    ]
  },
  {
    question: "Quel objet est utilisé pour couper ?",
    category: "comprehension",
    answers: [
      { text: "Couteau", correct: true },
      { text: "Chaise", correct: false },
      { text: "Livre", correct: false },
      { text: "Stylo", correct: false }
    ]
  },
  {
    question: "Que fait un médecin ?",
    category: "comprehension",
    answers: [
      { text: "Il soigne les malades", correct: true },
      { text: "Il enseigne les mathématiques", correct: false },
      { text: "Il prépare des repas", correct: false },
      { text: "Il construit des maisons", correct: false }
    ]
  }
];


// initialise and set progress
let userProgress = JSON.parse(localStorage.getItem('userProgress')) || {
  currentLevel: 'A1',
  levels: {
    A1: { grammar: false, vocabulary: false, comprehension: false },
    A2: { grammar: false, vocabulary: false, comprehension: false },
    B1: { grammar: false, vocabulary: false, comprehension: false },
    B2: { grammar: false, vocabulary: false, comprehension: false },
    C1: { grammar: false, vocabulary: false, comprehension: false },
    C2: { grammar: false, vocabulary: false, comprehension: false }
  }
};
localStorage.setItem('userProgress', JSON.stringify(userProgress));

// html elements 

const levelButtonsContainer = document.getElementById('level-container');
const levelButtons = document.querySelectorAll('.btn');
const subLevelButtonsContainer = document.getElementById('sub-levels');
const subLevelButtons = document.querySelectorAll('.sub-btn');
const questionContainer = document.getElementById('questions-container');
const questionStructure = document.getElementById('question-structure');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('header_score');
const nextReplayButton = document.getElementById('next-replay');

// variables
let score = 0;
let timer = 10;
let currentIndex = 0;
let currentCategory = '';
let timerId;
let questions = [];
 

// 
levelButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const selectedLevel = event.target.innerText;
    if (selectedLevel === userProgress.currentLevel) {
      subLevelButtonsContainer.classList.remove('addRemove');
      // levelButtonsContainer.classList.add('addRemove');
    } else {
      alert('Complete the current level to unlock this one.');
    }
  });
});

// sub-level selection and start quiz
subLevelButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    currentCategory = event.target.innerText;
   
    questions = questionns.filter(q => q.category === currentCategory); // Filter questions based on category
    
    if (questions.length > 0) {
      currentIndex = 0;
      score = 0;
      questionContainer.classList.remove('addRemove');
      // subLevelButtonsContainer.classList.add('addRemove');
      startQuiz();
    } else {
      alert('No questions available for this category.');
    }
  });
});

// Start the quiz
function startQuiz() {
  showQuestion();
  startTimer();
}

// Display the current question
function showQuestion() {
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

// Check the user's answer
function checkAnswer(selectedIndex) {
  
  // clearInterval(timerId); 
  if (questions[currentIndex].answers[selectedIndex].correct) {
    score++;
    scoreElement.textContent = `Score: ${score} / ${questions.length}`;
  }
  nextReplayButton.classList.remove('addRemove');
}

// Handle the next button click
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

// Start the timer
function startTimer() {
  clearInterval(timerId);
  timer = 10;
  timerElement.textContent = `Time left: ${timer}s`;
  timerId = setInterval(() => {
    timer--;
    timerElement.textContent = `Time left: ${timer}s`;
    if (timer === 0) {
      clearInterval(timerId);
      nextReplayButton.click();
    }
  }, 1000);
}

// Complete the quiz and update progress
function completeQuiz() {
  alert(`Quiz Complete! Your score: ${score} / ${questions.length}`);
  if (score === 10) {
    userProgress.levels[userProgress.currentLevel][currentCategory] = true;

    // categories statu
    const allComplete = Object.values(userProgress.levels[userProgress.currentLevel]).every(status => status);
    if (allComplete) {
      const nextLevel = getNextLevel(userProgress.currentLevel);
      if (nextLevel) {
        userProgress.currentLevel = nextLevel;
        alert(`Congratulations! You have unlocked level ${nextLevel}.`);
      }
    }
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
  }
  questionContainer.classList.add('addRemove');
}

// Get the next level
function getNextLevel(currentLevel) {
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const currentIndex = levels.indexOf(currentLevel);
  return levels[currentIndex + 1] || null;
}
