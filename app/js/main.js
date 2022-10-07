const textArea = document.querySelector('.draws__input'),
      textAreaValue = textArea.value
      sep = ';',
      drawsBtn = document.querySelector('.draws-generation__btn'),
      firsLapList = document.querySelector(".draws__lap");
let players = textAreaValue.split(sep);
const sortPlayers = players.sort(makeRandomArr);
console.log(sortPlayers)



function generation(){
    sortPlayers.forEach((player, i) => {
        firsLapList.innerHTML += `
        <div style="margin-bottom: 24px" class="draws__item draws__list-firsLap">${player};`

    });
}

function makeRandomArr(a, b) {
    return Math.random() - 0.5;
};

















// function player() {
//     return

//     for (let index = 0; index < sortPlayers.length; index++) {
//         const player = sortPlayers[index];
//     }
// }

// function generation() {
//     for (let index = 0; firsLapItem < array.length; index++) {
//         const item = firsLapItem[index];
        
//         item.innerHTML = player()
//     }
    
// }






