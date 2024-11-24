const users = [
    {
        id: "user1",
        username: "Alice",
        currentLevel: "A1",
        levels: {
            A1: {
                grammar: [[{ score: 8, testdate: "2024-11-24" }, { score: 7, testdate: "2024-10-27" }], false, 2],
                vocabulary: [[{ score: 10, testdate: "2024-11-01" }], true, 1],
                comprehension: [[], false, 0],
            },
            A2: { grammar: [], vocabulary: [], comprehension: [] },
            // Other levels...
        }
    },
    {
        id: "user2",
        username: "Bob",
        currentLevel: "B1",
        levels: {
            B1: {
                grammar: [[{ score: 6, testdate: "2024-09-15" }], false, 1],
                vocabulary: [[{ score: 10, testdate: "2024-09-20" }], true, 1],
                comprehension: [[{ score: 9, testdate: "2024-09-25" }], false, 1],
            },
            B2: { grammar: [], vocabulary: [], comprehension: [] },
            // Other levels...
        }
    }
];

// HTML Elements
const tableBody = document.querySelector("tbody");
const dateFilter = document.getElementById("date");
const levelFilter = document.getElementById("level");
const searchBox = document.querySelector(".search-box");

// Helper Function to Extract Test Data
function extractTestData() {
    const results = [];
    users.forEach(user => {
        // Only process levels that have data
        Object.entries(user.levels).forEach(([level, categories]) => {
            // Skip empty level objects
            if (Object.keys(categories).length === 0) return;

            Object.entries(categories).forEach(([category, categoryData]) => {
                // Check if categoryData is properly structured
                if (!Array.isArray(categoryData) || categoryData.length !== 3) return;

                const [tests, pass, attempts] = categoryData;
                
                // Ensure tests is an array and has entries
                if (!Array.isArray(tests)) return;
                
                tests.forEach(test => {
                    // Validate test object structure
                    if (!test || typeof test.score !== 'number' || !test.testdate) return;
                    
                    results.push({
                        username: user.username,
                        level,
                        category,
                        score: test.score,
                        testdate: test.testdate,
                        pass,
                        attempts
                    });
                });
            });
        });
    });
    return results;
}

// Function to Display Users in the Table
function displayScoreboard(filteredResults) {
    tableBody.innerHTML = ""; // Clear existing rows

    filteredResults.forEach(record => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="py-2 px-4">${record.username}</td>
            <td class="py-2 px-4">${record.level}</td>
            <td class="py-2 px-4">${record.category}</td>
            <td class="py-2 px-4 text-center">${record.score}</td>
            <td class="py-2 px-4 text-center">${new Date(record.testdate).toLocaleDateString()}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to Filter and Sort Results
function filterAndSortResults() {
    let results = extractTestData();

    // Filter by Level
    const selectedLevel = levelFilter.value;
    if (selectedLevel) {
        results = results.filter(record => record.level.toLowerCase() === selectedLevel.toLowerCase());
    }

    // Sort by Date
    const selectedDate = dateFilter.value;
    if (selectedDate === "latest") {
        results.sort((a, b) => new Date(b.testdate) - new Date(a.testdate));
    } else if (selectedDate === "oldest") {
        results.sort((a, b) => new Date(a.testdate) - new Date(b.testdate));
    }

    // Search by Username
    const searchTerm = searchBox.value.trim().toLowerCase();
    if (searchTerm) {
        results = results.filter(record => record.username.toLowerCase().includes(searchTerm));
    }

    // Display the filtered and sorted results
    displayScoreboard(results);
}

// Event Listeners
dateFilter.addEventListener("change", filterAndSortResults);
levelFilter.addEventListener("change", filterAndSortResults);
searchBox.addEventListener("input", filterAndSortResults);

// Initialize Scoreboard
document.addEventListener("DOMContentLoaded", () => {
    filterAndSortResults(); // Initial load
});
