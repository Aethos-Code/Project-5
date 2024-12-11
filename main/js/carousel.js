let carousel = document.querySelector(".carousel");
let container = document.querySelector(".container");

let dragging = false;
let startX;
let containerX;

const items = [
    {name: 'Mads', education: 'Multimediedesigner', source: 'assets/items/car1.png'},
    {name: 'Gertrud', education: 'Multimediedesigner', source: 'assets/items/car2.png'},
    {name: 'Jack', education: 'Multimediedesigner', source: 'assets/items/car3.png'},
    {name: 'Nikoline', education: 'Multimediedesigner', source: 'assets/items/car4.png'},
    {name: 'Nicolai', education: 'Multimediedesigner', source: 'assets/items/car5.png'},
    {name: 'Manar', education: 'Multimediedesigner', source: 'assets/items/car6.png'},
    {name: 'Nikoline', education: 'Multimediedesigner', source: 'assets/items/car7.png'},
    {name: 'Tahani', education: 'Multimediedesigner', source: 'assets/items/car8.png'},
    {name: 'Lasse', education: 'Multimediedesigner', source: 'assets/items/car9.png'},
    {name: 'Emil', education: 'Multimediedesigner', source: 'assets/items/car8.png'},
    {name: 'Trine', education: 'Multimediedesigner', source: 'assets/items/car9.png'},
    {name: 'Cassandra', education: 'Multimediedesigner', source: 'assets/items/car8.png'},
    {name: 'Emilie', education: 'Multimediedesigner', source: 'assets/items/car9.png'}
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

    const dx = e.pageX - startX;
    const newLeft = containerX + dx;
    container.style.left = `${newLeft}px`;

    boundItems();
});

const test = document.querySelectorAll('.item');

test.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.lastElementChild.style.filter = "brightness(50%)";
        item.firstElementChild.style.opacity = '100%';
    });

    item.addEventListener('mouseleave', () => {
        item.lastElementChild.style.filter = "brightness(100%)";
        item.firstElementChild.style.opacity = '0%';
    });
});



let boundItems = () => {
    let outer = carousel.getBoundingClientRect();
    let inner = container.getBoundingClientRect();
    const maxLeft = 0;
    const maxRight = outer.width - inner.width;
    
    
    const currentLeft = parseInt(container.style.left) || 0;


    if (currentLeft > maxLeft) {
        container.style.left = `${maxLeft}px`;
    }

    if (currentLeft < maxRight) {
        container.style.left = `${maxRight}px`;
    }
};

