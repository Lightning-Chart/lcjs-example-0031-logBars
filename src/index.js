/*
 * LightningChart JS Example that showcases logarithmic Y Axis in a Grouped Bars Chart.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, BarChartSorting, LegendBoxBuilders, Themes } = lcjs

const barChart = lightningChart()
    .BarChart({
        valueAxis: {
            type: 'logarithmic',
        },
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
    })
    .setTitle('Grouped Bars Chart with Logarithmic Y Axis')
    .setValueLabels(undefined)
    .setCursorResultTableFormatter((builder, category, value, bar) => {
        builder.addRow('Department:', bar.subCategory).addRow('# of employees:', String(value))
        return builder
    })

barChart
    .setDataGrouped(
        ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
        [
            { subCategory: 'Product 1', values: [152000, 218000, 526900, 726500] },
            { subCategory: 'Product 2', values: [28300, 32600, 18000, 54600] },
            { subCategory: 'Product 3', values: [120000, 105600, 98500, 13400] },
        ],
    )
    .setSorting(BarChartSorting.Alphabetical)

barChart.valueAxis.setTitle('Product sales (€)')

// Add LegendBox.
const legend = barChart
    .addLegendBox(LegendBoxBuilders.VerticalLegendBox)
    // Dispose example UI elements automatically if they take too much space. This is to avoid bad UI on mobile / etc. devices.
    .setAutoDispose({
        type: 'max-width',
        maxWidth: 0.3,
    })
legend.add(barChart)
