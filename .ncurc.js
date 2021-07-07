module.exports = {
  reject: [
    // Let's make sure we are deliberate about when we update React.
    'react',
    'react-dom',

    // Avoid updating ChartJS until we are ready to migrate to v3
    '@types/chart.js',
    'chart.js',
    'chartjs-plugin-datalabels',
    'react-chartjs-2'
  ]
}
