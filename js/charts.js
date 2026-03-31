// SEOBlueprint101.com - Chart Scripts

// Ranking Factors Chart
const rankingFactorsCtx = document.getElementById('rankingFactorsChart');
if (rankingFactorsCtx) {
    new Chart(rankingFactorsCtx, {
        type: 'bar',
        data: {
            labels: ['Content Quality', 'Search Intent', 'On-Page SEO', 'User Experience', 'Backlinks', 'Topical Authority'],
            datasets: [{
                label: 'Impact %',
                data: [90, 85, 80, 75, 70, 65],
                backgroundColor: [
                    '#00d4ff',
                    '#00d4ff',
                    '#00a8cc',
                    '#007399',
                    '#ffd700',
                    '#ffb700'
                ],
                borderColor: '#00d4ff',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#e0e0e0'
                    },
                    grid: {
                        color: '#2a3f5f'
                    }
                },
                y: {
                    ticks: {
                        color: '#e0e0e0'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Traffic Sources Chart
const trafficSourcesCtx = document.getElementById('trafficSourcesChart');
if (trafficSourcesCtx) {
    new Chart(trafficSourcesCtx, {
        type: 'doughnut',
        data: {
            labels: ['Google Search (53%)', 'Pinterest (18%)', 'TikTok (12%)', 'Other (17%)'],
            datasets: [{
                data: [53, 18, 12, 17],
                backgroundColor: [
                    '#00d4ff',
                    '#ffd700',
                    '#ff6b6b',
                    '#00ff88'
                ],
                borderColor: '#0a1428',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#e0e0e0'
                    }
                }
            }
        }
    });
}

// Revenue Potential Chart
const revenueCtx = document.getElementById('revenueChart');
if (revenueCtx) {
    new Chart(revenueCtx, {
        type: 'bar',
        data: {
            labels: ['Google AdSense', 'Etsy Sales', 'Affiliate Marketing'],
            datasets: [{
                label: 'Monthly Revenue (USD)',
                data: [500, 1000, 2000],
                backgroundColor: [
                    '#00d4ff',
                    '#ffd700',
                    '#ff6b6b'
                ],
                borderColor: '#00d4ff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 2500,
                    ticks: {
                        color: '#e0e0e0',
                        callback: function(value) {
                            return '$' + value;
                        }
                    },
                    grid: {
                        color: '#2a3f5f'
                    }
                },
                x: {
                    ticks: {
                        color: '#e0e0e0'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and benefit cards
document.querySelectorAll('.feature-card, .benefit-card, .chart-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
