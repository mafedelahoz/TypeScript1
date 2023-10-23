import { dataSeries } from './data.js';
var seriesTableBody = document.getElementById('series');
var averageSeasons = document.getElementById('averageSeasons');
renderSeriesInTable(dataSeries);
averageSeasons.innerHTML = "<b>Seasons average:</b> ".concat(calculateAverage(dataSeries));
function renderSeriesInTable(series) {
    series.forEach(function (s, p) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n          <td><b>".concat(p + 1, "</b></td>\n          <td><a href=\"").concat(s.getImage(), "\" target=\"_blank\">").concat(s.getName(), "</a></td>\n          <td>").concat(s.getChannel(), "</td>\n          <td>").concat(s.getSeasons(), "</td>\n        ");
        seriesTableBody.appendChild(tr);
    });
}
function calculateAverage(series) {
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.getSeasons(); }, 0);
    return (totalSeasons / series.length);
}
