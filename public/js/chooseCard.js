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
    if (cardsPlayer.length >= 1) {
        confirmChooseId.focus()
        popup = 'Só pode escolher uma das cartas. Clique em "confirmar" para prosseguir. Ou "Cancelar" para escolher novamente.'
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
    cardsPlayer = []
    
    const bt0 = document.querySelector('#bt0')
    bt0.disabled = false
    bt0.style.background = ''
    bt0.style.cursor = ''
    bt0.style.color = ''

    const bt1 = document.querySelector('#bt1')
    bt1.disabled = false
    bt1.style.background = ''
    bt1.style.cursor = ''
    bt1.style.color = ''

    const bt2 = document.querySelector('#bt2')
    bt2.disabled = false
    bt2.style.background = ''
    bt2.style.cursor = ''
    bt2.style.color = ''

    const bt3 = document.querySelector('#bt3')
    bt3.disabled = false
    bt3.style.background = ''
    bt3.style.cursor = ''
    bt3.style.color = ''
}

function confirmChoose() {
    if (cardsPlayer.length < 1) {
        popup = 'Escolha uma das cartas.'
        newPopup()
        return
    }
    
    gameStart()
}
