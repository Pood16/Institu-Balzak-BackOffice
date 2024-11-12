// for testing

let questions = [
    {
      question: "Quel est le temps verbal dans 'Il avait mangé' ?",
      answers: [
        {
          text: "Imparfait",
          correct: false
        },
        {
          text: "Plus-que-parfait",
          correct: true
        },
        {
          text: "Passé composé",
          correct: false
        },
        {
          text: "Passé simple",
          correct: false
        }
      ]
    },
    {
      question: "Quelle est la bonne orthographe ?",
      answers: [
        {
          text: "Je peux leurs dire",
          correct: false
        },
        {
          text: "Je peut leur dire",
          correct: false
        },
        {
          text: "Je peux leur dire",
          correct: true
        },
        {
          text: "Je peut leurs dire",
          correct: false
        }
      ]
    },
    {
      question: "Quel est le féminin de 'directeur' ?",
      answers: [
        {
          text: "Directrice",
          correct: true
        },
        {
          text: "Directeuse",
          correct: false
        },
        {
          text: "Directeure",
          correct: false
        },
        {
          text: "Directresse",
          correct: false
        }
      ]
    },
    {
      question: "Comment s'écrit le pluriel de 'festival' ?",
      answers: [
        {
          text: "Festivals",
          correct: true
        },
        {
          text: "Festivaux",
          correct: false
        },
        {
          text: "Festivalles",
          correct: false
        },
        {
          text: "Festivales",
          correct: false
        }
      ]
    },
    {
      question: "Quelle phrase contient une erreur d'accord ?",
      answers: [
        {
          text: "Les enfants sont allés au parc",
          correct: false
        },
        {
          text: "Elles se sont lavées les mains",
          correct: true
        },
        {
          text: "Nous nous sommes vues hier",
          correct: false
        },
        {
          text: "Elle s'est préparée rapidement",
          correct: false
        }
      ]
    },
    {
      question: "Quel est le participe passé du verbe 'résoudre' ?",
      answers: [
        {
          text: "Résoudu",
          correct: false
        },
        {
          text: "Résout",
          correct: false
        },
        {
          text: "Résolu",
          correct: true
        },
        {
          text: "Résolvé",
          correct: false
        }
      ]
    },
    {
      question: "Quelle est la bonne conjugaison au subjonctif présent ?",
      answers: [
        {
          text: "Il faut que tu fasses",
          correct: true
        },
        {
          text: "Il faut que tu fais",
          correct: false
        },
        {
          text: "Il faut que tu fasses",
          correct: false
        },
        {
          text: "Il faut que tu fait",
          correct: false
        }
      ]
    },
    {
      question: "Identifiez le COD dans : 'Marie mange une pomme'",
      answers: [
        {
          text: "Marie",
          correct: false
        },
        {
          text: "mange",
          correct: false
        },
        {
          text: "une pomme",
          correct: true
        },
        {
          text: "Il n'y a pas de COD",
          correct: false
        }
      ]
    },
    {
      question: "Quel mot est un adverbe ?",
      answers: [
        {
          text: "Gentil",
          correct: false
        },
        {
          text: "Doucement",
          correct: true
        },
        {
          text: "Douceur",
          correct: false
        },
        {
          text: "Doux",
          correct: false
        }
      ]
    },
    {
      question: "Quelle phrase est au conditionnel présent ?",
      answers: [
        {
          text: "J'aimerais partir en voyage",
          correct: true
        },
        {
          text: "J'aime partir en voyage",
          correct: false
        },
        {
          text: "J'aimerai partir en voyage",
          correct: false
        },
        {
          text: "J'aimais partir en voyage",
          correct: false
        }
      ]
    }
  ];


localStorage.setItem("questioArray", JSON.stringify(questions));
// main containers
let levelContainer = document.getElementById('level-container');
let subLevelsContainer =  document.getElementById('sub-levels');
let questionContainer =  document.getElementById('questions-container');

let questionStructure = document.getElementById('question-structure');

// level buttons
let btn = document.querySelectorAll('.btn');
// sub level buttons
let typeBtn = document.querySelectorAll('.sub-btn');
for (let i=0; i<typeBtn.length; i++){
    typeBtn[i].addEventListener("click", ()=>{
        subLevelsContainer.classList.add("addRemove");
        questionContainer.classList.remove("addRemove");
        startFunction();
    })
}
// declaire variables
let score = 0;
let timer = 5;
let currentIndex = 0;

// action on level bottons
for (let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", ()=>{
        subLevelsContainer.classList.remove("addRemove");
        levelContainer.classList.add("addRemove");
    })
}
function startFunction(){
    score = 0;
    timer = 5;
    currentIndex = 0;
    showFunctionQuestion();

}
// add show function 
function showFunctionQuestion(){
    let questionFromlocalStorage = JSON.parse(localStorage.getItem("questioArray"));
    console.log(questionFromlocalStorage)
    console.log(questionFromlocalStorage[0].answers[0].text)
    // console.log(typeof questionFromlocalStorage[0])
    questionStructure.innerHTML = ``;
    questionStructure.innerHTML = `
    
            <h2 id="question">${currentIndex+1}.${questionFromlocalStorage[0].question}</h2>
            <div id="answer-buttons"> 
                <button class="mt-8 w-11/12 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 border border-blue-700 rounded text-left">
                    <span class="text-2xl">${questionFromlocalStorage[0].answers[0].text}</span>
                </button>

                <button class="mt-8 w-11/12 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 border border-blue-700 rounded text-left">
                    <span class="text-2xl">${questionFromlocalStorage[0].answers[1].text}</span>
                </button>

                <button class="mt-8 w-11/12 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 border border-blue-700 rounded text-left">
                    <span class="text-2xl">${questionFromlocalStorage[0].answers[2].text}</span>
                </button>

                <button class="mt-8 w-11/12 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 border border-blue-700 rounded text-left">
                    <span class="text-2xl">${questionFromlocalStorage[0].answers[3].text}</span>
                </button>
            </div>
    
    ` 
}




