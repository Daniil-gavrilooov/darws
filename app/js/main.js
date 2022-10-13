const textArea = document.querySelector('.draws__input'),
      textAreaValue = textArea.value
      sep = ';',
      drawsBtn = document.querySelector('.draws-generation__btn'),
      firsLapList = document.querySelector(".draws__list-firsLap"),
      secondeLapList = document.querySelector('.draws__list-secondeLap'),
      thirdLapList = document.querySelector('.draws__list-thirdLap'),
      fourthLapList = document.querySelector('.draws__list-fourthLap'),
      players = textAreaValue.split(sep),
      sortPlayers = players.sort(makeRandomArr),
      sortPlayersLength = sortPlayers.length / 2;

function generationTables() {
    templateArr(sortPlayers, firsLapList);

    for (let i = 1; i <= sortPlayersLength; i++){
        let newLi = document.createElement('li');
        newLi.classList.add('draws__item', 'draws__item-secondeLap');
        secondeLapList.append(newLi)
    }

    let secondelapItems = document.querySelectorAll('.draws__item-secondeLap'),
        secondelapItemsLength = secondelapItems.length / 2;

    for (i = 1; i <= secondelapItemsLength; i++) {
        let newLi = document.createElement('li');
        newLi.classList.add('draws__item', 'draws__item-thirdLap');
        thirdLapList.append(newLi)
    };

    let thirdLapItems = document.querySelectorAll('.draws__item-thirdLap'),
        thirdLapItemsLength = thirdLapItems.length / 2;

    for (i = 1; i <= thirdLapItemsLength; i++) {
        let newLi = document.createElement('li');
        newLi.classList.add('draws__item', 'draws__item-fourthLap');
        fourthLapList.append(newLi)
    }
}

function templateArr(arr, list) {
    for (i = 0; i < arr.length; i++) {
        const player = arr[i];
        let newLi = document.createElement('li');
        newLi.classList.add('draws__item', 'draws__item-firsLap');
        newLi.innerHTML = player;
        list.append(newLi);
    }

    return
}

function makeRandomArr(a, b) {
    return Math.random() - 0.5;
};