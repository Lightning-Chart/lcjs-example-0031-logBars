/*
 * LightningChart JS Example that showcases logarithmic Y Axis in a Grouped Bars Chart.
 */
// Import LightningChartJS
const lcjs = require('@lightningchart/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, BarChartSorting, Themes } = lcjs

const barChart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
    .BarChart({
        valueAxis: {
            type: 'logarithmic',
        },
        theme: (() => {
    const t = Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined
    const smallView = Math.min(window.innerWidth, window.innerHeight) < 500
    if (!window.__lcjsDebugOverlay) {
        window.__lcjsDebugOverlay = document.createElement('div')
        window.__lcjsDebugOverlay.style.cssText = 'position:fixed;top:0;left:0;background:rgba(0,0,0,0.7);color:#fff;padding:4px 8px;z-index:99999;font:12px monospace;pointer-events:none'
        if (document.body) document.body.appendChild(window.__lcjsDebugOverlay)
        setInterval(() => {
            if (!window.__lcjsDebugOverlay.parentNode && document.body) document.body.appendChild(window.__lcjsDebugOverlay)
            window.__lcjsDebugOverlay.textContent = window.innerWidth + 'x' + window.innerHeight + ' dpr=' + window.devicePixelRatio + ' small=' + (Math.min(window.innerWidth, window.innerHeight) < 500)
        }, 500)
    }
    return t && smallView ? lcjs.scaleTheme(t, 0.5) : t
})(),
    })
    .setTitle('Grouped Bars Chart with Logarithmic Y Axis')
    .setValueLabels(undefined)

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

barChart.valueAxis.setTitle('Product sales').setUnits('€')
