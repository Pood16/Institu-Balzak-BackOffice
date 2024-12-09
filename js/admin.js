let questions = [
    {
      level: "A1",
      categories: {
        grammar: [
          {
            id: 1,
            question: "Quel est l'article défini pour 'chambre' ?",
            answers: [
              { text: "le", correct: false },
              { text: "la", correct: true },
              { text: "les", correct: false },
              { text: "un", correct: false }
            ]
          },
          {
            id: 2,
            question: "Comment conjuguer 'être' pour 'nous' au présent ?",
            answers: [
              { text: "sommes", correct: true },
              { text: "êtes", correct: false },
              { text: "sont", correct: false },
              { text: "es", correct: false }
            ]
          },
          {
            id: 3,
            question: "Comment dire 'je m'appelle' en français formel ?",
            answers: [
              { text: "je me nomme", correct: true },
              { text: "je t'appelle", correct: false },
              { text: "je s'appelle", correct: false },
              { text: "je suis nom", correct: false }
            ]
          },
          {
            id: 4,
            question: "Quel est le féminin de 'acteur' ?",
            answers: [
              { text: "Acteuse", correct: false },
              { text: "Actrice", correct: true },
              { text: "Acteure", correct: false },
              { text: "Actueur", correct: false }
            ]
          },
          {
            id: 5,
            question: "Quelle phrase contient un verbe pronominal ?",
            answers: [
              { text: "Il parle doucement", correct: false },
              { text: "Nous nous lavons les mains", correct: true },
              { text: "Elle étudie", correct: false },
              { text: "Ils ont mangé", correct: false }
            ]
          },
          {
            id: 6,
            question: "Quel mot est un adverbe ?",
            answers: [
              { text: "Lent", correct: false },
              { text: "Doucement", correct: true },
              { text: "Direct", correct: false },
              { text: "Douceur", correct: false }
            ]
          },
          {
            id: 7,
            question: "Quelle est la forme correcte du futur simple ?",
            answers: [
              { text: "je courais", correct: false },
              { text: "je courirai", correct: false },
              { text: "je courrai", correct: true },
              { text: "je courir", correct: false }
            ]
          },
          {
            id: 8,
            question: "Quel est l'infinitif du verbe conjugué 'j'irai' ?",
            answers: [
              { text: "Aller", correct: true },
              { text: "Allié", correct: false },
              { text: "Allait", correct: false },
              { text: "Va", correct: false }
            ]
          },
          {
            id: 9,
            question: "Comment s'accorde le participe passé avec 'avoir' ?",
            answers: [
              { text: "Toujours avec le sujet", correct: false },
              { text: "Avec le complément d'objet direct s'il est avant", correct: true },
              { text: "Ne s'accorde jamais", correct: false },
              { text: "Avec le verbe", correct: false }
            ]
          },
          {
            id: 10,
            question: "Quel pronom remplace 'à Marie' ?",
            answers: [
              { text: "lui", correct: true },
              { text: "le", correct: false },
              { text: "elle", correct: false },
              { text: "leur", correct: false }
            ]
          }
        ],
        vocabulary: [
          {
            id: 11,
            question: "Quel est le mot pour 'carte bancaire' ?",
            answers: [
              { text: "billet", correct: false },
              { text: "cheque", correct: false },
              { text: "carte", correct: true },
              { text: "porte-monnaie", correct: false }
            ]
          },
          {
            id: 12,
            question: "Quel est le mot correct pour 'chien' ?",
            answers: [
              { text: "cat", correct: false },
              { text: "dog", correct: false },
              { text: "chien", correct: true },
              { text: "chat", correct: false }
            ]
          },
          {
            id: 13,
            question: "Comment s'appelle le bâtiment où on peut dormir en voyage ?",
            answers: [
              { text: "maison", correct: false },
              { text: "appartement", correct: false },
              { text: "hôtel", correct: true },
              { text: "cabane", correct: false }
            ]
          },
          {
            id: 14,
            question: "Quel mot signifie 'avoir faim' ?",
            answers: [
              { text: "Dormir", correct: false },
              { text: "Manger", correct: true },
              { text: "Courir", correct: false },
              { text: "Parler", correct: false }
            ]
          },
          {
            id: 15,
            question: "Quel mot est un synonyme de 'beau' ?",
            answers: [
              { text: "Laid", correct: false },
              { text: "Magnifique", correct: true },
              { text: "Petit", correct: false },
              { text: "Froid", correct: false }
            ]
          },
          {
            id: 16,
            question: "Quel mot désigne un fruit ?",
            answers: [
              { text: "Pomme", correct: true },
              { text: "Lait", correct: false },
              { text: "Pain", correct: false },
              { text: "Bois", correct: false }
            ]
          },
          {
            id: 17,
            question: "Quel mot désigne un moyen de transport ?",
            answers: [
              { text: "Voiture", correct: true },
              { text: "Lunettes", correct: false },
              { text: "Chien", correct: false },
              { text: "Maison", correct: false }
            ]
          },
          {
            id: 18,
            question: "Quel mot est un verbe ?",
            answers: [
              { text: "Table", correct: false },
              { text: "Écrire", correct: true },
              { text: "Rouge", correct: false },
              { text: "Soleil", correct: false }
            ]
          },
          {
            id: 19,
            question: "Quel mot signifie 'très content' ?",
            answers: [
              { text: "Fatigué", correct: false },
              { text: "Heureux", correct: true },
              { text: "Lent", correct: false },
              { text: "Froid", correct: false }
            ]
          },
          {
            id: 20,
            question: "Quel est l'opposé de 'rapide' ?",
            answers: [
              { text: "Lent", correct: true },
              { text: "Fort", correct: false },
              { text: "Dur", correct: false },
              { text: "Lourd", correct: false }
            ]
          }
        ],
        comprehension: [
          {
            id: 21,
            question: "Dans la phrase 'Marie mange une pomme', qui mange ?",
            answers: [
              { text: "Marie", correct: true },
              { text: "une pomme", correct: false },
              { text: "mange", correct: false },
              { text: "rien", correct: false }
            ]
          },
          {
            id: 22,
            question: "Dans la phrase 'Il est neuf heures', que signifie 'neuf heures' ?",
            answers: [
              { text: "Il est 9h", correct: true },
              { text: "Il est 7h", correct: false },
              { text: "Il est 10h", correct: false },
              { text: "Il est 11h", correct: false }
            ]
          },
          {
            id: 23,
            question: "Dans 'Je suis français', quel est le sujet ?",
            answers: [
              { text: "Je", correct: true },
              { text: "français", correct: false },
              { text: "suis", correct: false },
              { text: "est", correct: false }
            ]
          },
          {
            id: 24,
            question: "Quel est le pluriel de 'chien' ?",
            answers: [
              { text: "Chiens", correct: true },
              { text: "Chienss", correct: false },
              { text: "Chienn", correct: false },
              { text: "Chienses", correct: false }
            ]
          },
          {
            id: 25,
            question: "Quel objet est utilisé pour écrire ?",
            answers: [
              { text: "Stylo", correct: true },
              { text: "Couteau", correct: false },
              { text: "Assiette", correct: false },
              { text: "Clé", correct: false }
            ]
          },
          {
            id: 26,
            question: "Que fait-on avec un téléphone ?",
            answers: [
              { text: "On appelle", correct: true },
              { text: "On mange", correct: false },
              { text: "On dort", correct: false },
              { text: "On nage", correct: false }
            ]
          },
          {
            id: 27,
            question: "Que signifie 'écouter' ?",
            answers: [
              { text: "Utiliser ses oreilles pour entendre", correct: true },
              { text: "Utiliser ses yeux pour voir", correct: false },
              { text: "Parler à quelqu'un", correct: false },
              { text: "Manger un repas", correct: false }
            ]
          },
          {
            id: 28,
            question: "Quel objet est utilisé pour couper ?",
            answers: [
              { text: "Couteau", correct: true },
              { text: "Chaise", correct: false },
              { text: "Livre", correct: false },
              { text: "Stylo", correct: false }
            ]
          },
          {
            id: 29,
            question: "Que fait un médecin ?",
            answers: [
              { text: "Il soigne les malades", correct: true },
              { text: "Il enseigne les mathématiques", correct: false },
              { text: "Il prépare des repas", correct: false },
              { text: "Il construit des maisons", correct: false }
            ]
          },
          {
            id: 30,
            question: "Quel est le contraire de 'triste' ?",
            answers: [
              { text: "Content", correct: true },
              { text: "Fatigué", correct: false },
              { text: "Endormi", correct: false },
              { text: "Petit", correct: false }
            ]
          }
        ]
      }
    },
    {
      level: "A2",
      categories: {
        grammar: [
          {
            id: 1,
            question: "Quelle est la forme correcte du passé composé avec 'avoir' ?",
            answers: [
              { text: "Il a mange", correct: false },
              { text: "Il a mangé", correct: true },
              { text: "Il avait mangé", correct: false },
              { text: "Il mangait", correct: false }
            ]
          },
          {
            id: 2,
            question: "Quel pronom remplace 'les enfants' ?",
            answers: [
              { text: "Les", correct: true },
              { text: "Lui", correct: false },
              { text: "Leur", correct: false },
              { text: "La", correct: false }
            ]
          },
          {
            id: 3,
            question: "Conjuguez 'venir' pour 'nous' au présent.",
            answers: [
              { text: "venons", correct: true },
              { text: "viens", correct: false },
              { text: "vient", correct: false },
              { text: "venez", correct: false }
            ]
          },
          {
            id: 4,
            question: "Quel est l'imparfait de 'je mange' ?",
            answers: [
              { text: "je mangeais", correct: true },
              { text: "je mange", correct: false },
              { text: "j'ai mangé", correct: false },
              { text: "je mangerai", correct: false }
            ]
          },
          {
            id: 5,
            question: "Quelle est la négation correcte de 'Je comprends' ?",
            answers: [
              { text: "Je ne comprend pas", correct: false },
              { text: "Je ne comprends pas", correct: true },
              { text: "Je pas comprends", correct: false },
              { text: "Je pas comprendre", correct: false }
            ]
          },
          {
            id: 6,
            question: "Quel est le participe passé de 'voir' ?",
            answers: [
              { text: "vu", correct: true },
              { text: "voir", correct: false },
              { text: "voyant", correct: false },
              { text: "vait", correct: false }
            ]
          },
          {
            id: 7,
            question: "Quel est l'article indéfini pour 'livres' ?",
            answers: [
              { text: "un", correct: false },
              { text: "une", correct: false },
              { text: "des", correct: true },
              { text: "le", correct: false }
            ]
          },
          {
            id: 8,
            question: "Quelle est la forme correcte du futur proche ?",
            answers: [
              { text: "Je vais aller", correct: true },
              { text: "J'irai", correct: false },
              { text: "Je allais", correct: false },
              { text: "J'ai été", correct: false }
            ]
          },
          {
            id: 9,
            question: "Quel verbe est au subjonctif présent ?",
            answers: [
              { text: "que je sois", correct: true },
              { text: "je suis", correct: false },
              { text: "j'étais", correct: false },
              { text: "je serais", correct: false }
            ]
          },
          {
            id: 10,
            question: "Conjuguez 'faire' pour 'tu' au présent.",
            answers: [
              { text: "fais", correct: true },
              { text: "fait", correct: false },
              { text: "faisais", correct: false },
              { text: "feras", correct: false }
            ]
          }
        ],
        vocabulary: [
          {
            id: 11,
            question: "Quel mot signifie 'manger rapidement' ?",
            answers: [
              { text: "Grignoter", correct: true },
              { text: "Courir", correct: false },
              { text: "Dormir", correct: false },
              { text: "Parler", correct: false }
            ]
          },
          {
            id: 12,
            question: "Quel est le synonyme de 'rapide' ?",
            answers: [
              { text: "Lent", correct: false },
              { text: "Vite", correct: true },
              { text: "Petit", correct: false },
              { text: "Grand", correct: false }
            ]
          },
          {
            id: 13,
            question: "Quel mot désigne un vêtement ?",
            answers: [
              { text: "Chaussure", correct: true },
              { text: "Table", correct: false },
              { text: "Chien", correct: false },
              { text: "Voiture", correct: false }
            ]
          },
          {
            id: 14,
            question: "Quel est le contraire de 'heureux' ?",
            answers: [
              { text: "Triste", correct: true },
              { text: "Content", correct: false },
              { text: "Petit", correct: false },
              { text: "Fatigué", correct: false }
            ]
          },
          {
            id: 15,
            question: "Quel mot signifie 'beaucoup de bruit' ?",
            answers: [
              { text: "Calme", correct: false },
              { text: "Silence", correct: false },
              { text: "Vacarme", correct: true },
              { text: "Paisible", correct: false }
            ]
          },
          {
            id: 16,
            question: "Quel mot complète : 'Il pleut ___ dehors' ?",
            answers: [
              { text: "fortement", correct: true },
              { text: "légèrement", correct: false },
              { text: "tranquillement", correct: false },
              { text: "petitement", correct: false }
            ]
          },
          {
            id: 17,
            question: "Quel mot est un verbe ?",
            answers: [
              { text: "Danser", correct: true },
              { text: "Heureux", correct: false },
              { text: "Table", correct: false },
              { text: "Bleu", correct: false }
            ]
          },
          {
            id: 18,
            question: "Quel mot désigne un aliment ?",
            answers: [
              { text: "Pomme", correct: true },
              { text: "Chien", correct: false },
              { text: "Bureau", correct: false },
              { text: "Stylo", correct: false }
            ]
          },
          {
            id: 19,
            question: "Quel mot désigne un lieu ?",
            answers: [
              { text: "École", correct: true },
              { text: "Chaud", correct: false },
              { text: "Rouge", correct: false },
              { text: "Sourire", correct: false }
            ]
          },
          {
            id: 20,
            question: "Quel mot est un adjectif ?",
            answers: [
              { text: "Grand", correct: true },
              { text: "Manger", correct: false },
              { text: "Chat", correct: false },
              { text: "Vélo", correct: false }
            ]
          }
        ],
        comprehension: [
          {
            id: 21,
            question: "Dans la phrase 'Paul regarde un film', que fait Paul ?",
            answers: [
              { text: "Il regarde un film", correct: true },
              { text: "Il mange", correct: false },
              { text: "Il dort", correct: false },
              { text: "Il écrit", correct: false }
            ]
          },
          {
            id: 22,
            question: "Que signifie 'se lever tôt' ?",
            answers: [
              { text: "Se réveiller à une heure avancée", correct: false },
              { text: "Se réveiller tôt le matin", correct: true },
              { text: "Dormir tard", correct: false },
              { text: "Se coucher tard", correct: false }
            ]
          },
          {
            id: 23,
            question: "Dans 'Je suis fatigué', qui est fatigué ?",
            answers: [
              { text: "Je", correct: true },
              { text: "Fatigué", correct: false },
              { text: "Personne", correct: false },
              { text: "Toi", correct: false }
            ]
          },
          {
            id: 24,
            question: "Quel mot est utilisé pour décrire un objet chaud ?",
            answers: [
              { text: "Brûlant", correct: true },
              { text: "Froid", correct: false },
              { text: "Dur", correct: false },
              { text: "Mou", correct: false }
            ]
          },
          {
            id: 25,
            question: "Que signifie 'avoir soif' ?",
            answers: [
              { text: "Vouloir boire", correct: true },
              { text: "Vouloir manger", correct: false },
              { text: "Dormir", correct: false },
              { text: "Courir", correct: false }
            ]
          },
          {
            id: 26,
            question: "Quel est le pluriel de 'cheval' ?",
            answers: [
              { text: "Chevaux", correct: true },
              { text: "Chevals", correct: false },
              { text: "Chevauxs", correct: false },
              { text: "Chevaus", correct: false }
            ]
          },
          {
            id: 27,
            question: "Que fait-on avec un stylo ?",
            answers: [
              { text: "On écrit", correct: true },
              { text: "On coupe", correct: false },
              { text: "On mange", correct: false },
              { text: "On dort", correct: false }
            ]
          },
          {
            id: 28,
            question: "Que signifie 'écouter de la musique' ?",
            answers: [
              { text: "Lire un livre", correct: false },
              { text: "Entendre de la musique", correct: true },
              { text: "Dormir", correct: false },
              { text: "Courir", correct: false }
            ]
          },
          {
            id: 29,
            question: "Quel est le féminin de 'ami' ?",
            answers: [
              { text: "Amie", correct: true },
              { text: "Ame", correct: false },
              { text: "Amis", correct: false },
              { text: "Amitié", correct: false }
            ]
          },
          {
            id: 30,
            question: "Que signifie 'faire ses devoirs' ?",
            answers: [
              { text: "Travailler pour l'école", correct: true },
              { text: "Manger", correct: false },
              { text: "Dormir", correct: false },
              { text: "Jouer", correct: false }
            ]
          }
        ]
      }
    }
  ];
  
  
  
  let app = JSON.parse(localStorage.getItem("questions")) || [];
  if(app.length == 0){
      localStorage.setItem("questions", JSON.stringify(questions));
      app = JSON.parse(localStorage.getItem("questions")) ;
  }

/**
 * Filter Questions Display
 * 
 */

// HTML DOM elements
const levelSelect = document.getElementById("level");
const categorySelect = document.getElementById("category");
const tableBody = document.querySelector("tbody");

// Event listner for filters
document.getElementById("level").addEventListener("change", adminDisplayQuestions);
document.getElementById("category").addEventListener("change", adminDisplayQuestions);

// Function to display questions
function adminDisplayQuestions() {

    tableBody.innerHTML = "";
    // Get selected values from filters
    const selectedLevel = levelSelect.value;
    const selectedCategory = categorySelect.value;

    // Filter and display questions based on selected level and category
    app.forEach(level => {
        if (selectedLevel === "" || selectedLevel === level.level.toLowerCase()) {
            Object.keys(level.categories).forEach(categoryKey => {
                if (selectedCategory === "" || selectedCategory === categoryKey) {
                    level.categories[categoryKey].forEach(question => {
                        createQuestionRow(question, level.level, categoryKey);
                    });
                }
            });
        }
    });
}

// Helper function to create action buttons with ID references
function createActionButton(iconClass, colorClass, tooltip, onClickAction) {
    return `
                    <button class="${colorClass} hover:${colorClass}-dark focus:outline-none" title="${tooltip}" onclick="${onClickAction}">
                        <i class="${iconClass}"></i>
                    </button>
                `;
}

// Function to create a question row in the table
function createQuestionRow(question, level, category) {
    const row = document.createElement("tr");
    row.classList.add("border-b", "hover:bg-gray-100", "transition-colors");
    row.setAttribute("data-id", question.id); // Set question ID as a data attribute

    row.innerHTML = `
                    <td class="py-3 px-4 text-left">${question.question}</td>
                    <td class="py-3 px-4 text-left">${level}</td>
                    <td class="py-3 px-4 text-left">${category}</td>
                    <td class="py-3 px-4 text-center">
                        <div class="flex justify-center space-x-2">
                            ${createActionButton("fas fa-edit", "text-blue-500", "Edit Question", `openEditQuestionModal(${question.id},'${level}','${category}')`)}
                            ${createActionButton("fas fa-trash", "text-red-500", "Delete Question", `openDeleteModal(${question.id},'${level}','${category}')`)}
                        </div>
                    </td>
                `;

    tableBody.appendChild(row);
}

/**
 * END Filter Questions Display
 * 
 */

/**
 * Functions to OPEN Add/Edit/Delete Modals
 *  
 */
// Get references to modals and buttons
const addQuestionBtn = document.getElementById("addQuestionBtn"); // add button
const questionModal = document.getElementById("questionModal"); // add/edit question modal
const deleteModal = document.getElementById("deleteModal"); // delete confirmation modal

// Event listener for Add button
addQuestionBtn.addEventListener("click", () => openQuestionModal(false));

// Function to open the Add/Edit modal (default parameters for add)
function openQuestionModal(isEdit = false, questionData = null) {
    // Set modal title based on add or edit
    document.getElementById("modalTitle").innerText = isEdit ? "Edit Question" : "Add Question";

    // Populate fields if editing
    if (isEdit && questionData) {
        document.getElementById("question").value = questionData.question;
        document.getElementById("answer1").value = questionData.answers[0].text;
        document.getElementById("answer2").value = questionData.answers[1].text;
        document.getElementById("answer3").value = questionData.answers[2].text;
        document.getElementById("answer4").value = questionData.answers[3].text;
        document.getElementById("correctAnswer").selectedIndex = questionData.answers.findIndex((answer) => answer.correct == true);

    } else {
        // Clear fields if adding a new question
        document.getElementById("questionForm").reset();
    }
    questionModal.classList.remove("hidden"); // Show modal
    // Submit event Listener 
    document.getElementById("questionForm").addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submit
        validateForm(isEdit, questionData);
    });
}

//  Edit Function for Button Actions
function openEditQuestionModal(id, level, category) {
    const questionData = getQuestionDataById(id); // Retrieve question data based on ID
    openQuestionModal(true, { ...questionData, level, category });
}

// Function to open the Delete modal
function openDeleteModal(id, level, category) {
    const questionData = getQuestionDataById(id);
    deleteModal.classList.remove("hidden"); // Show delete modal
    document.getElementById("confirmDeleteBtn").addEventListener("click", deleteQuestion({ ...questionData, level, category }));
}

//  function to get question data by ID
function getQuestionDataById(id) {
    // Replace with logic to retrieve question from app data by ID
    return app.flatMap(level =>
        Object.values(level.categories).flatMap(category =>
            category.filter(question => question.id === id)
        )
    )[0];
}

// Add event listeners to cancel modals buttons(edit/Add + delete) 
document.getElementById("cancelBtn").addEventListener("click", closeModals);
document.getElementById("cancelDeleteBtn").addEventListener("click", closeModals);
// Function to close modals
function closeModals() {
    document.getElementById("questionForm").reset();
    const elements = document.getElementById("questionForm");
    for (const element of elements) {
        if (element.id != "cancelBtn") {
            element.classList.remove("ring-2", "ring-rose-500");
            element.classList.remove("ring-2", "ring-green-500");
            if (element.nextElementSibling)
                element.parentNode.removeChild(element.nextElementSibling);
        }
    }

    questionModal.classList.add("hidden");
    deleteModal.classList.add("hidden");
}

/**
 * END Functions to OPEN Add/Edit/Delete Modals
 *  
 */

/**
 * Add/Update Question Validation and CRUD
 * 
 */

let isValid = true; // Initialize validation flag

// Function to validate ADD/UPDATE Question Form
function validateForm(isEdit = false, questionData = null) {
    // Get references to all inputs and selects
    const questionForm = document.getElementById("questionForm");
    const questionField = document.getElementById("question");
    const answer1 = document.getElementById("answer1");
    const answer2 = document.getElementById("answer2");
    const answer3 = document.getElementById("answer3");
    const answer4 = document.getElementById("answer4");
    const correctAnswer = document.getElementById("correctAnswer");
    const level = questionForm.elements["level"];
    const category = questionForm.elements["category"];

    // Validate each field
    validateField(questionField, questionField.value.length > 10, "The question must be longer than 10 characters.");
    validateField(answer1, answer1.value.trim() !== "", "This field is required, please fill it before submitting.");
    validateField(answer2, answer2.value.trim() !== "", "This field is required, please fill it before submitting.");
    validateField(answer3, answer3.value.trim() !== "", "This field is required, please fill it before submitting.");
    validateField(answer4, answer4.value.trim() !== "", "This field is required, please fill it before submitting.");
    validateField(correctAnswer, correctAnswer.value !== "", "Please select a valid option.");
    validateField(level, level.value !== "", "Please select a valid level.");
    validateField(category, category.value !== "", "Please select a valid category.");

    if (isValid) {
        isEdit ? updateQuestion(questionData) : createQuestion();
        document.getElementById("questionForm").reset(); // Reset form fields
        closeModals(); // close the modal
    }
}

// Function to apply valid/invalid styles and messages
function validateField(field, condition, message) {
    const errorElement = field.nextElementSibling;

    if (condition) {
        field.classList.remove("ring-2", "ring-rose-500");
        field.classList.add("ring-2", "ring-green-500");
        if (errorElement) errorElement.remove(); // Remove existing error message
    } else {
        field.classList.remove("ring-2", "ring-green-500");
        field.classList.add("ring-2", "ring-rose-500");
        if (!errorElement) {
            const errorTag = document.createElement("small");
            errorTag.className = "text-red-500";
            errorTag.innerText = message;
            field.parentNode.appendChild(errorTag);
        }
        isValid = false;
    }
}

// CRUD CREATE Question
function createQuestion() {
    // Retrieve values from the form
    const questionForm = document.getElementById("questionForm");
    const questionText = questionForm["question"].value.trim();
    const answers = [
        { text: document.getElementById("answer1").value.trim(), correct: false },
        { text: document.getElementById("answer2").value.trim(), correct: false },
        { text: document.getElementById("answer3").value.trim(), correct: false },
        { text: document.getElementById("answer4").value.trim(), correct: false }
    ];
    const correctAnswerIndex = parseInt(questionForm["correctAnswer"].value) - 1;
    answers[correctAnswerIndex].correct = true;

    const level = questionForm["level"].value;
    const category = questionForm["category"].value;

    // Construct the new question object
    const newQuestion = {
        id: Date.now(), // Use a unique ID based on timestamp
        question: questionText,
        answers: answers
    };

    // Add the new question to the appropriate level and category
    const levelIndex = app.findIndex(lvl => lvl.level.toLowerCase() === level.toLowerCase());
    if (levelIndex !== -1) { // if the level contains elements
        if (app[levelIndex].categories[category]) { // if there's questions in that category
            app[levelIndex].categories[category].push(newQuestion);
        } else {
            app[levelIndex].categories[category] = [newQuestion];
        }
    } else {
        // Create a new level if it doesn't exist
        app.push({
            level: level.toUpperCase(),
            categories: {
                [category]: [newQuestion]
            }
        });
    }
    // Save the updated app array to local storage
    localStorage.setItem("questions", JSON.stringify(app));

    // Display success message
    alert("Question added successfully!");

    // Refresh the question table
    adminDisplayQuestions();
}

// CRUD update question
function updateQuestion(questionData) {
    const questionForm = document.getElementById("questionForm");
    const updatedQuestionText = questionForm["question"].value.trim();
    const updatedAnswers = [
        { text: document.getElementById("answer1").value.trim(), correct: false },
        { text: document.getElementById("answer2").value.trim(), correct: false },
        { text: document.getElementById("answer3").value.trim(), correct: false },
        { text: document.getElementById("answer4").value.trim(), correct: false }
    ];

    const updatedCorrectAnswerIndex = parseInt(questionForm["correctAnswer"].value) - 1;
    updatedAnswers[updatedCorrectAnswerIndex].correct = true;

    const updatedLevel = questionForm["level"].value;
    const updatedCategory = questionForm["category"].value;

    // Locate the question in the app array
    const levelIndex = app.findIndex(lvl => lvl.level.toLowerCase() === questionData.level.toLowerCase());
    if (levelIndex !== -1) {
        const categoryQuestions = app[levelIndex].categories[questionData.category];
        const questionIndex = categoryQuestions.findIndex(q => q.id === questionData.id);

        if (questionIndex !== -1) {
            // Update the question details
            categoryQuestions[questionIndex].question = updatedQuestionText;
            categoryQuestions[questionIndex].answers = updatedAnswers;

            // Handle level/category changes
            if (updatedLevel.toLowerCase() !== questionData.level.toLowerCase() ||
                updatedCategory !== questionData.category) {
                // Remove the question from the old category
                categoryQuestions.splice(questionIndex, 1);

                // Add the question to the new level and category
                const newLevelIndex = app.findIndex(lvl => lvl.level.toLowerCase() === updatedLevel.toLowerCase());
                if (newLevelIndex !== -1) {
                    if (!app[newLevelIndex].categories[updatedCategory]) {
                        app[newLevelIndex].categories[updatedCategory] = [];
                    }
                    app[newLevelIndex].categories[updatedCategory].push({
                        ...categoryQuestions[questionIndex],
                        level: updatedLevel,
                        category: updatedCategory
                    });
                } else {
                    // Create a new level if it doesn't exist
                    app.push({
                        level: updatedLevel.toUpperCase(),
                        categories: {
                            [updatedCategory]: [{
                                id: questionData.id,
                                question: updatedQuestionText,
                                answers: updatedAnswers
                            }]
                        }
                    });
                }
            }
        }
    }

    // Save the updated app array to local storage
    localStorage.setItem("questions", JSON.stringify(app));

    // Display success message
    alert("Question updated successfully!");

    // Refresh the question table
    adminDisplayQuestions();
}



/**
 *  END Add Question Validation
 * 
 */

/**
 *   CRUD Delete Question
 * 
 */

function deleteQuestion(questionData) {
    const levelIndex = app.findIndex(lvl => lvl.level.toLowerCase() === questionData.level.toLowerCase());
    if (levelIndex !== 1) {
        const categoryQuestions = app[levelIndex].categories[questionData.category];
        const questionIndex = categoryQuestions.findIndex(q => q.id === questionData.id);
        categoryQuestions.splice(questionIndex, 1);
    }
    // Save the updated app array to local storage
    localStorage.setItem("questions", JSON.stringify(app));
    closeModals();
    adminDisplayQuestions();
}

/**
 *   CRUD Delete Question
 * 
 */

document.getElementById("logout").addEventListener("click", logout);
function logout() {
    sessionStorage.setItem("connected", null);
    window.location.href = "login.html";
}



document.addEventListener("DOMContentLoaded", () => {
    if (!sessionStorage.getItem("connected")) {
        window.location.href = "login.html";
    }
    else {
        const adminName = sessionStorage.getItem("connected").name;
        document.getElementById("admin-name").innerHTML = adminName; // set admin name
        adminDisplayQuestions();
    }
});