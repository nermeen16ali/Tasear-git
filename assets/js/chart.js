// -------------------------------
// DATA
// -------------------------------
const percentages = [30, 55, 75, 25, 60, 80, 45, 20, 70, 65];
const maxValue = Math.max(...percentages);
const minValue = Math.min(...percentages);

const colorBars = percentages.map(v => {
    if (v === minValue) return '#34C759'; // green
    if (v === maxValue) return '#FF383C'; // red
    return '#063235'; // dark teal
});

// Create small gap between gray and color
const GAP = 2;

// Calculate remainder for gray bar
const remainderData = percentages.map(p => Math.max(0, 100 - p - GAP));

const ctx = document.getElementById('priceChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'متجر 1', 'متجر 2', 'متجر 3', 'متجر 4', 'متجر 5',
            'متجر 6', 'متجر 7', 'متجر 8', 'متجر 9', 'متجر 10'
        ],
        datasets: [
            // 1. Colored percentage (Bottom)
            {
                data: percentages,
                backgroundColor: colorBars,
                borderRadius: 4,
                barThickness: 10,
                stack: 'stack1'
            },
            // 2. Gap (transparent)
            {
                data: new Array(percentages.length).fill(GAP),
                backgroundColor: 'transparent',
                stack: 'stack1'
            },
            // 3. Gray background (Remainder)
            {
                data: remainderData,
                backgroundColor: '#E5E5EF',
                borderRadius: 3,
                barThickness: 10,
                stack: 'stack1'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                rtl: true,
                callbacks: {
                    label: ctx => `${percentages[ctx.dataIndex]}%`
                },
                filter: function (tooltipItem) {
                    return tooltipItem.datasetIndex === 0;
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
                position: 'right',
                max: 100,
                ticks: {
                    callback: v => v + '%'
                },
                grid: {
                    color: '#E5E5EF'
                }
            }
        }
    }
});