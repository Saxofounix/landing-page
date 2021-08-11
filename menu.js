const menu = [
    {
        id: '1',
        name: 'Cheeseburger',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, incidunt sint dolores sunt adipisicing',
        price: '14.99'
    },
    {
        id: '2',
        name: 'Hamburger',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error minima facere voluptate repellendus praesentium at corrupti distinctio labore provident.',
        price: '13.99'
    },
    {
        id: '3',
        name: 'Royal Country Burger',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error minima facere voluptate repellendus praesentium at corrupti distinctio labore provident.',
        price: '15.99'
    },
    {
        id: '4',
        name: 'Bacon Burger',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error minima facere voluptate repellendus praesentium at corrupti distinctio labore provident.',
        price: '13.99'
    },
    {
        id: '5',
        name: 'Veggie Burger',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error minima facere voluptate repellendus praesentium at corrupti distinctio labore provident.',
        price: '12.99'
    },
    
    
]

let menuDesc = document.querySelector('.menu-container')
let sideNav = document.querySelector('.sidenav')
let cart = document.querySelector('.cart');
let cartBalance = document.querySelector('.cart-balance')


let addBtn;
let total = 0;
let sub = 0;
let counter = 0;


window.addEventListener('DOMContentLoaded', function () {
    displayMenu(menu);
    toggle(cart, sideNav);
    addBtn = document.querySelectorAll('.add')
    addItems();
})

function displayMenu(menuItem) {
    let display = menuItem.map(function (e) {
        return `<div class="menu-item">
        <div class="menu-picture">
        <img src="/images/burger-1.png" alt="">
        </div>
        <div class="menu-desc">
        <h4>${e.name}</h4>
        <p>${e.desc}</p>
        <p>${e.price}$</p>
        <button class="add">Add to cart</button>
        </div> 
        </div>`
    })
    display = display.join('');
    menuDesc.innerHTML = display;
}

function removeItems(){
    let removeBtn = document.querySelectorAll('.remove-btn')
    removeBtn.forEach(function(btn){
        btn.addEventListener('click', function(e){
            currentBtn = e.currentTarget;
            subTotal(btn);
            currentBtn.parentElement.remove();
        })
    })
} 
function addItems(){
    addBtn.forEach(function(btn){
        btn.addEventListener('click', function(e){
            let item = e.currentTarget.parentElement;
            sideNav.innerHTML += `<div class="side-item">
            <h4>${item.childNodes[1].innerHTML}</h4>
            <p>${item.childNodes[5].innerHTML}</p>
            <button class="remove-btn">Remove</button>
            <hr>
            </div>`
            removeItems();
            addTotal(btn)
        })
    })
}
function toggle(item, parameter){
    item.addEventListener('click', function(){
        parameter.classList.toggle('clear');
    })
}
function addTotal(item){
    let price = document.querySelector('.price');
    total += parseFloat(item.previousElementSibling.innerHTML.slice(0, -1));
    price.innerHTML = ' $' + total.toFixed(2)
    counter++;
    cartBalance.innerHTML = counter
    if (counter === 0){
        cartBalance.innerHTML = ''
    } else {
        cartBalance.innerHTML = counter
    }
}

function subTotal(item){
    let price = document.querySelector('.price');
    total -= parseFloat(item.previousElementSibling.innerHTML.slice(0, -1));
    price.innerHTML = '$' + total.toFixed(2);
    counter--;
    cartBalance.innerHTML = counter
    if (counter === 0){
        cartBalance.innerHTML = ''
        price.innerHTML = ' $0.00'
    } else {
        cartBalance.innerHTML = counter
    }
}
