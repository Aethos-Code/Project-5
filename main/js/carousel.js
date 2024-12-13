let carousel = document.querySelector(".carousel");
let container = document.querySelector(".container");

let dragging = false;
let startX;
let containerX;

const items = [
    {name: 'Mads', education: 'Multimediedesigner', source: 'assets/items/car1.webp'},
    {name: 'Gertrud', education: 'Multimediedesigner', source: 'assets/items/car2.webp'},
    {name: 'Jack', education: 'Multimediedesigner', source: 'assets/items/car3.webp'},
    {name: 'Nikoline', education: 'Multimediedesigner', source: 'assets/items/car4.webp'},
    {name: 'Nicolai', education: 'Multimediedesigner', source: 'assets/items/car5.webp'},
    {name: 'Manar', education: 'Multimediedesigner', source: 'assets/items/car6.webp'},
    {name: 'Nikoline', education: 'Multimediedesigner', source: 'assets/items/car7.webp'},
    {name: 'Tahani', education: 'Multimediedesigner', source: 'assets/items/car8.webp'},
    {name: 'Lasse', education: 'Multimediedesigner', source: 'assets/items/car9.webp'},
    {name: 'Emil', education: 'Multimediedesigner', source: 'assets/items/car8.webp'},
    {name: 'Trine', education: 'Multimediedesigner', source: 'assets/items/car9.webp'},
    {name: 'Cassandra', education: 'Multimediedesigner', source: 'assets/items/car8.webp'},
    {name: 'Emilie', education: 'Multimediedesigner', source: 'assets/items/car9.webp'}
];

function creation() {
    for (let i = 0; i < items.length; i++) {
        const itemCreate = document.createElement('div');
        const imgInsert = document.createElement('img');

        const contentInsert = document.createElement('div');
        contentInsert.className = 'item-content';

        const contentName = document.createElement('p');
        const contentEdu = document.createElement('p');
        contentName.innerHTML = items[i].name;
        contentEdu.innerHTML = items[i].education;
        contentEdu.style.fontWeight = '400' 

        itemCreate.className = 'item';
        itemCreate.id = i;
        imgInsert.src = items[i].source;
        
        imgInsert.setAttribute('draggable', 'false');

        
        itemCreate.appendChild(contentInsert);
        contentInsert.appendChild(contentName);
        contentInsert.appendChild(contentEdu);

        
        container.appendChild(itemCreate);
        itemCreate.appendChild(imgInsert);
        
        
    }
}

creation();



carousel.addEventListener("mousedown", (e) => {
    dragging = true;
    startX = e.pageX;
    containerX = parseInt(container.style.left) || 0;
    carousel.style.cursor = "grabbing";
});

window.addEventListener("mouseup", () => stopDragging());
carousel.addEventListener("mouseleave", () => stopDragging());

function stopDragging() {
    dragging = false;
    carousel.style.cursor = "grab";
}

carousel.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    const offset = e.pageX - startX;
    const newX = containerX + offset;
    container.style.left = `${newX}px`;

    boundary();
});

const hover = document.querySelectorAll('.item');

hover.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.lastElementChild.style.filter = "brightness(50%)";
        item.firstElementChild.style.opacity = '100%';
    });

    item.addEventListener('mouseleave', () => {
        item.lastElementChild.style.filter = "brightness(100%)";
        item.firstElementChild.style.opacity = '0%';
    });
});



let boundary = () => {
    let outer = carousel.getBoundingClientRect();
    let inner = container.getBoundingClientRect();
    const maxLeft = 0;
    const maxRight = outer.width - inner.width;
    
    
    const currentX = parseInt(container.style.left) || 0;


    if (currentX > maxLeft) {
        container.style.left = `${maxLeft}px`;
    }

    if (currentX < maxRight) {
        container.style.left = `${maxRight}px`;
    }
};

