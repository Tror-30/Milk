//? Const
let cart = {
    'milk-blue': {
        'name': 'Молоко 2,5%'
    },
    'milk-blue-pet': {
        'name': 'Молоко 2,5%'
    },
    'kefir': {
        'name': 'Кефир 2,5%'
    },
    'kefir-pet': {
        'name': 'Кефир 2,5%'
    },
    'milk-red': {
        'name': 'Молоко 3,2-4,5%'
    },
    'milk-red-pet': {
        'name': 'Молоко 2,5%'
    },
    'bifiliv': {
        'name': 'Бифилайф 2.5%'
    },
    'bifiliv-pet': {
        'name': 'Бифилайф 2.5%'
    },
    'yogurt-peach': {
        'name': 'Йогурт 2,5% - Персик'
    },
    'yogurt-strawberry': {
        'name': 'Йогурт 2,5% - Клубника'
    },
    'yogurt-orange': {
        'name': 'Йогурт 2,5% - Апельсин'
    },
    'yogurt-cereals': {
        'name': 'Йогурт 2,5% - Мюсли-злаки'
    },
    'bio-yogurt': {
        'name': 'Йогурт 2,5% - Черника-злаки'
    },
    'ryjenka': {
        'name': 'Ряженка 2,5%'
    },
    'sneshek': {
        'name': 'Снежок 2,5%'
    },
    'sivorotka': {
        'name': 'Сыворотка 2,5%'
    },
    'oil': {
        'name': 'Масло 2,5%'
    },
    'smetana-15': {
        'name': 'Сметана 15%'
    },
    'smetana-15-shaib': {
        'name': 'Сметана 15%'
    },
    'smetana-20': {
        'name': 'Сметана 20%'
    },
    'smetana-20-stakan': {
        'name': 'Сметана 15%'
    },
    'tvorog-5': {
        'name': 'Творог 5%'
    },
    'tvorog-0': {
        'name': 'Творог 0%'
    },
    'tvorog-5-floupak': {
        'name': 'Творог 5%'
    },
    'tvorog-9-floupak': {
        'name': 'Творог 5%'
    },
    'tvorog-filler': {
        'name': 'Творог 5%'
    },
    'brinza': {
        'name': 'Сыр Брынза'
    },
    'craft': {
        'name': 'Сыр Фермерский'
    }
};
//* Добавить элемент в корзину
export function addBasket(id) {
    let rowBlock = document.getElementById('block-basket-list');
    let newElem;
    if (rowBlock.childElementCount > 0) {
        newElem = examination(id);
        if (newElem === 'quantity') return;
    } else {
        let blockCart = document.querySelector(`#${id}`);
        newElem = getObjectPropsFromElement(blockCart);
    };
    let dataCart = cart[id];
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let block = document.createElement('div');
    block.id = id + '_elem';
    block.className = 'block-basket-element';
    let nameElement = document.createElement('h3');
    nameElement.style.backgroundColor = 'rgb(223, 224, 223)';
    nameElement.innerText = dataCart.name;
    let blockVolume = document.createElement('p');
    blockVolume.className = 'text-params';
    blockVolume.innerText = 'Объём: ';
    let blockVolumeNumber = document.createElement('p');
    blockVolumeNumber.className = 'cart-volume';
    let blockPackage = document.createElement('h4');
    blockPackage.className = 'cart-package';
    let blockPercent = document.createElement('p');
    blockPercent.className = 'cart-percent';
    let blockFillerText = document.createElement('p');
    blockFillerText.className = 'text-params';
    blockFillerText.innerText = 'Наполнитель: ';
    let blockFiller = document.createElement('p');
    blockFiller.className = 'cart-filler';
    let blockColVo = document.createElement('p');
    blockColVo.innerText = 'Кол-во:';
    let inputQuantity = document.createElement('input');
    inputQuantity.className = 'inputElem';
    inputQuantity.type = 'number';
    inputQuantity.value = newElem.quantity;
    blockVolumeNumber.innerText = newElem.volume;
    blockPercent.innerText = newElem.percent;
    blockPackage.innerText = newElem.packaging;
    blockFiller.innerText = newElem.filler;
    block.append(nameElement);
    if (newElem.percent !== undefined) {
        block.append(blockPercent);
    } else if (newElem.filler !== undefined) {
        block.append(blockFillerText, blockFiller);
    };
    block.append(blockVolume, blockVolumeNumber, blockPackage,);
    block.append(blockColVo, inputQuantity);
    rowBlock.append(block);
    return;
};
//* Проверка на наличие элемента в корзине
export function examination(id) {
    const addingElement = document.querySelector(`#${id}`);
    const addingElementProps1 = getObjectPropsFromElement(addingElement);
    const addingElementProps = JSON.stringify(addingElementProps1);
    const basketElement = document.querySelector('#block-basket-list');
    const basketElementsProps = Array.from(basketElement.children).map(elem => JSON.stringify(getObjectPropsFromElement(elem)));
    if (basketElementsProps.includes(addingElementProps)) {
        const existingElementInBasket = basketElement.querySelector(`#${id}_elem`).querySelector(".inputElem");
        const quantity = Number(existingElementInBasket.value);
        existingElementInBasket.value = quantity + 1;
        return ('quantity');
    } else {
        return (addingElementProps1);
    };
};
//* Функция создания объекта товара
export function getObjectPropsFromElement(elem) {
    const { name } = cart[elem.id.replace("_elem", "")];
    const percentElem = elem.querySelector("[class*='percent']");
    let percent;
    if (percentElem !== null) {
        percent = percentElem?.tagName === 'SELECT' ? percentElem.value : percentElem.innerText;
    };
    const volumeElem = elem.querySelector("[class*='volume']");
    const volume = volumeElem?.tagName === "SELECT" ? volumeElem.value : volumeElem.innerText;
    const packaging = elem.querySelector(".cart-package")?.innerText;
    const fillerElem = elem.querySelector("[class*='filler']");
    const filler = fillerElem?.tagName === "SELECT" ? fillerElem.value : fillerElem.innerText;
    const quantity = 1;
    const props = { name, percent, packaging, volume, filler, quantity };
    const objectProps = Object.keys(props).reduce((acc, prop) => {
        if (props[prop] !== undefined) acc[prop] = props[prop];
        return (acc);
    }, {});
    return (objectProps);
};
//? Отправка заказа
export function getOrder() {
    let objectOrder = {};
    let listOrder = document.getElementById('block-basket-list').children;
    const objectListOrder = Array.from(listOrder).reduce((objectElemBasketList, elem) => {
        const nameElem = elem.id;
        objectElemBasketList[nameElem] = getObjectPropsFromElement(elem);
        return objectElemBasketList;
    }, {});
    const objectListOrder1 = Array.from(listOrder).map((elem) => elem.id);
    const objectListOrder2 = Array.from(listOrder).filter((elem) => elem.id.includes("milk-blue"));
    let route;
    let buyer;
    let dataTime = new Date();
    dataTime = dataTime.toISOString();
    let getOrder = {
        'route': route,
        'buyer': buyer,
        'order': objectOrder
    };
    try {

    } catch {

    };
    document.getElementById('block-basket-list').innerHTML = '';
};