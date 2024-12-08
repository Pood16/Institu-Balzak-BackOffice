// Function to populate the dynamic table with user data from localStorage
function populateDynamicTable() {
    const users = JSON.parse(localStorage.getItem("utilisateurs")) || [];  // Retrieve users from localStorage
    const tableBody = document.querySelector("tbody");

    // Clear existing table rows
    tableBody.innerHTML = "";

    if (users.length === 0) {
        console.log("No users found in localStorage.");
        return;
    }

    // Iterate over each user
    users.forEach((user) => {
        const username = user.username;
        const userId = user.id || "N/A";
        const currentLevel = user.currentLevel || "N/A";

        // Initialize stats
        let totalQuestions = 0;
        let correctAnswers = 0;
        let incorrectAnswers = 0;

        // Calculate stats from the user's levels (A1 - C2)
        Object.values(user.levels).forEach(level => {
            Object.values(level).forEach(category => {
                const [questions, completed, attempts] = category;

                // Update counts based on the `questions` array
                totalQuestions += questions.length; // Total attempted questions
                correctAnswers += questions.filter(q => q.correct === true).length; // Correct answers
                incorrectAnswers += questions.filter(q => q.correct === false).length; // Incorrect answers
            });
        });

        const score = correctAnswers; // Score is the total correct answers

        // Create a new row for the user
        const row = document.createElement("tr");
        row.classList.add("border-b");
        row.innerHTML = `
            <td class="py-2 px-4">${userId}</td>
            <td class="py-2 px-7">${username}</td>
            <td class="py-2 px-20">${totalQuestions}</td>
            <td class="py-2 px-20">${correctAnswers}</td>
            <td class="py-2 px-20">${incorrectAnswers}</td>
            <td class="py-2 px-12">${score}</td>
            <td class="py-2 px-12">${currentLevel}</td>
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
            const {
                username,
                id,
                questions,
                correct,
                incorrect,
                score,
                level
            } = event.target.dataset;

            const userData = {
                username,
                id,
                totalQuestions: questions,
                correctAnswers: correct,
                incorrectAnswers: incorrect,
                score,
                currentLevel: level
            };

            console.log("Generating PDF with user data:", userData); // Debug log
            generatePDF(userData);
        });
    });
}

// Function to generate a PDF for the user's stats
function generatePDF(userData) {
    const {
        username,
        id,
        totalQuestions,
        correctAnswers,
        incorrectAnswers,
        score,
        currentLevel
    } = userData;
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    // Set title
    doc.setFontSize(16);
    doc.text(`Statistiques de l'utilisateur: ${username}`, 10, 10);

    // Add user details
    doc.setFontSize(12);
    doc.text(`ID: ${id}`, 10, 20);
    doc.text(`Questions posées: ${totalQuestions}`, 10, 30);
    doc.text(`Réponses correctes: ${correctAnswers}`, 10, 40);
    doc.text(`Réponses incorrectes: ${incorrectAnswers}`, 10, 50);
    doc.text(`Score total: ${score}`, 10, 60);
    doc.text(`Niveau atteint: ${currentLevel || "N/A"}`, 10, 70);

    // Save the PDF with a user-specific filename
    doc.save(`${username}_stats.pdf`);
}

// Ensure the page is loaded and populate the dynamic table with users
document.addEventListener("DOMContentLoaded", () => {
    populateDynamicTable(); // Populate dynamic data from users in localStorage
});

// Ensure authentication
document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("connected") === null) {
        window.location.href = 'login.html';
    }
});
