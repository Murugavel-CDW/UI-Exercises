import {friendsList} from "./data.js";

// Card Element

const createCard = (fullName, email, imageSrc) => {
    const cardElement = document.createElement("div");
    cardElement.setAttribute("class", "friend-list-item");
    cardElement.innerHTML = `
        <div class="profile-image-container">
            <img src="${imageSrc}" alt="profile-image" class="profile-image">
        </div>
        <div class="profile-info-container">
            <p class="user-name">${fullName}</p>
            <p class="user-email">${email}</p>
        </div>
    `;
    return cardElement;
};

// Outermost container
const friendsListContainer = document.createElement("div");
friendsListContainer.setAttribute("class", "friends-list-container");

// Iterating over the friends object array
for (const friendObj of friendsList) {
    const fullName = friendObj.first_name + " " + friendObj.last_name;
    const cardElement = createCard(fullName, friendObj.email, friendObj.img);
    friendsListContainer.appendChild(cardElement);
}

document.querySelector("main").appendChild(friendsListContainer);