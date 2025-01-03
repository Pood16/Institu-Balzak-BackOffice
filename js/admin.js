let app = [
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
                // 7 autres questions similaires
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
                // 7 autres questions similaires
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
                // 7 autres questions similaires
            ]
        }
    },
    // Ajouter ici d'autres niveaux (A2, B1, B2, C1, C2) avec des questions de difficulté croissante
];


app = JSON.parse(localStorage.getItem("questions"));

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