//* Const static
let cart = {
    '': {
        'name': 'Молоко 2,5%',
        'gost': 'Пастеризованное ГОСТ 31450-2013',
        'package': 'плёнка',
        'shelfLife': '7',
        'volume': {
            '1': '0,5л',
            '2': '0,9',
            '3': '1'
        },
        
    },
    '': {

    },
    '': {

    },
    '': {

    },

}




//* import
import { calculateSumm } from "./function/function-invoice-panel.js";
//import { addBasketSourCreamBlueCup, addBasketSourCreamLiteBlueCup, addBasketBifilifeBottle, addBasketMilckRedBottle, addBasketKefirBottle, addBasketMilckBlueBottle, addBasketBifilife, addBasketBrynza, addBasketCottageCheeseFiller, addBasketCottageCheeseFlowpackPink, addBasketCottageCheeseFlowpackViolet, addBasketCottageCheeseGreen, addBasketCottageCheesePink, addBasketFarm, addBasketKefir, addBasketMilckBlue, addBasketMilckRed, addBasketOil, addBasketOrganicYogurt, addBasketRyazhenka, addBasketSerum, addBasketSnowball, addBasketSourCreamBlue, addBasketSourCreamLiteBlue, addBasketYogurt } from "./function/function-add-basket.js";



//* Document
document.getElementById('row-panel').addEventListener('click', rowPanel);
document.getElementById('prays-list-panel').addEventListener('click', praysSection);
document.getElementById('orders-panel').addEventListener('click', ordersPanel);
document.getElementById('invoice-panel').addEventListener('click', invoicePanel);
document.getElementById('stock-panel').addEventListener('click', stockPanel);
document.getElementById('button-calculate').addEventListener('click', calculateSumm)
window.addEventListener('load', rowPanel);

//---------------------------------------------------------------------------------------
document.getElementById('basket').addEventListener('click', basketOpen);
// document.getElementById('button-add-product-milck-blue-film').addEventListener('click', addBasketMilckBlue);
// document.getElementById('button-add-product-milck-blue-bottle').addEventListener('click', addBasketMilckBlueBottle);
// document.getElementById('button-add-product-kefir-bottle').addEventListener('click', addBasketKefirBottle);
// document.getElementById('button-add-product-kefir').addEventListener('click', addBasketKefir);
// document.getElementById('button-add-product-milck-red').addEventListener('click', addBasketMilckRed);
// document.getElementById('button-add-product-milck-red-bottle').addEventListener('click', addBasketMilckRedBottle);
// document.getElementById('button-add-product-bifilife').addEventListener('click', addBasketBifilife);
// document.getElementById('button-add-product-bifilife-bottle').addEventListener('click', addBasketBifilifeBottle);
// document.getElementById('button-add-product-yogurt').addEventListener('click', addBasketYogurt);
// document.getElementById('button-add-product-bioyogurt').addEventListener('click', addBasketOrganicYogurt);
// document.getElementById('button-add-product-ryazhenka').addEventListener('click', addBasketRyazhenka);
// document.getElementById('button-add-product-snowball').addEventListener('click', addBasketSnowball);
// document.getElementById('button-add-product-serum').addEventListener('click', addBasketSerum);
// document.getElementById('button-add-product-oil').addEventListener('click', addBasketOil);
// document.getElementById('button-add-product-lite-blue').addEventListener('click', addBasketSourCreamLiteBlue);
// document.getElementById('button-add-product-lite-blue-cup').addEventListener('click', addBasketSourCreamLiteBlueCup);
// document.getElementById('button-add-product-blue').addEventListener('click', addBasketSourCreamBlue);
// document.getElementById('button-add-product-blue-cup').addEventListener('click', addBasketSourCreamBlueCup);
// document.getElementById('button-add-product-cheese-pink').addEventListener('click', addBasketCottageCheesePink);
// document.getElementById('button-add-product-cheese-green').addEventListener('click', addBasketCottageCheeseGreen);
// document.getElementById('button-add-product-flowpack-pink').addEventListener('click', addBasketCottageCheeseFlowpackPink);
// document.getElementById('button-add-product-flowpack-violet').addEventListener('click', addBasketCottageCheeseFlowpackViolet);
// document.getElementById('button-add-product-cheese-filler').addEventListener('click', addBasketCottageCheeseFiller);
// document.getElementById('button-add-product-brynza').addEventListener('click', addBasketBrynza);
// document.getElementById('button-add-product-farm').addEventListener('click', addBasketFarm);

//* Function row
document.onclick

//* Panel navigation---------------------------
function rowPanel() {
    document.body.style.backgroundImage = 'url(./img/row-img.webp)';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundSize = 'cover';
    document.getElementById('header-section').style.backgroundImage = 'none';
    document.getElementById('header-section').style.backgroundColor = 'rgba(,,, 1)';
    document.getElementById('row-panel').style.backgroundColor = '#176fd7';
    document.getElementById('prays-list-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('orders-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('invoice-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('stock-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('row-section').style.display = 'block';
    document.getElementById('prays-section').style.display = 'none';
    document.getElementById('invoice-section').style.display = 'none';
    document.getElementById('orders-section').style.display = 'none';
    document.getElementById('stock-section').style.display = 'none';
};
function praysSection() {
    document.body.style.backgroundImage = 'none';
    document.body.style.background = '-webkit-linear-gradient(45deg, rgb(109, 216, 127), rgb(39, 140, 195) 51%, rgb(111, 255, 134))';
    document.getElementById('prays-list-panel').style.backgroundColor = '#176fd7';
    document.getElementById('header-section').style.background = 'none';
    document.getElementById('header-section').style.backgroundImage = 'url(./img/header-img.jpg)';
    document.getElementById('header-section').style.backgroundRepeat = 'no-repeat';
    document.getElementById('header-section').style.backgroundSize = 'cover';
    document.getElementById('header-section').style.backgroundPosition = 'center';
    document.getElementById('row-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('orders-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('invoice-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('stock-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('prays-section').style.display = 'grid';
    document.getElementById('row-section').style.display = 'none';
    document.getElementById('invoice-section').style.display = 'none';
    document.getElementById('orders-section').style.display = 'none';
    document.getElementById('stock-section').style.display = 'none';
};
function ordersPanel() {
    document.body.style.backgroundImage = 'none';
    document.getElementById('orders-panel').style.backgroundColor = '#176fd7';
    document.getElementById('header-section').style.background = 'none';
    document.getElementById('header-section').style.backgroundImage = 'url(./img/header-img.jpg)';
    document.getElementById('header-section').style.backgroundRepeat = 'no-repeat';
    document.getElementById('header-section').style.backgroundSize = 'cover';
    document.getElementById('header-section').style.backgroundPosition = 'center';
    document.getElementById('prays-list-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('row-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('invoice-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('stock-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('orders-section').style.display = 'block';
    document.getElementById('prays-section').style.display = 'none';
    document.getElementById('row-section').style.display = 'none';
    document.getElementById('invoice-section').style.display = 'none';
    document.getElementById('stock-section').style.display = 'none';
};
function invoicePanel() {
    document.body.style.backgroundImage = 'none';
    document.getElementById('invoice-panel').style.backgroundColor = '#176fd7';
    document.getElementById('header-section').style.background = 'none';
    document.getElementById('header-section').style.backgroundImage = 'url(./img/header-img.jpg)';
    document.getElementById('header-section').style.backgroundRepeat = 'no-repeat';
    document.getElementById('header-section').style.backgroundSize = 'cover';
    document.getElementById('header-section').style.backgroundPosition = 'center';
    document.getElementById('prays-list-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('row-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('orders-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('stock-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('invoice-section').style.display = 'block';
    document.getElementById('prays-section').style.display = 'none';
    document.getElementById('row-section').style.display = 'none';
    document.getElementById('orders-section').style.display = 'none';
    document.getElementById('stock-section').style.display = 'none';
};
function stockPanel() {
    document.body.style.backgroundImage = 'none';
    document.getElementById('stock-panel').style.backgroundColor = '#176fd7';
    document.getElementById('header-section').style.background = 'none';
    document.getElementById('header-section').style.backgroundImage = 'url(./img/header-img.jpg)';
    document.getElementById('header-section').style.backgroundRepeat = 'no-repeat';
    document.getElementById('header-section').style.backgroundSize = 'cover';
    document.getElementById('header-section').style.backgroundPosition = 'center';
    document.getElementById('prays-list-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('row-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('orders-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('invoice-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('stock-section').style.display = 'block';
    document.getElementById('prays-section').style.display = 'none';
    document.getElementById('row-section').style.display = 'none';
    document.getElementById('orders-section').style.display = 'none';
    document.getElementById('invoice-section').style.display = 'none';
};
function basketOpen() {
    let openblock = document.getElementById('block-basket').style.display;
    if (openblock === 'none') {
        document.getElementById('block-basket').style.display = 'block';
    } else {
        document.getElementById('block-basket').style.display = 'none';
    };
};
//---------------------------------------------


