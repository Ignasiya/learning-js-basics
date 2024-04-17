import dataProducts from './data.js';

const data = JSON.parse(dataProducts);

const productList = document.querySelector('.product-list');
const rootEl = document.getElementById('product-template');

// const xsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// xsvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
// xsvg.setAttribute("viewBox", "0 0 24 24");
// xsvg.setAttribute("stroke-width", "1.5");
// xsvg.setAttribute("stroke", "black");
// const xsvgPath = document.createElement("path");
// xsvgPath.setAttribute("stroke-linecap", "round");
// xsvgPath.setAttribute("stroke-linejoin", "round");
// xsvgPath.setAttribute("d", "M6 18 18 6M6 6l12 12");
// xsvg.appendChild(xsvgPath);

data.forEach(product => {
    const clone = rootEl.content.cloneNode(true);

    clone.querySelector('img.product__image').src = product.cover;
    clone.querySelector('h4.product-info__title').innerHTML = product.name;
    clone.querySelector('p.product-info__price span').innerHTML = product.price;
    clone.querySelector('p.product-info__color span').innerHTML = product.color;
    clone.querySelector('p.product-info__size span').innerHTML = product.size;
    clone.querySelector('#quantity').value = product.quantity;

    productList.appendChild(clone);

    // const productEl = document.createElement('div');
    // productEl.classList.add('product');
    // rootEl.appendChild(productEl);

    // const coverEl = document.createElement('div');
    // coverEl.classList.add('product__cover');
    // const imgEl = document.createElement('img');
    // imgEl.classList.add('product__image');
    // imgEl.alt = 'product';
    // imgEl.src = product.cover;
    // productEl.appendChild(coverEl);
    // coverEl.appendChild(imgEl);

    // const infoEl = document.createElement('div');
    // infoEl.classList.add('product-info');
    // productEl.appendChild(infoEl);

    // const titleEl = document.createElement('h4');
    // titleEl.classList.add('product-info__title');
    // titleEl.textContent = product.name;
    // infoEl.appendChild(titleEl);

    // const detailsEl = document.createElement('div');
    // detailsEl.classList.add('product-details');
    // infoEl.appendChild(detailsEl);

    // const priceEl = document.createElement('p');
    // priceEl.classList.add('product-info__price');
    // priceEl.textContent = 'Price: ';
    // const priceSpanEl = document.createElement('span');
    // priceSpanEl.textContent = '$' + product.price;
    // priceEl.appendChild(priceSpanEl);
    // detailsEl.appendChild(priceEl);

    // const colorEl = document.createElement('p');
    // colorEl.classList.add('product-info__color');
    // colorEl.textContent = 'Color: ' + product.color;
    // detailsEl.appendChild(colorEl);

    // const sizeEl = document.createElement('p');
    // sizeEl.classList.add('product-info__size');
    // sizeEl.textContent = 'Size: ' + product.size;
    // detailsEl.appendChild(sizeEl);

    // const quantityEl = document.createElement('div');
    // detailsEl.classList.add('product-quantity');
    // detailsEl.appendChild(quantityEl);

    // const labelEl = document.createElement('label');
    // labelEl.for = 'quantity';
    // labelEl.textContent = 'Quantity: ';
    // quantityEl.appendChild(labelEl);

    // const inputEl = document.createElement('input');
    // inputEl.type = 'number';
    // inputEl.id = 'quantity';
    // inputEl.name = 'quantity';
    // inputEl.min = '1';
    // inputEl.value = product.quantity;
    // quantityEl.appendChild(inputEl);

    // const deleteEl = document.createElement('a');
    // deleteEl.classList.add('product-delete');
    // productEl.appendChild(deleteEl);

    // deleteEl.href = '#';
    // const xsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // xsvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    // xsvg.setAttribute("viewBox", "0 0 24 24");
    // xsvg.setAttribute("stroke-width", "1.5");
    // xsvg.setAttribute("stroke", "black");
    // const xsvgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    // xsvgPath.setAttribute("stroke-linecap", "round");
    // xsvgPath.setAttribute("stroke-linejoin", "round");
    // xsvgPath.setAttribute("d", "M6 18 18 6M6 6l12 12");
    // xsvg.appendChild(xsvgPath);
    // deleteEl.appendChild(xsvg);
});