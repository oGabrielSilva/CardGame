//variáveis globais 
let auxStatus = false   //auxiliar do botão de status do player
let popupAuxAtk         //auxiliar do popup no combate
let popup = ``          //aviso do popup 
let html = ``           //chooseCard
let indexInner = 0      //chooseCard
cardsPlayer = []        //carta escolhida
cardsForChoose = []     //cartas para escolha
let enemy               //carta do inimigo
let mage = 20
let enemyMage = 20
const chooseCardInner = document.querySelector('.chooseCard')

// novo jogo
const game = document.querySelector('.game')
const firstDisplay = document.querySelector('.firstDisplay')    //referencia ao elemento html
let auxNewGame = false      //auxiliar do novo jogo

function newGame() {
    if (!auxNewGame) {
        firstDisplay.style.display = 'none'
        game.style.display = 'grid'
        auxNewGame = true
        listCards()
    } else {
        firstDisplay.style.display = 'flex'
        game.style.display = 'none'
        auxNewGame = false
    }
}

function statusPlayer() {
    let displayGrid = document.querySelector('#displayStatus')
    if (auxStatus == false) {
        let html = ``
        
        for (i = 0; i < 1; i++) {
            html = `
                <p>X</p>
                <table id="table">
                    <thead>
                        <tr><th>${cardsPlayer[i].name}</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Força: </th>
                            <th>Defesa: </th>
                            <th>Magia: </th>
                        </tr>
                        <tr>
                            <td>${cardsPlayer[i].force}</td>
                            <td>${cardsPlayer[i].defense}</td>
                            <td>${cardsPlayer[i].spell}</td>
                        </tr>
                    </tbody>
                    
                </table>
            `
        }
        displayGrid.style.display = 'grid'
        document.querySelector('.playOptionsDisabled').style.display = 'block'
        document.querySelector('.playOptions').style.display = 'none'
        displayGrid.innerHTML = html
        auxStatus = true
    } else {
        displayGrid.style.display = 'none'
        auxStatus = false
    }
}

function newPopup() {
    document.querySelector('.popup').style.display = 'grid'
    outPopup.textContent = popup
}

function closePopup() {
    document.querySelector('.popup').style.display = 'none'
}






//cards 
cards = [
    { status: { name: 'Lelahell',  life: 30, force: 7, defense: 5, spell: 8 }  },
    { status: { name: 'Raffael', life: 30, force: 5, defense: 8, spell: 7 } },
    { status: { name: 'Daiki', life: 30, force: 9, defense: 9, spell: 7 } },
    { status: { name: 'Claw', life: 30, force: 8, defense: 5, spell: 12 } },
    { status: { name: 'Silver', life: 30, force: 10, defense: 10, spell: 10 } },
    { status: { name: 'Gnell', life: 30, force: 7, defense: 10, spell: 12 } },
    { status: { name: 'Gabrielly', life: 30, force: 7, defense: 16, spell: 12 } },
    { status: { name: 'Stevan', life: 30, force: 10, defense: 16, spell: 14 } },
    ]