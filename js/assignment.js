function updateCosts(id, price) {
    const updatePrice = document.getElementById(id);
    updatePrice.innerText = price;

};


function getValue(id) {
    var updatedPriceValue = document.getElementById(id);
    updatedPriceValue = parseInt(updatedPriceValue.innerText);

    return updatedPriceValue;


};


// 8gb
document.getElementById('8gb-btn').addEventListener('click', function () {
    updateCosts('ex-memory', 0);
    totalPrice();
    finalTotal()
});

// 16gb
document.getElementById('16gb-btn').addEventListener('click', function () {
    updateCosts('ex-memory', 180);
    totalPrice();
    finalTotal()
});


// 256ssd 
document.getElementById('256ssd').addEventListener('click', function () {
    updateCosts('ex-storage', 0);
    totalPrice();
    finalTotal()
});
// 512ssd 
document.getElementById('512ssd').addEventListener('click', function () {
    updateCosts('ex-storage', 100);
    totalPrice();
    finalTotal()
});
// 1tb 
document.getElementById('1tb').addEventListener('click', function () {
    updateCosts('ex-storage', 180);
    totalPrice();
    finalTotal()
});
// freedelivery 
document.getElementById('freeDelivery').addEventListener('click', function () {
    updateCosts('delivery-cost', 0);
    totalPrice();
    finalTotal()
});
// quickDelivery
document.getElementById('quickDelivery').addEventListener('click', function () {
    updateCosts('delivery-cost', 20);
    totalPrice();
    finalTotal()
});
// promoCode 
document.getElementById('promoCodeBtn').addEventListener('click', function () {
    finalTotal();
});


// function 

function totalPrice() {
    const bestPrice = getValue('fixed-Price');
    const memoryPrice = getValue('ex-memory');
    const storagePrice = getValue('ex-storage');
    const deliveryCost = getValue('delivery-cost');
    var total = document.getElementById('total-price');
    total.innerText = bestPrice + memoryPrice + storagePrice + deliveryCost;
    const finalCost = document.getElementById('final-Total')
    var finalTotal = parseInt(finalCost.innerText);
    finalTotal = total.innerText;
}
totalPrice();

function finalTotal() {
    const bestPrice = getValue('fixed-Price');
    const memoryPrice = getValue('ex-memory');
    const storagePrice = getValue('ex-storage');
    const deliveryCost = getValue('delivery-cost');
    var total = document.getElementById('final-Total');
    const finalCost = total.innerText;
    const finalTotal = parseInt(finalCost);
    let promoInput = document.getElementById('promoCode');
    let promoInputValue = promoInput.value;
    if (promoInputValue == 'stevekaku') {
        const discount = (bestPrice + memoryPrice + storagePrice + deliveryCost) * 0.2;
        total.innerText = (bestPrice + memoryPrice + storagePrice + deliveryCost) - discount;
    } else {
        total.innerText = bestPrice + memoryPrice + storagePrice + deliveryCost;
    }
    promoInput.value = '';
    return total.innerText

}
finalTotal()