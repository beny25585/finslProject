let iconCart =document.querySelector('.icon-cart')
let closeBtn =document.querySelector('.cartTab .close')
let body =document.querySelector('body')
let listProductHTML = document.querySelector('.listProduct')

let listProduct= [];

document.querySelector('.icon-cart').addEventListener('click', function() {
    document.querySelector('.cartTab').classList.toggle('active');
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.cartTab').classList.remove('active');
});
const addDataToHTML=() =>{
    listProductHTML.innerHTML ='' ;
    if(listProduct.length > 0){
        listProduct.forEach(product => {
            const newProduct =document.createElement('div');
            newProduct.classList.add('listProduct');
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
listProductHTML.addEventListener('click', (event)=>{
    let positionClick =event.target;
    if(positionClick.classList.contains('addBtn')){
        const productId=positionClick.parentElement.dataset.id;
        alert(productId)
    }
})
const initApp =() =>{
    fetch('/product/products.json')
    .then(Response => Response.json())
    .then(data => {
        listProduct=data;
        console.log(listProduct)
        addDataToHTML();
    })
}
initApp();