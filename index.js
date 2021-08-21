const initialPrice = document.querySelector('#ip');
const quantity = document.querySelector('#qty');
const currentPrice = document.querySelector('#cp');
const button = document.querySelector('#btn');
const output = document.querySelector('#output');

button.addEventListener('click', clickHandler)

function clickHandler() {

    var ip = Number(initialPrice.value);
    var qty = Number(quantity.value);
    var cp = Number(currentPrice.value);
    if (ip && qty && cp)

        calculateProfitAndLoss(ip, qty, cp)
    else
        alert("fill in")
}


function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showMessage(`😭 Your loss is ${loss}, and loss percentage is ${lossPercentage.toFixed(2)}%😭 `)
        output.style.color = 'red';

    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showMessage(`💰🤑 Your profit is ${profit} and Profit percentage is ${profitPercentage.toFixed(2)}%🤑💰`);
        output.style.color = 'green';

    } else {
        showMessage(`😌Nothing gained and Nothing lost😌`)
        output.style.color = 'purple';



    }

}


function showMessage(message) {
    output.innerText = message;
    output.style.display = 'block';
}