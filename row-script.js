//* Const static


//* import
import { calculateSumm } from "./function/function-invoice-panel.js";
import { addBasket, getOrder } from "./function/function-add-basket.js";

//* Document
document.getElementById('button-autorization').addEventListener('click', authorization);
document.getElementById('get-product-list').addEventListener('click', getOrder);
document.getElementById('row-panel').addEventListener('click', rowPanel);
document.getElementById('prays-list-panel').addEventListener('click', praysSection);
document.getElementById('invoice-panel').addEventListener('click', invoicePanel);
document.getElementById('stock-panel').addEventListener('click', stockPanel);
document.getElementById('control-panel').addEventListener('click', controlPanel);
document.getElementById('button-calculate').addEventListener('click', calculateSumm);
window.addEventListener('load', rowPanel);

//---------------------------------------------------------------------------------------
document.getElementById('basket').addEventListener('click', basketOpen);

//* Function row
document.onclick = event => {
    if (event.target.classList.contains('button-add')) {
        addBasket(event.target.dataset.id);
    };
};

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
    document.getElementById('invoice-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('stock-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('control-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('control-section').style.display = 'none';
    document.getElementById('row-section').style.display = 'block';
    document.getElementById('prays-section').style.display = 'none';
    document.getElementById('invoice-section').style.display = 'none';
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
    document.getElementById('invoice-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('stock-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('control-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('control-section').style.display = 'none';
    document.getElementById('prays-section').style.display = 'grid';
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
    document.getElementById('stock-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('control-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('control-section').style.display = 'none';
    document.getElementById('invoice-section').style.display = 'grid';
    document.getElementById('prays-section').style.display = 'none';
    document.getElementById('row-section').style.display = 'none';
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
    document.getElementById('invoice-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('control-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('control-section').style.display = 'none';
    document.getElementById('stock-section').style.display = 'block';
    document.getElementById('prays-section').style.display = 'none';
    document.getElementById('row-section').style.display = 'none';
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
function controlPanel() {
    document.body.style.backgroundImage = 'none';
    document.getElementById('control-panel').style.backgroundColor = '#176fd7';
    document.getElementById('control-section').style.display = 'block';
    document.getElementById('header-section').style.background = 'none';
    document.getElementById('header-section').style.backgroundImage = 'url(./img/header-img.jpg)';
    document.getElementById('header-section').style.backgroundRepeat = 'no-repeat';
    document.getElementById('header-section').style.backgroundSize = 'cover';
    document.getElementById('header-section').style.backgroundPosition = 'center';
    document.getElementById('stock-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('prays-list-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('row-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('invoice-panel').style.backgroundColor = 'rgb(213, 219, 219)';
    document.getElementById('stock-section').style.display = 'none';
    document.getElementById('prays-section').style.display = 'none';
    document.getElementById('row-section').style.display = 'none';
    document.getElementById('invoice-section').style.display = 'none';
};
//---------------------------------------------

async function authorization() {
    let login = document.getElementById('input-login');
    let pasword = document.getElementById('input-password');
    try {
        await fetch('', {

        });
    } catch {

    };
    document.getElementById('autorization-section').style.display = 'none';
};

