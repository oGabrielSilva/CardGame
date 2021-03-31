function gameStart() {
    document.querySelector('.chooseCard').style.display = 'none'
    document.querySelector('.playOptions').style.display = 'grid'
    enemy = cards[Math.ceil(Math.random() * cards.length - 1)].status
    
    if (enemy == cardsPlayer[0]) {
        gameStart()
    }
    
    UI()
}

function UI() {
    const outPlayer = document.querySelector('#outPlayer')
    const outPlayerLife = document.querySelector('#outPlayerLife')
    const outEnemy = document.querySelector('#outEnemy')
    const outEnemyLife = document.querySelector('#outEnemyLife')
    const tableEnemy = document.querySelector('#tableEnemy')
    
    tableEnemy.innerHTML = `
        <table id="tableEne">
                    <thead>
                        <tr><th>${enemy.name}</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Força: </th>
                            <th>Defesa: </th>
                            <th>Magia: </th>
                        </tr>
                        <tr>
                            <td>${enemy.force}</td>
                            <td>${enemy.defense}</td>
                            <td>${enemy.spell}</td>
                        </tr>
                    </tbody>
                    
                </table>
    `
    outEnemy.value = enemy.name
    outEnemyLife.value = `Vida: ${enemy.life}`
    outPlayer.value = cardsPlayer[0].name
    outPlayerLife.value = cardsPlayer[0].life
}

function attack() {
    document.querySelector('#attackOrMage').style.display = 'grid'
    if (mage == 5 || mage == 4) {
        mage--
        popup = 'Não há mana suficiente para o usuário lançar magia.'
        newPopup()
        document.querySelector('#magiaUs').disabled = true
        document.querySelector('#magiaUs').style.background = '#1d1d1d'
    }
}

function defense() {
    force(true)
}

function force(value) {
    
    let atk = cardsPlayer[0].force
    let eneDef = enemy.defense
    if (value) {
        atk = cardsPlayer[0].defense
        eneDef = enemy.force
    }
    
    let dano = atk - eneDef
    let danoDe
    
    if (dano < 1) {
        danoDe = Math.abs(dano)
        dano = 1
        cardsPlayer[0].life = cardsPlayer[0].life - danoDe
        enemy.life = enemy.life - dano
    } else {
        enemy.life = enemy.life - dano
        cardsPlayer[0].life = cardsPlayer[0].life - 1
        danoDe = 1
    }

    
    if (value) {
        popup = `${cardsPlayer[0].name} se defendeu. Causou ${dano} de dano em ${enemy.name} que atacou a defesa. Recebeu ${danoDe} de dano no ataque do inimigo.`
    } else {
        popup = `${cardsPlayer[0].name} atacou fisicamente ${enemy.name}. Causou ${dano} de dano. Recebeu ${danoDe} de dano na defesa do inimigo.`
    }
    
    
    enemyAtk()
}

function atkMage() {
    
    let atk = cardsPlayer[0].spell
  
    let eneDef = enemy.defense
    
    let dano = atk - eneDef
    let danoDe
    
    if (dano < 1) {
        danoDe = Math.abs(dano)
        dano = 1
        
        enemy.life = enemy.life - dano
        cardsPlayer[0].life = cardsPlayer[0].life - danoDe
    } else {
        enemy.life = enemy.life - dano
        cardsPlayer[0].life = cardsPlayer[0].life - 1
        danoDe = 1
    }

    mage = mage - 5
    
    popup = `${enemy.name} recebeu um ataque mágico de ${cardsPlayer[0].name}. Sofreu ${dano} de dano. Recebeu ${danoDe} de dano na defesa do inimigo. Gastou 5 de mana.`
    
    
    enemyAtk()
}

function enemyAtk() {
    let def = cardsPlayer[0].defense
    
    let eneAtk = enemy.force
    let eneMage = enemy.spell
    
    let coin = Math.ceil(Math.random() * 10)
    
    if (coin % 2 == 0) {
        if (enemyMage > 5) {
            let dano = eneMage - def
            if (dano < 1) {
                danoDe = Math.abs(dano)
                dano = 1 
                
                enemy.life = enemy.life - danoDe
                cardsPlayer[0].life = cardsPlayer[0].life - dano
                
                popup += ` ${enemy.name} atacou ${cardsPlayer[0].name} com magia. Causou ${dano} de dano. Recebeu ${danoDe} de dano rebatido na defesa.`
                newPopup()
            } else {
                cardsPlayer[0].life = cardsPlayer[0].life - dano
                enemy.life--
                popup += ` ${enemy.name} atacou ${cardsPlayer[0].name} com magia. Causou ${dano} de dano. Recebeu ${1} de dano rebatido na defesa.`
                newPopup()
            }
            
            enemyMage = enemyMage - 5
        } else {
            let dano = eneAtk - def
            if (dano < 1) {
                danoDe = Math.abs(dano)
                dano = 1
                enemy.life = enemy.life - danoDe
                cardsPlayer[0].life = cardsPlayer[0].life - dano
                
                popup += ` ${enemy.name} atacou ${cardsPlayer[0].name} fisicamente causando ${dano} de dano. Recebeu ${danoDe} rebatido.`
                newPopup()
            } else {
                enemy.life--
                cardsPlayer[0].life = cardsPlayer[0].life - dano
                
                popup += ` ${enemy.name} atacou ${cardsPlayer[0].name} fisicamente causando ${dano} de dano. Recebeu ${1} rebatido.`
                newPopup()
            }
        }
    } else {
        let dano = eneAtk - def
        if (dano < 1) {
            danoDe = Math.abs(dano)
            dano = 1
            enemy.life = enemy.life - danoDe
            cardsPlayer[0].life = cardsPlayer[0].life - dano
            
            popup += ` ${enemy.name} atacou ${cardsPlayer[0].name} fisicamente causando ${dano} de dano. Recebeu ${danoDe} rebatido.`
            newPopup()
        } else {
            enemy.life--
            cardsPlayer[0].life = cardsPlayer[0].life - dano
            
            popup += ` ${enemy.name} atacou ${cardsPlayer[0].name} fisicamente causando ${dano} de dano. Recebeu ${1} rebatido na defesa de ${cardsPlayer[0].name}.`
            newPopup()
        }
    }
    
    document.querySelector('#attackOrMage').style.display = 'none'
    UI()
}


//ouvidor 

const upOptionsPlayer = document.querySelector('.playOptionsDisabled')
upOptionsPlayer.addEventListener('click', () => {
    upOptionsPlayer.style.display = 'none'
    
    document.querySelector('.playOptions').style.display = 'grid'
})