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

// Load data when the page loads
document.addEventListener("DOMContentLoaded", loadTableData);
