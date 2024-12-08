document.addEventListener("DOMContentLoaded", function () {
    const users = JSON.parse(localStorage.getItem("utilisateurs")) || [];
    const searchInput = document.querySelector("input[type='search']");
    const tableBody = document.querySelector("tbody");

    // Function to render users in the table
    function renderUsers(filter = "") {
        // Clear existing rows
        tableBody.innerHTML = "";

        // Filter users by name or ID (exclude admin)
        const filteredUsers = users
            .filter(user => user.username.toLowerCase() !== "admin") // Exclude admin
            .filter(user => {
                const lowerFilter = filter.toLowerCase();
                return (
                    user.username.toLowerCase().includes(lowerFilter) ||
                    user.id.toLowerCase().includes(lowerFilter)
                );
            });

        // Render each filtered user
        filteredUsers.forEach(user => {
            let totalQuestions = 0;
            let correctAnswers = 0;
            let incorrectAnswers = 0;

            for (const level in user.levels) {
                const grammar = user.levels[level].grammar[0].length;
                const vocabulary = user.levels[level].vocabulary[0].length;
                const comprehension = user.levels[level].comprehension[0].length;

                totalQuestions += grammar + vocabulary + comprehension;
                correctAnswers += user.levels[level].grammar[1] ? grammar : 0;
                correctAnswers += user.levels[level].vocabulary[1] ? vocabulary : 0;
                correctAnswers += user.levels[level].comprehension[1] ? comprehension : 0;

                incorrectAnswers = totalQuestions - correctAnswers;
            }

            // Create a new row for the user
            const newRow = document.createElement("tr");
            newRow.classList.add("border-b");

            newRow.innerHTML = `
                <td class="py-2 px-4">${user.id}</td>
                <td class="py-2 px-7">${user.username}</td>
                <td class="py-2 px-20">${totalQuestions}</td>
                <td class="py-2 px-20">${correctAnswers}</td>
                <td class="py-2 px-20">${incorrectAnswers}</td>
                <td class="py-2 px-12">${correctAnswers}</td>
                <td class="py-2 px-12">${user.currentLevel}</td>
                <td class="py-2 px-5 text-blue-500 cursor-pointer download-btn" 
                    data-id="${user.id}" 
                    data-username="${user.username}" 
                    data-questions="${totalQuestions}" 
                    data-correct="${correctAnswers}" 
                    data-incorrect="${incorrectAnswers}" 
                    data-score="${correctAnswers}" 
                    data-level="${user.currentLevel}">
                    Télécharger
                </td>
            `;

            tableBody.appendChild(newRow);
        });

        // Add event listeners for download buttons
        addDownloadListeners();
    }

    // Event listener for search input
    searchInput.addEventListener("input", function () {
        const filter = searchInput.value.trim();
        renderUsers(filter); // Pass the filter to the renderUsers function
    });

    // Initial render with no filter
    renderUsers();
});

function addDownloadListeners() {
    const downloadButtons = document.querySelectorAll(".download-btn");
    downloadButtons.forEach(button => {
        button.addEventListener("click", event => {
            const userData = {
                id: event.target.dataset.id,
                username: event.target.dataset.username,
                totalQuestions: event.target.dataset.questions,
                correctAnswers: event.target.dataset.correct,
                incorrectAnswers: event.target.dataset.incorrect,
                score: event.target.dataset.score,
                currentLevel: event.target.dataset.level,
            };
            generatePDF(userData);
        });
    });
}

// Generate PDF function
function generatePDF(userData) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set title
    doc.setFontSize(16);
    doc.text(`Statistiques de l'utilisateur: ${userData.username}`, 10, 10);

    // Add user details
    doc.setFontSize(12);
    doc.text(`ID: ${userData.id}`, 10, 20);
    doc.text(`Questions posées: ${userData.totalQuestions}`, 10, 30);
    doc.text(`Réponses correctes: ${userData.correctAnswers}`, 10, 40);
    doc.text(`Réponses incorrectes: ${userData.incorrectAnswers}`, 10, 50);
    doc.text(`Score total: ${userData.score}`, 10, 60);
    doc.text(`Niveau atteint: ${userData.currentLevel || "N/A"}`, 10, 70);

    // Save the PDF
    doc.save(`${userData.username}_stats.pdf`);
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

