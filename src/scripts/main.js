const expArr = [];


//Подсчет всего файла

const result = document.getElementById('result')

const formattedPrices = expArr.map(item => {
    if (item.Column2) {
        const valueWithoutCurrency = item.Column2.replace(/[^\d.-₸()]/g, "");
        const numericValue = parseFloat(valueWithoutCurrency);

        const sign = item.Column2.includes('+') ? 1 : -1;

        const formattedValue = (numericValue / 100 * sign).toFixed(2);
        return parseFloat(formattedValue);
    }
    return 0;
});

const allTransactions = {};

expArr.forEach((item, index) => {
    if (item.Column5 && item.Column3) {
        if (!allTransactions[item.Column5]) {
            allTransactions[item.Column5] = {
                type: item.Column3, total: 0
            };
        }

        allTransactions[item.Column5].total += formattedPrices[index];
    }
});

let transactionsHTML = '';
for (const key in allTransactions) {
    transactionsHTML += `<p>${key}: ${allTransactions[key].type} - Total: ${allTransactions[key].total.toFixed(2)}</p>`;
}
result.innerHTML = transactionsHTML;

//Подсчет YANDEX

// const yandexTransactions = daria.filter(item => item.Column5 && item.Column5.includes('YANDEX'));
// const yandexTransactions2 = sava.filter(item => item.Column5 && item.Column5.includes('YANDEX'));
//
// const totalYandexSum = yandexTransactions.reduce((total, item) => {
//     const valueWithoutCurrency = item.Column2.replace(/[^\d,-]/g, "").replace(",", ".");
//     const numericValue = parseFloat(valueWithoutCurrency);
//     const sign = item.Column2.includes('+') ? 1 : -1;
//     return total + (numericValue * sign);
// }, 0);
//
// const totalYandexSum2 = yandexTransactions2.reduce((total, item) => {
//     const valueWithoutCurrency = item.Column2.replace(/[^\d,-]/g, "").replace(",", ".");
//     const numericValue = parseFloat(valueWithoutCurrency);
//     const sign = item.Column2.includes('+') ? 1 : -1;
//     return total + (numericValue * sign);
// }, 0);
//
// // Чтобы показать результат на странице:
// const result = document.getElementById('result');
// result.innerHTML = `Сумма операций с упоминанием YANDEX DARIA: ${totalYandexSum.toFixed(2)} ₸<br>`;
// result.innerHTML += `Сумма операций с упоминанием YANDEX SAVA: ${totalYandexSum2.toFixed(2)} ₸`;
