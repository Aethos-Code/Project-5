const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);

    filterableCards.forEach(card => {
        //tilføjer "hide" for at gemme kortet
        card.classList.add("hide");
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "alle"){
        card.classList.remove("hide");
        }
    })
};

filterButtons.forEach(button => button.addEventListener("click", filterCards));

// find alle img-elementer inde i .card div'er
const images = document.querySelectorAll('.card img');

// opret et tomt array til at gemme src-attributterne
const imageSources = [];

// gennemgå alle fundne billeder og tilføj deres src til arrayet
images.forEach((imag) => {
    imageSources.push(images.src);
});

// log imagesources array til konsollen for at verficere indholdet
console.log(imageSources);