var buttonDisplayMenu = document.querySelector('.displayMenu');
var foodMenu = document.querySelector('.options');

buttonDisplayMenu.addEventListener('click', function(event) {
    foodMenu.style.display = 'inline-block';
  });
var todayOp = document.querySelector('.todayOp');
var options = document.querySelector('.optionsList'),
    servingMenu = document.querySelector('.servingMenu'),
    eOd = document.querySelector('.eatOdrink'),
    serving = document.querySelectorAll('.serving'),
    choiceSlctd = [],
    yes = [],
    no = [];

todayOp.addEventListener('click', function(event) {
  todayOp.innerHTML = '';
});

for (var i = 0; i < serving.length; i++) {
    var serveChoice = serving[i].textContent;
    if (serveChoice.startsWith('R') || serveChoice.startsWith('J') || serveChoice.startsWith('M')) {
        yes.push(serveChoice);
    } else {
        no.push(serveChoice);
    }
}
options.addEventListener('click', function (evt) {
    'use strict';
    var choice = evt.target.textContent;
    choiceSlctd = choice;
    eOd.style.display = 'inline-block';
    document.querySelector('.suggestion').innerHTML = '';
});
eOd.addEventListener('click', function (evt) {
    'use strict';
    var Pchoice = evt.target.textContent,
        getServingToEat = getServingToEat(),
        getServingToDrink = getServingToDrink();
    function getServingToEat() {
        'use strict';
        for (var i = 0; i < yes.length; i++) {
            var toEat = [];
            if (yes[i].startsWith('R') && choiceSlctd === 'Chocolatey' && Pchoice === 'yes') {
                toEat = yes[i];
                return toEat;
            } else if (yes[i].startsWith('M') && choiceSlctd === 'Super Sweet' && Pchoice === 'yes') {
                toEat = yes[i];
                return toEat;
            } else if (yes[i].startsWith('J') && choiceSlctd === 'Healthy Desserts' && Pchoice === 'yes') {
                toEat = yes[i];
                return toEat;
            }
        }
    }
    function getServingToDrink() {
        'use strict';
        for (var i = 0; i < no.length; i++) {
            var toDrink = [];
            if (no[i].startsWith('D') && choiceSlctd === 'Chocolatey' && Pchoice === 'no') {
                toDrink = no[i];
                return toDrink;
            } else if (no[i].startsWith('C') && choiceSlctd === 'Super Sweet' && Pchoice === 'no') {
                toDrink = no[i];
                return toDrink;
            } else if (no[i].startsWith('T') && choiceSlctd === 'Healthy Desserts' && Pchoice === 'no') {
                toDrink = no[i];
                return toDrink;
            }
        }
    }
    if (Pchoice === 'yes') {
        document.querySelector('.suggestion').innerHTML = getServingToEat;
    } else {
        document.querySelector('.suggestion').innerHTML = getServingToDrink;
    }
});
