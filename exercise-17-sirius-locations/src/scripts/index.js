import { locationsData } from "../assets/data/locations.js";

// Fragment node to avoid dom manipulation at every step
const fragmentNode = document.createDocumentFragment();

// Iterating over the locations data array
for (const locationData of locationsData) {
  const rowElement = $("<div></div>").addClass("locations-info-row"); // container element for a row
  const imageContainer = $("<div></div>")
    .addClass("country-image-container")
    .html(`<img src="../src/assets/images/flag.png" alt="Country flag" class="location-country">`);
  const stateTextElement = $("<p></p>").addClass("location-info-text").text(locationData.state);
  const cityTextElement = $("<p></p>").addClass("location-info-text").text(locationData.city);
  const contactTextElement = $("<p></p>").addClass("location-info-text").text(locationData.contact);
  // appending elements to the row container
  rowElement.append(imageContainer, stateTextElement, cityTextElement, contactTextElement);
  fragmentNode.appendChild(rowElement[0]); // appending to the fragment node
}

$("#locations").append(fragmentNode);

$(function () {
  $("#solutions").accordion(); // enabling the accordion functionality
  $("#tabs").tabs();
});