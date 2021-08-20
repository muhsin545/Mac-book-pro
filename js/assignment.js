const exMemory = document.getElementById('ex-memory');
const exStorage = document.getElementById('ex-storage');
const deliveryCost = document.getElementById('delivery-cost');

document.getElementById('8gb-btn').addEventListener('click', function () {
    const defultMemory = 0;
    exMemory.innerText = defultMemory;
    const exMemoryCost = Number(exMemory.innerText)
});
document.getElementById('16gb-btn').addEventListener('click', function () {
    const changedMemoryCost = 180;
    exMemory.innerText = changedMemoryCost;
    const exMemoryCost = Number(exMemory.innerText)
});

document.getElementById('256ssd').addEventListener('click', function () {
    const defultStorage = 0;
    exStorage.innerText = defultStorage;
    const storageCost = Number(exStorage.innerText);
})

document.getElementById('512ssd').addEventListener('click', function () {
    const ssd512Storage = 100;
    exStorage.innerText = ssd512Storage;
    const storageCost = Number(exStorage.innerText);
})

document.getElementById('1tb').addEventListener('click', function () {
    const ssd1TBStorage = 180;
    exStorage.innerText = ssd1TBStorage;
    const storageCost = Number(exStorage.innerText);
});

document.getElementById("freeDelivery").addEventListener('click', function () {
    const freeDelivery = 0;
    deliveryCost.innerText = freeDelivery;
    const deliveryCostTotal = Number(deliveryCost.innerText)
})
document.getElementById("quickDelivery").addEventListener('click', function () {
    const quickDelivery = 20;
    deliveryCost.innerText = quickDelivery;
    const deliveryCostTotal = Number(deliveryCost.innerText);
})