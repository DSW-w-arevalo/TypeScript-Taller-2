import { series } from "./data.js";
var seriesTBody = document.getElementById('series');
var seasonAverageHTML = document.getElementById('seasonAverage');
var serieDetailsHTML = document.getElementById('serieDetails');
renderSeriesInTable(series);
renderSeasonAverage(series);
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <th scope=\"row\">".concat(serie.id, "</th>\n            <td>").concat(serie.name, "</td>\n            <td>").concat(serie.chanel, "</td>\n            <td>").concat(serie.seasons, "</td>");
        trElement.addEventListener('click', function () {
            renderSerieDetails(serie);
        });
        trElement.style.cursor = 'pointer';
        seriesTBody.appendChild(trElement);
    });
}
function renderSeasonAverage(series) {
    seasonAverageHTML.innerHTML = "".concat(getSeasonsAverage(series));
}
function renderSerieDetails(serie) {
    serieDetailsHTML.innerHTML = "\n        <div class=\"card\" style=\"width: 18rem;\">\n            <img src=\"".concat(serie.imageURL, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                <p class=\"card-text\">").concat(serie.description, "</p>\n                <a href=\"").concat(serie.link, "\">").concat(serie.link, "</a>\n            </div>\n        </div>");
}
function getSeasonsAverage(series) {
    var average = 0;
    series.forEach(function (serie) {
        average += serie.seasons / series.length;
    });
    return average;
}
