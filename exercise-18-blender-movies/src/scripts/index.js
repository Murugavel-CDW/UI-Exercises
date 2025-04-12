import { postersData } from "../assets/data/postersData.js";
import { movieData } from "../assets/data/movieData.js";

const {videoUrl, title, description, comments} = movieData;

const videoElement = $("#video");
videoElement.prepend($("<source/>").attr({
    src: videoUrl,
    type: "video/mp4"
}));

$("#movie-title").text(title);
$("#movie-description").text(description);