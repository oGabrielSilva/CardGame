//variáveis globais 
let popup = ``      //aviso do popup 
let html = ``       //chooseCard
let indexInner = 0  //chooseCard
cardsPlayer = []    //cartas escolhidas
cardsForChoose = [] //cartas para escolha
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


function listCards() {
    if (indexInner > 3) {
        return
    }
    
    let index = cards[Math.ceil(Math.random() * cards.length - 1)].status
    cardsForChoose.push(index)
    
    html += `
    <table>
        <tr>
            <th>Nome: ${index.name}</th>
        </tr>
        <tr>
            <th>Força: ${index.force}</th>
        </tr>
        <tr>
            <th>Defesa: ${index.defense}</th>
        </tr>
        <tr>
            <th>Magia: ${index.spell}</th>
        </tr>
        <tr>
            <th>
                <button onclick="chooseCard(${indexInner})" class="button" id="bt${indexInner}">Escolher</button>
            </th>
        </tr>
    </table>`
    
    chooseCardInner.innerHTML = `
        <h1>Escolha suas cartas!</h1>
        <br>
        <br>
        ${html}
        <div id="confirmCards">
            <button onclick="cancelChoose()" class="button">Cancelar</button>
            <button onclick="confirmChoose()" class="button" id="confirmChooseId">Confirmar</button>
        </div>
    `
    indexInner++
    listCards()
}

// botão do choose será chooseCard

function chooseCard(value) {
    if (cardsPlayer.length >= 2) {
        confirmChooseId.focus()
        popup = 'Só pode escolher duas cartas. Clique em "confirmar" para prosseguir. Ou "Cancelar" para escolher novamente.'
        newPopup()
        return
    }
    
    switch (value) {
        case 0:
            const bt0 = document.querySelector('#bt0')
            bt0.disabled = true
            bt0.style.background = '#0f0'
            bt0.style.cursor = 'no-drop'
            bt0.style.color = 'black'
            break;
        case 1:
            const bt1 = document.querySelector('#bt1')
            bt1.disabled = true
            bt1.style.background = '#0f0'
            bt1.style.cursor = 'no-drop'
            bt1.style.color = 'black'
            break;
        case 2: 
            const bt2 = document.querySelector('#bt2')
            bt2.disabled = true
            bt2.style.background = '#0f0'
            bt2.style.cursor = 'no-drop'
            bt2.style.color = 'black'
            break;
        case 3: 
            const bt3 = document.querySelector('#bt3')
            bt3.disabled = true
            bt3.style.background = '#0f0'
            bt3.style.cursor = 'no-drop'
            bt3.style.color = 'black'
            break;
    }
    cardsPlayer.push(cardsForChoose[value])
}

function cancelChoose() {
    indexInner = 0
    html = ``
    listCards()
    cardsPlayer.pop()
    cardsPlayer.pop()
}

function confirmChoose() {
    
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