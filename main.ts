import { Serie } from "./serie.js";
import { series } from "./data.js";

const seriesTBody: HTMLElement = document.getElementById('series')!;
const seasonAverageHTML: HTMLElement = document.getElementById('seasonAverage')!;
const serieDetailsHTML: HTMLElement = document.getElementById('serieDetails')!;

renderSeriesInTable(series);
renderSeasonAverage(series);

function renderSeriesInTable(series: Serie[]): void {
    series.forEach((serie) => {
        const trElement = document.createElement("tr");
        trElement.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td>${serie.name}</td>
            <td>${serie.chanel}</td>
            <td>${serie.seasons}</td>`;
            trElement.addEventListener('click', () => {
                renderSerieDetails(serie);
            });
            trElement.style.cursor = 'pointer';
        seriesTBody.appendChild(trElement);
    });
}

function renderSeasonAverage(series: Serie[]): void {
    seasonAverageHTML.innerHTML = `${getSeasonsAverage(series)}`
}

function renderSerieDetails(serie: Serie): void {
    serieDetailsHTML.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${serie.imageURL}" class="card-img-top" alt="${serie.name}">
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.link}">${serie.link}</a>
            </div>
        </div>`
}

function getSeasonsAverage(series: Serie[]): number {
    let average: number = 0;
    series.forEach((serie) => {
        average += serie.seasons / series.length
    });
    return average;
}