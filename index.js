// **********************************TAB FUNCTIONALITY**********************
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {tabContent.classList.remove('active')})
        target.classList.add('active')
    })
})

// ********************************ADDING ITEM IN LIST**********************

const addButtons = document.querySelectorAll(".add");
const minusButtons = document.querySelectorAll(".minus");
const counts = document.querySelectorAll(".count");
var items  = document.querySelectorAll(".item");
const itemDetails = document.querySelectorAll(".item-details");

console.log(counts)
for(let i = 0; i<addButtons.length; i++){
    
    const addButton = addButtons[i];
    const countButton = counts[i];
    console.log(countButton)
    console.log(addButton)
    addButton.addEventListener('click',() => {
        
        countButton.innerText = parseInt(countButton.innerText) + 1;
        
        console.log(items[i])
        items[i].classList.remove("lighten")
        var itemName = document.querySelector(itemDetails[i])
        addItems(parseInt(countButton.innerText), )
    })

    const minusButton = minusButtons[i];
    minusButton.addEventListener('click', () => {
        if(parseInt(countButton.innerText)>0){
        countButton.innerText = parseInt(countButton.innerText) - 1;
        if(parseInt(countButton.innerText)<=0){
            items[i].classList.add("lighten")
        }
        }
        else if(parseInt(countButton.innerText)<=1) {
            items[i].classList.add("lighten")
        }
    })
    
}

// ***********************ADDING ITEMS TO CART**************************

function addItems(count, itemName, price){
    
}