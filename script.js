let total = 0;

function order(item, price) {
    let orderList = document.getElementById('order-list');
    let listItem = document.createElement('li');
    listItem.textContent = item + ' - ₹' + price;
    orderList.appendChild(listItem);

    total += price;
    document.getElementById('total-price').textContent = '₹' + total;

    alert('You have pre-ordered: ' + item);
}
