document.addEventListener('DOMContentLoaded', () => {
    let users = JSON.parse(localStorage.getItem('utilisateurs')) || [];
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

    const successRateCtx = document.getElementById('successRateChart').getContext('2d');
    const attemptsLevelCtx = document.getElementById('attemptsLevelChart').getContext('2d');

    // Recalculate data and update charts
    const updateCharts = () => {
        const attemptsData = calculateAttemptsData(users);
        const successRateData = calculateSuccessRateData(users);

        successRateChart.data.labels = successRateData.labels;
        successRateChart.data.datasets[0].data = successRateData.data;
        successRateChart.update();

        attemptsLevelChart.data.labels = attemptsData.labels;
        attemptsLevelChart.data.datasets[0].data = attemptsData.data;
        attemptsLevelChart.update();
    };

    // Calculate attemptsData
    const calculateAttemptsData = (users) => {
        return {
            labels: levels,
            data: levels.map(level => {
                let totalAttempts = 0;
                let count = 0;

                users.forEach(user => {
                    if (user.levels && user.levels[level]) {
                        const categories = user.levels[level];
                        const levelAttempts = Object.values(categories)
                            .map(category => category[2] || 0) // Extract number of attempts
                            .reduce((sum, attempts) => sum + attempts, 0);

                        totalAttempts += levelAttempts;
                        count++;
                    }
                });

                return count > 0 ? (totalAttempts / count).toFixed(2) : 0;
            })
        };
    };

    // Calculate successRateData
    const calculateSuccessRateData = (users) => {
        return {
            labels: levels,
            data: levels.map(level => {
                const completedCount = users.filter(user => {
                    if (user.levels && user.levels[level]) {
                        const categories = user.levels[level];
                        return Object.values(categories).every(category => category[1] === true);
                    }
                    return false;
                }).length;

                return users.length > 0 ? ((completedCount / users.length) * 100).toFixed(2) : 0;
            })
        };
    };

    // Initial render
    const attemptsData = calculateAttemptsData(users);
    const successRateData = calculateSuccessRateData(users);

    const successRateChart = new Chart(successRateCtx, {
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
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            animation: { duration: 1500, easing: 'easeOutBounce' }
        }
    });

    const attemptsLevelChart = new Chart(attemptsLevelCtx, {
        type: 'bar',
        data: {
            labels: attemptsData.labels,
            datasets: [{
                label: 'Nombre de Tentatives',
                data: attemptsData.data,
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true } },
            animation: { duration: 2000, easing: 'easeInOutQuart' }
        }
    });

    // Watch for new users being added or updated
    document.addEventListener('newUserAdded', () => {
        users = JSON.parse(localStorage.getItem('utilisateurs')) || [];
        updateCharts();
    });
});
