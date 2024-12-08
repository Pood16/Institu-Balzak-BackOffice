// Example data structure for rows
const data = JSON.parse(localStorage.getItem("quizData")) || [
    {
        questions: 10,
        correctAnswers: 8,
        incorrectAnswers: 2,
        score: 80,
        level: "Intermediate",
        downloadLink: "#"
    }
];

// Function to load data and insert rows into the table
function loadTableData() {
    const tableBody = document.getElementById("dataRows");
    tableBody.innerHTML = ""; // Clear any existing rows

    data.forEach((item) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td class="py-2 px-4">${item.questions}</td>
            <td class="py-2 px-4">${item.correctAnswers}</td>
            <td class="py-2 px-4">${item.incorrectAnswers}</td>
            <td class="py-2 px-4">${item.score}</td>
            <td class="py-2 px-4">${item.level}</td>
            <td class="py-2 px-4">
                <a href="${item.downloadLink}" class="text-blue-500 hover:underline">Télécharger</a>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to populate the dynamic table with data from localStorage
function populateDynamicTable() {
    const users = JSON.parse(localStorage.getItem("utilisateurs")) || [];
    const answerStates = JSON.parse(localStorage.getItem("saveUserQuestionStatu")) || [];
    const tableBody = document.querySelector("tbody");

    // Clear existing table rows
    tableBody.innerHTML = "";

    // Iterate over each user
    users.forEach((user) => {
        const username = user.username;

        // Skip Admin account
        if (username.toLowerCase() === "admin") {
            return;
        }

        const userId = user.id || user.newUserId;
        const currentLevel = user.currentLevel;
        const userAnswers = answerStates.filter(state => state.username === username);
        const totalQuestions = userAnswers.length;
        const correctAnswers = userAnswers.filter(answer => answer.answerState === true).length;
        const incorrectAnswers = userAnswers.filter(answer => answer.answerState === false).length;
        const score = correctAnswers;

        // Create row
        const row = document.createElement("tr");
        row.classList.add("border-b");
        row.innerHTML = `
            <td class="py-2 px-4">${userId || "N/A"}</td>
            <td class="py-2 px-7">${username || "N/A"}</td>
            <td class="py-2 px-20">${totalQuestions}</td>
            <td class="py-2 px-20">${correctAnswers}</td>
            <td class="py-2 px-20">${incorrectAnswers}</td>
            <td class="py-2 px-12">${score}</td>
            <td class="py-2 px-12">${currentLevel || "N/A"}</td>
            <td class="py-2 px-5 text-blue-500 cursor-pointer">
                <button class="download-btn" data-username="${username}" data-id="${userId}" data-questions="${totalQuestions}" data-correct="${correctAnswers}" data-incorrect="${incorrectAnswers}" data-score="${score}" data-level="${currentLevel}">
                    Télécharger
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Add event listeners to download buttons
    const downloadButtons = document.querySelectorAll(".download-btn");
    downloadButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const userData = event.target.dataset;
            console.log("User data for PDF:", userData); // Debug log
            generatePDF(userData);
        });
    });
}

// Function to generate a PDF for the user's stats
function generatePDF(userData) {
    const { username, id, questions, correct, incorrect, score, level } = userData;
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Statistiques de l'utilisateur: ${username}`, 10, 10);
    doc.setFontSize(12);
    doc.text(`ID: ${id}`, 10, 20);
    doc.text(`Questions posées: ${questions}`, 10, 30);
    doc.text(`Réponses correctes: ${correct}`, 10, 40);
    doc.text(`Réponses incorrectes: ${incorrect}`, 10, 50);
    doc.text(`Score total: ${score}`, 10, 60);
    doc.text(`Niveau atteint: ${level || "N/A"}`, 10, 70);

    doc.save(`${username}_stats.pdf`);
}

// Load table on page load
document.addEventListener("DOMContentLoaded", () => {
    populateDynamicTable();
});

// Logout functionality
document.getElementById('logout').addEventListener('click', () => {
    sessionStorage.clear();
    location.reload();
});

// Authentication check
document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("connected") === null) {
        window.location.href = 'login.html';
    }
});
