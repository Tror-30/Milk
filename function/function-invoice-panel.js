

export function calculateSumm() {
    let counter = 1;
    let summ = 0;
    for (let i = 0; i = 35; i++) {
        if (counter < 35) {
            let price1 = Number(document.getElementById(`price-string-${counter}`).innerText);
            let quantity = Number(document.getElementById(`strock-col-vo-${counter}`).value);
            let summPosition = price1 * quantity;
            summPosition = Math.ceil(summPosition);
            document.getElementById(`sum-strock-${counter}`).innerText = summPosition;
            summ = summ + summPosition;
            counter = counter + 1;
        } else {
            document.getElementById('table-block-summ').innerText = summ;
            return;
        };
    };
};