


//* добавить молоко синее
export function addBasketMilckBlue() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    if (!document.getElementById('block-basket-list').hasChildNodes) {
        let blockBasketList = document.getElementById('block-basket-list');
        let volume = Number(document.getElementById('select-milck-blue-film').value);
        let blockList = document.createElement('div');
        blockList.className = 'block-basket-elem';
        blockList.id = 'milck-blue-film-1';
        let textName = document.createElement('p');
        let quantity = document.createElement('p');
        quantity.id = 'quantity-milck-blue-film-1';
        quantity.innerText = 1;
        let buttonDelet = document.createElement('button');
        buttonDelet.className = 'button-delet-product';
        textName.innerText = 'Молоко 2,5%\nОбъём:' + volume + '\nПлёнка\nКоличество:';
        blockList.append(textName, quantity, buttonDelet);
        blockBasketList.append(blockList);
    } else {
        let rowBlock = document.querySelector('block-basket-list').children;
        for (let i = 0; rowBlock.length; i++) {
            if (rowBlock.length[i].id === 'milck-blue-film-1') {
                let x = Number(document.getElementById('quantity-milck-blue-film-1').innerText);
                x = x + 1;
                document.getElementById('quantity-milck-blue-film-1').innerText = x;
                return;
            } else {
                let blockBasketList = document.getElementById('block-basket-list');
                let volume = Number(document.getElementById('select-milck-blue-film').value);
                let blockList = document.createElement('div');
                blockList.className = 'block-basket-elem';
                blockList.id = 'milck-blue-film-1';
                let textName = document.createElement('p');
                let quantity = document.createElement('p');
                quantity.id = 'quantity-milck-blue-film-1';
                quantity.innerText = 1;
                textName.innerText = 'Молоко 2,5%\nОбъём:' + volume + '\nПлёнка\nКоличество:';
                blockList.append(textName, quantity);
                blockBasketList.append(blockList);
            };
        };
    };

};
export function addBasketMilckBlueBottle() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket-list');
    let volume = 0.9;
    let blockList = document.createElement('div');
    blockList.className = 'block-basket-elem';
    let textName = document.createElement('p');
};
//* добавить кефир
export function addBasketKefir() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket-list');
    let blockList = document.createElement('div');
    let textName = document.createElement('p');
};
export function addBasketKefirBottle() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket-list');
    let blockList = document.createElement('div');
    let textName = document.createElement('p');
};
//* добавить молоко красное
export function addBasketMilckRed() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
export function addBasketMilckRedBottle() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
//* добавить бифилайф
export function addBasketBifilife() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
export function addBasketBifilifeBottle() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
//* добавить йогурт бутылка
export function addBasketYogurt() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
//* добавить биойогурт
export function addBasketOrganicYogurt() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
//* добавить ряженка
export function addBasketRyazhenka() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
//* добавить снежок
export function addBasketSnowball() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
//* добавить сыворотка
export function addBasketSerum() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
//* добавить масло
export function addBasketOil() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
//* добавить сметана 15%
export function addBasketSourCreamLiteBlue() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
export function addBasketSourCreamLiteBlueCup() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
//* добавить сметана 20%
export function addBasketSourCreamBlue() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
export function addBasketSourCreamBlueCup() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
};
//* добавить творог 5%
export function addBasketCottageCheesePink() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
//* добавить творог 0%
export function addBasketCottageCheeseGreen() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
//* добавить творог флоупак 5%
export function addBasketCottageCheeseFlowpackPink() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
//* добавить творог флоупак 9%
export function addBasketCottageCheeseFlowpackViolet() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
//* добавить творог 5% с наполнителем
export function addBasketCottageCheeseFiller() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
//* добавить брынза
export function addBasketBrynza() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
//* добавить фермерский
export function addBasketFarm() {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let blockBasketList = document.getElementById('block-basket');
};
