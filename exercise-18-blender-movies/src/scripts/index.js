import { postersData } from "../assets/data/postersData.js";
import { movieData } from "../assets/data/movieData.js";

const { videoUrl, title, description, comments } = movieData; // destructuring data from the movieData object

// Function to create and return a comment element
const createCommentListElement = (commentData) => {
    const listItem = $("<li></li>").addClass("comments-section-list-item");
    const imageContainer = $("<div></div>").addClass("commentator-image-container");
    const imageElement = $("<img/>").attr({
        src: `../src/assets/${commentData.image}`,
        alt: `${commentData.name} image`,
        class: "commentator-image"
    });
    imageContainer.append(imageElement);
    const commentContainer = $("<div></div>").addClass("comment-info-container");
    const commentName = $("<h3></h3>").addClass("commentator-name fw-600").text(commentData.name);
    const commentText = $("<p></p>").addClass("comment-text fw-300").text(commentData.comment);
    commentContainer.append(commentName, commentText);
    listItem.append(imageContainer, commentContainer);
    return listItem[0];
};

// Function to create and return a movie element
const createMovieListElement = (posterData) => {
    const movieContainer = $("<div></div>").addClass("movie-list-image-container");
    const movieImage = $("<img/>").attr({
        src: posterData.imageUrl,
        alt: posterData.title,
        class: "movie-list-image"
    });
    movieContainer.append(movieImage);
    return movieContainer[0];
}

// Movies section DOM manipulation

const movieVideoSection = $(".movie-container");
const videoElement = movieVideoSection.find("#video");
videoElement.prepend($("<source/>").attr({
    src: videoUrl,
    type: "video/mp4"
}));

movieVideoSection.find("#movie-title").text(title);
movieVideoSection.find("#movie-description").text(description);

// Comments section DOM manipulation

const commentSectionList = movieVideoSection.find("#comments-section-list");
let fragmentNode = new DocumentFragment(); 
comments.forEach((commentData) => {
    const listItem = createCommentListElement(commentData);
    fragmentNode.appendChild(listItem); // appending to fragment node to avoid overhead
});
commentSectionList.append(fragmentNode); // appending the fragment node to the actual dom node

// Movie List DOM manipulation

const moviesList = $("#movie-list-container");
fragmentNode = new DocumentFragment();
postersData.forEach((posterData) => {
    const moviesListElement = createMovieListElement(posterData);
    fragmentNode.appendChild(moviesListElement);
});
moviesList.append(fragmentNode);

// Appending current year in the copyrights section

const currentYear = new Date().getFullYear(); // retrieving the current year
$("#year-text").text(currentYear);