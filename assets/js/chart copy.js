const ctx = document.getElementById('priceChart').getContext('2d');

const percentages = [20, 65, 95, 20, 65, 95, 50, 30, 65, 15, 65, 100];
const maxValue = Math.max(...percentages);
const minValue = Math.min(...percentages);

const colorBars = percentages.map(v => {
    if (v === minValue) return '#34C759'; // green
    if (v === maxValue) return '#FF383C'; // red
    return '#063235'; // dark teal
});

// Create small gap between gray and color
const GAP = 2;

const colorData = percentages;
const gapData = percentages.map(() => GAP);
const remainderData = percentages.map(v => 100 - v - GAP);

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [
            // 1. Colored Bar (Percentage) - at bottom
            {
                data: colorData,
                backgroundColor: colorBars,
                borderRadius: {
                    topLeft: 3,
                    topRight: 3,
                    bottomLeft: 3,
                    bottomRight: 3
                },
                barThickness: 10,
                stack: 'stack1'
            },
            // 2. Transparent Gap
            {
                data: gapData,
                backgroundColor: 'transparent',
                borderRadius: 0,
                barThickness: 10,
                stack: 'stack1'
            },
            // 3. Gray background (Remainder)
            {
                data: remainderData,
                backgroundColor: '#E5E5EF',
                borderRadius: {
                    topLeft: 3,
                    topRight: 3,
                    bottomLeft: 3,
                    bottomRight: 3
                },
                barThickness: 10,
                stack: 'stack1'
            }
        ]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: ctx => `${ctx.parsed.x}%`
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: true,
                    color: '#E5E5EF'
                }
            },
            y: {
                stacked: true,
                max: 100,
                ticks: {
                    display: false,
                    callback: v => v + '%'
                },
                grid: {
                    color: '#E5E5EF'
                }
            }
        }
    }
});