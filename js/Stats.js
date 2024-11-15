        document.addEventListener('DOMContentLoaded', () => {
            // Example dynamic data (replace with localStorage or API data)
            const successRateData = {
                labels: ['Niveau 1', 'Niveau 2', 'Niveau 3', 'Niveau 4', 'Niveau 5'],
                data: [85, 70, 60, 45, 30] // Success rates in percentage
            };
    
            const attemptsData = {
                labels: ['Niveau 1', 'Niveau 2', 'Niveau 3', 'Niveau 4', 'Niveau 5'],
                data: [20, 15, 25, 30, 10] // Number of attempts
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
                            'rgba(153, 102, 255, 0.7)'
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    animation: {
                        duration: 1500, // 1.5s animation
                        easing: 'easeOutBounce' // Bounce effect
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
                        duration: 2000, // 2s animation
                        easing: 'easeInOutQuart' // Smooth easing
                    }
                }
            });
        });
