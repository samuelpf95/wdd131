const year = document.querySelector("#currentyear");
const lastmod = document.querySelector("#lastModified")
const today=new Date();

year.innerHTML = today.getFullYear();
lastmod.innerHTML=new Date(document.lastModified);

const menu = document.querySelector("#menu");
const open= document.querySelector("#hamburger");

open.addEventListener("click", () =>{
    menu.classList.toggle("hidden");
    open.classList.toggle("hidden");
});
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bountiful Utah Temple",
    location: "Bountiful, Utah, United States",
    dedicated: "1992 , May, 2",
    area: 104000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955-main.jpg"
  },
  {
    templeName: "Brigham City Utah Temple",
    location: "Brigham City, Utah, United States",
    dedicated: "2012, September, 23",
    area: 36000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-39612-main.jpg"
  },
  {
    templeName: "Deseret Peak Utah Temple",
    location: "Tooele, Utah, United States",
    dedicated: "1983, December, 2",
    area: 71998,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/deseret-peak-utah-temple/deseret-peak-utah-temple-54400-main.jpg"
  },
];

const getTemples = (filter = "all") =>{
    let filteredTemples = temples;
    switch (filter) {
        case "Old":
            filteredTemples = filteredTemples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year < 1900;
            });
            break;
        case "New":
            filteredTemples = filteredTemples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year > 2000;
            });
            break;
        case "Large":
            filteredTemples = filteredTemples.filter(temple => temple.area > 90000);
            break;
        case "Small":
            filteredTemples = filteredTemples.filter(temple => temple.area < 10000);
            break;
        case "Home":
            break;
    }
    displayTemples(filteredTemples);
};

    const displayTemples = (temples) => {
    const cards = document.querySelector("#temples");
    cards.innerHTML = "";

    temples.forEach(temple => {
        let card = document.createElement("section");
        let h2 = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let size = document.createElement("p");
        let image = document.createElement("img");

        h2.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        size.textContent = `Size: ${temple.area} sq ft`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName}`);

        card.appendChild(h2);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(size);
        card.appendChild(image);

        cards.appendChild(card);

        image.setAttribute("loading", "lazy");
		image.setAttribute("width", "500");
		image.setAttribute("height", "350");
    });
};
getTemples();

document.querySelector("#Home").addEventListener("click", (e) => {
    e.preventDefault();
    getTemples("Home");
});
document.querySelector("#Old").addEventListener("click", (e) => {
    e.preventDefault();
    getTemples("Old");
});
document.querySelector("#New").addEventListener("click", (e) => {
    e.preventDefault();
    getTemples("New");
});
document.querySelector("#Large").addEventListener("click", (e) => {
    e.preventDefault();
    getTemples("Large");
});
document.querySelector("#Small").addEventListener("click", (e) => {
    e.preventDefault();
    getTemples("Small");
});