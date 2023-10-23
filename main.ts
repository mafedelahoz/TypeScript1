import { Serie } from './serie.js';
import { dataSeries } from './data.js';

let seriesTableBody  = document.getElementById('series') as HTMLTableSectionElement;
let averageSeasons :  HTMLParagraphElement= document.getElementById('averageSeasons') as HTMLParagraphElement;

renderSeriesInTable(dataSeries);
averageSeasons.innerHTML = `<b>Seasons average:</b> ${calculateAverage(dataSeries)}`;

function renderSeriesInTable(series: Serie[]):void{    
    series.forEach((s, p) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
          <td><b>${p + 1}</b></td>
          <td><a href="${s.getImage()}" target="_blank">${s.getName()}</a></td>
          <td>${s.getChannel()}</td>
          <td>${s.getSeasons()}</td>
        `;
        seriesTableBody.appendChild(tr);
      });
    }
    
function calculateAverage(series: Serie[]) {
        let totalSeasons = series.reduce((sum, serie) => sum + serie.getSeasons(), 0);
        return (totalSeasons / series.length)
      }
