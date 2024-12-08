document.addEventListener('DOMContentLoaded', () => {
    let users = JSON.parse(localStorage.getItem('utilisateurs')) || [];

    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

    // Calculate attemptsData
    const attemptsData = {
        labels: levels,
        data: levels.map(level => {
            let totalAttempts = 0;
            let count = 0;
            users.forEach(user => {
                if (user.progress && user.progress[level]) {
                    totalAttempts += user.progress[level].tentative || 0;
                    count++;
                }
            });
            return count > 0 ? (totalAttempts / count) : 0;
        })
    };

    // Calculate successRateData
    const successRateData = {
        labels: levels,
        data: levels.map(level => {
            let count = users.filter(user => {
                const levelIndex = levels.indexOf(level);
                const userLevelIndex = levels.indexOf(user.currentLevel);
                return userLevelIndex >= levelIndex;
            }).length;
            return users.length > 0 ? ((count / users.length) * 100).toFixed(2) : 0;
        })
    };

    // Taux de Réussite Global Chart
    const successRateCtx = document.getElementById('successRateChart').getContext('2d');
    new Chart(successRateCtx, {
        type: 'doughnut',
        data: {
            labels: successRateData.labels,
            datasets: [{
                label: 'Taux de Réussite (%)',
                data: successRateData.data,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1500,
                easing: 'easeOutBounce'
            }
        }
    });

    // Tentatives par Niveau Chart
    const attemptsLevelCtx = document.getElementById('attemptsLevelChart').getContext('2d');
    new Chart(attemptsLevelCtx, {
        type: 'bar',
        data: {
            labels: attemptsData.labels,
            datasets: [{
                label: 'Nombre de Tentatives',
                data: attemptsData.data,
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });
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
