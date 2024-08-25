let iconCart =document.querySelector('.icon-cart')
let closeBtn =document.querySelector('.cartTab .close')
let body =document.querySelector('body')
let listProductHTML = document.querySelector('.listProduct')
let listcartHTML=document.querySelector('.listCart')
const iconCartSpan = document.querySelector('.icon-cart span');
/*listProduct= general list of product */
let listProduct= [];
/*carts = list of product in the cart */
let carts=[];
/*open and close the cart */
document.querySelector('.icon-cart').addEventListener('click', function() {
    document.querySelector('.cartTab').classList.toggle('active');
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.cartTab').classList.remove('active');
});
/*put the products in the html*/
const addDataToHTML=() =>{
    listProductHTML.innerHTML ='' ;
    if(listProduct.length > 0){
        listProduct.forEach(product => {
            const newProduct =document.createElement('div');
            newProduct.classList.add('product-item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML=`
            <div class="items">
             <img src="${product.image}" alt="Placeholder Image" class="photo">
             <div class="items-name">${product.name}</div>
             <div class="items-price">${product.price}</div>
            <button class="addBtn">add to cart</button>
            <div>
            `;
            listProductHTML.appendChild(newProduct);
            
        })
    }
}
/* get the id of product to add to the cart */
listProductHTML.addEventListener('click', (event) => {
    let clickedButton = event.target; // Renamed for clarity
    if (clickedButton.classList.contains('addBtn')) {
        // Find the closest product item and get its ID
        let getId = clickedButton.closest('.product-item'); // Renamed for clarity
        console.log('Product Item Element:', getId);

        // Now log the data-id
        let productId = getId ? getId.dataset.id : 'No product item found';
        console.log('Product ID:', productId);
        addToCart(productId);
    }
});
/*adding products in the cart*/
const addToCart=(productId)=>{
    /*productId_InCart = the index of the product id*/
    let productId_InCart=carts.findIndex((value) => value.productId==productId)
    if(carts.length <= 0){
        carts=[{
            productId:productId,
            amount:1
        }]
        alert('You added aproduct to the cart, \n check it on the cart button :) ')
    }
    else if(productId_InCart<0){
        carts.push({
            productId:productId,
            amount:1
        })
    }
    else
    carts[productId_InCart].amount=carts[productId_InCart].amount+1;
addCartToHTML();
}
const addCartToHTML = ()=>{
    listcartHTML.innerHTML='';
    let totalAmount=0;
    if(carts.length>0){
        carts.forEach(cart => {
            totalAmount=totalAmount + cart.amount;
            let newCart =document.createElement('div');
            newCart.classList.add('item');
            let positionProduct = listProduct.findIndex((value)=>value.id==cart.productId);
            let info= listProduct[positionProduct];
            newCart.innerHTML=`
             <div class="items-in-cart">
            <img src="${info.image}" alt="Placeholder Image" class="photo">
            <div class="items-name">${info.name}</div>
            <div class="items-price">${info.price*cart.amount}</div>
            <div class="items-amount">
                <span class="minus">-</span>
                <span>${cart.amount}</span>
                <span class="plus">+</span>
            </div>
        </div>
        `;
        listcartHTML.appendChild(newCart);
        })
    }
    iconCartSpan.innerText=totalAmount;
}
const initApp =() =>{
    fetch('/product/products.json')
    .then(Response => Response.json())
    .then(data => {
        listProduct=data;
        addDataToHTML();
    })
}
initApp();


