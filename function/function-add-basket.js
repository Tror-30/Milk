//? Const
let cart = {
    'milk-blue': {
        'name': 'Молоко 2,5%',
        'package': 'плёнка',
        'volume': {
            '1': '0,5л',
            '2': '0,9л',
            '3': '1л'
        },
        'quantity': 1
    },
    'milk-blue-pet': {
        'name': 'Молоко 2,5%',
        'package': 'бутылка',
        'volume': '0,9л',
        'quantity': 1
    },
    'kefir': {
        'name': 'Кефир 2,5%',
        'package': 'плёнка',
        'volume': {
            '1': '0,5л',
            '2': '0,9л',
            '3': '1л'
        },
        'quantity': 1
    },
    'kefir-pet': {
        'name': 'Кефир 2,5%',
        'package': 'бутылка',
        'volume': '0,9л',
        'quantity': 1
    },
    'milk-red': {
        'name': 'Молоко 3.2-4.5%',
        'package': 'плёнка',
        'percent': {
            '3.2': '3.2%',
            '4.5': '4.5%'
        },
        'volume': {
            '1': '0,5л',
            '2': '0,9л',
            '3': '1л'
        },
        'quantity': 1
    },
    'milk-red-pet': {
        'name': 'Молоко 2,5%',
        'package': 'бутылка',
        'volume': '0,9л',
        'quantity': 1
    },
    'bifiliv': {
        'name': 'Бифилайф 2.5%',
        'package': 'плёнка',
        'volume': '0,5л',
        'quantity': 1
    },
    'bifiliv-pet': {
        'name': 'Бифилайф 2.5%',
        'package': 'бутылка',
        'volume': '0,5л',
        'quantity': 1
    },
    'yogurt-peach': {
        'name': 'Йогурт 2,5% - Персик',
        'package': 'бутылка',
        'volume': '0,5л',
        'quantity': 1
    },
    'yogurt-strawberry': {
        'name': 'Йогурт 2,5% - Клубника',
        'package': 'бутылка',
        'volume': '0,5л',
        'quantity': 1
    },
    'yogurt-orange': {
        'name': 'Йогурт 2,5% - Апельсин',
        'package': 'бутылка',
        'volume': '0,5л',
        'quantity': 1
    },
    'yogurt-cereals': {
        'name': 'Йогурт 2,5% - Мюсли-злаки',
        'package': 'бутылка',
        'volume': '0,5л',
        'quantity': 1
    },
    'bio-yogurt': {
        'name': 'Йогурт 2,5% - Черника-злаки',
        'package': 'бутылка',
        'volume': '0,5л',
        'quantity': 1
    },
    'ryjenka': {
        'name': 'Ряженка 2,5%',
        'package': 'плёнка',
        'volume': '0,5л',
        'quantity': 1
    },
    'sneshek': {
        'name': 'Снежок 2,5%',
        'package': 'плёнка',
        'volume': '0,5л',
        'quantity': 1
    },
    'sivorotka': {
        'name': 'Сыворотка 2,5%',
        'package': 'плёнка',
        'volume': '1л',
        'quantity': 1
    },
    'oil': {
        'name': 'Масло 2,5%',
        'package': 'плёнка',
        'volume': {
            '170': '170г',
            '200': '200г',
            '380': '380г',
        },
        'quantity': 1
    },
    'smetana-15': {
        'name': 'Сметана 15%',
        'package': 'плёнка',
        'volume': '500мл',
        'quantity': 1
    },
    'smetana-15-shaib': {
        'name': 'Сметана 15%',
        'package': 'стакан',
        'volume': '200г',
        'quantity': 1
    },
    'smetana-20': {
        'name': 'Сметана 20%',
        'package': 'плёнка',
        'volume': '500мл',
        'quantity': 1
    },
    'smetana-20-stakan': {

    },
    'tvorog-5': {

    },
    'tvorog-0': {

    },
    'tvorog-5-floupak': {

    },
    'tvorog-9-floupak': {

    },
    'tvorog-9-floupak': {

    },
    'brinza': {

    },
    'craft': {

    }
};

//* добавить молоко синее
export function addBasket(id) {
    let counterBasket = Number(document.getElementById('counter-product').innerText);
    document.getElementById('counter-product').innerText = counterBasket + 1;
    document.getElementById('counter-product').style.display = 'inline-flex';
    let cartBlock = document.getElementById(id).children;
    for(let i of cartBlock){
        if(i.localName === 'select'){
            let dataCart = cart[id];
            let rowBlock =  document.getElementById('block-basket');
            let block = document.createElement('div');
            
        };
    };
};