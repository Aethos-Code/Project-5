const filterButtons = document.querySelectorAll(".filter_buttons button");

const cards = [
    {
      name: "3D-print",
      image: "img/3D-print.png",
      title: "3D-print",
      date: "05/12/24",
      description: "Oplev en ny verden med 3D-print, hvor du får muligheden fra at gå til ide til dit helt eget fysisk produkt"
    },
    {
      name: "3D-print",
      image: "img/3D-print2.png",
      title: "3D-print",
      date: "27/12/24",
      description: "Mød op d.27/12 og bring alle dine gode ideer med, så vi kan bringe dem til virkelighed!"
    },
    {
      name: "3D-print",
      image: "img/3d-print3.png",
      title: "3D-print",
      date: "15/12/24",
      description: "Kun du kan sætte dine egne grænse for din fantasi!"
    },
    {
      name: "Laserskæring",
      image: "img/Laser.png",
      title: "Laserskæring",
      date: "07/12/24",
      description: "Start dit første projekt med en nøglering ud træ - det er ret delulu"
    },
    {
      name: "Laserskæring",
      image: "img/laser2.png",
      title: "Laserskæring",
      date: "12/12/24",
      description: "Mød op til noget laserskæring i træ med en kop kaf' i hånden, hvorfor ik'?"
    },
    {
      name: "Laserskæring",
      image: "img/laser3.png",
      title: "Laserskæring",
      date: "24/12/24",
      description: "Brænd lidt krut af med laser"
    },
    {
      name: "Laserskæring",
      image: "img/laser4.png",
      title: "Laserskæring",
      date: "16/12/24",
      description: "Få endnu en fordel i livet og mød op til laserskæring, hvor du selv designer din fantasi fra bunden"
    },
    {
      name: "Creative",
      image: "img/creative.png",
      title: "Creative Work",
      date: "20/12/24",
      description: "Tag en ven under armen og sving din kreativitet i gang"
    },
    {
      name: "Creative",
      image: "img/creative2.png",
      title: "Creative Work",
      date: "21/12/24",
      description: "Hvorfor sidde alene med din kreativitet, når du kan sidde med hele holdet bror"
    },
    {
      name: "Creative",
      image: "img/creative3.png",
      title: "Creative Work",
      date: "23/12/24",
      description: "Vi tilbyder dig en åben verden - ingen grænser!"
    },
    {
      name: "Design",
      image: "img/design.png",
      title: "Design Work",
      date: "24/12/24",
      description: "Er du lidt mere til design. Bring energien og humøret til en god stemning over dit eget design!"
    },
    {
      name: "Design",
      image: "img/design2.png",
      title: "Design Work",
      date: "17/12/24",
      description: "Du kan udarbejde lige, hvad der lyster dig. Tag og medbring din ide og gør det til vision"
    },
    {
      name: "Design",
      image: "img/design3.png",
      title: "Design Work",
      date: "06/12/24",
      description: "Design behøver skam ikke kun være fysisk i hænderne. Udnyt muligheden med vores resourcer"
    },
    {
      name: "Design",
      image: "img/design4.png",
      title: "Design Work",
      date: "08/12/24",
      description: "Vi tilbyder dig alt vi har for at kunne opstarte dit design enten fysisk eller digitalt"
    }
  ];


const filterContainer = document.getElementById('cards-container');

cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.setAttribute('data-name', card.name); // Set the data-name attribute for filtering
    
    cardElement.innerHTML = `
      <img src="${card.image}" alt="${card.name}" />
      <div class="card_body">
        <h6 class="card_title">${card.title} ${card.date}</h6>
        <p class="card_text">${card.description}</p>
        <a id="tilmeld" href="">Tilmeld her →</a>
      </div>
    `;
    
    filterContainer.appendChild(cardElement);
  });


const filterableCards = document.querySelectorAll("#cards-container .card");


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
images.forEach((images) => {
    imageSources.push(images.src);
});

// log imagesources array til konsollen for at verficere indholdet
console.log(imageSources);