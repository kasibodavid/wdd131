document.addEventListener('DOMContentLoaded', function () {
  // Set footer copyright year
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  document.getElementById('currentyear').innerText = currentYear;

  // Set footer last modified date
  document.getElementById('lastModified').innerText = document.lastModified;

  // Add event listener to the menu button
  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('.navigation');

  hamButton.addEventListener('click', function () {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
  });
});

const temples = [
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 40000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/photo-galleries/rome-italy-temple/400x250/rome-italy-temple-3544.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Johannesburg South Africa Temple",
    location: "Johannesburg, South Africa",
    dedicated: "1985-08-24",
    area: 30000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/400x250/johannesburg-south-africa-temple-22476.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay (near Paris), France",
    dedicated: "2017-05-21",
    area: 28000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/400x250/paris-france-temple-2054.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/400x250/yigo-guam-temple-26502.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/400x250/mexico-city-mexico-temple-16841.jpg"
  },
  {
    templeName: "Bangkok Thailand Temple",
    location: "Bangkok, Thailand",
    dedicated: "2023-10-22",
    area: 45000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/400x250/bangkok-thailand-temple-40037.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/400x250/payson-utah-temple-11087.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/400x250/washington-d.c.-temple-26454.jpg"
  },
];

let itemMenu = document.querySelectorAll('.item-menu');

itemMenu.forEach(menu => {
  menu.addEventListener('click', function () {
    let menuRel = menu.getAttribute('rel');
    let filteredData;
    if (menuRel == 'old' || menuRel == 'new') {
      if (menuRel == 'old') {
        filteredData = temples.filter(temple => !checkOldNew(temple.dedicated));
      } else {
        filteredData = temples.filter(temple => checkOldNew(temple.dedicated));
      }
    }
    else if (menuRel == 'large' || menuRel == 'small') {
      if (menuRel == 'large') {
        filteredData = temples.filter(temple => temple.area > 90000);
      } else {
        filteredData = temples.filter(temple => temple.area < 10000);
      }
    }
    else {
      filteredData = temples.filter(temple => temple !== undefined);
    }

    createTemplateCard(filteredData);
  });
});

function checkOldNew(dateOldNew) {
  const date1 = new Date(dateOldNew);
  return date1.getFullYear() > 1999;
}

createTemplateCard(temples);

function createTemplateCard(filteredTemples) {
  document.querySelector('.res-grid').innerHTML = '';

  filteredTemples.forEach(temple => {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let location = document.createElement('p');
    let dedication = document.createElement('p');
    let area = document.createElement('p');
    let img = document.createElement('img');

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);
    card.setAttribute('class', 'col-3');

    document.querySelector('.res-grid').appendChild(card);
  });
}



// function displayTemples(filteredTemples) {
//   templeContainer.innerHTML = '';
//   filteredTemples.forEach(createTempleCard);
// }

// function filterTemples(menu) {
//   let filteredTemples = temples;

//   switch (citem-menu) {
//       case 'Old':
//           filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
//           break;
//       case 'New':
//           filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
//           break;
//       case 'Large':
//           filteredTemples = temples.filter(temple => temple.area > 90000);
//           break;
//       case 'Small':
//           filteredTemples = temples.filter(temple => temple.area < 10000);
//           break;
//       case 'Home':
//       default:
//           filteredTemples = temples;
//           break;
//   }

//   displayTemples(filteredTemples);
// }

// navItems.forEach(item => {
//   item.addEventListener('click', () => {
//       const criteria = item.dataset.criteria;
//       filterTemples(criteria);
//   });
// });


    