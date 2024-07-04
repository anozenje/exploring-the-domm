console.log(document)
const myMessage = document.querySelector('.myMessage');
console.log(myMessage);

//myMessage.innerHTML = 'This is a message in the DOM!'
setTimeout(function(){
    myMessage.innerText = 'This is a message in the DOM!'
}, 3000);

myMessage.addEventListener('click', function(){
    myMessage.classList.toggle('darkmode')
})

const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function(){
    //alert("button clicked!");
    myMessage.innerText = 'Button pressed'
});

const clearMessageButton = document.querySelector('.clearMessageButton');
clearMessageButton.addEventListener('click', function(){
    myMessage.innerText = '';
});

setTimeout(function(){
    myMessage.innerText = ''
}, 6000);

const inputBox = document.querySelector('.theInputValue');
theMessageButton.addEventListener('click', function(){
    if (inputBox.value.trim().length > 0){
        myMessage.innerText = inputBox.value;
    }
})

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas', 'Watermelon'];

const fruitList = document.querySelector(".fruits");
for (let i = 0; i < fruits.length; i++){
    const fruit = fruits[i];
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
}

const theInputFruit = document.querySelector('.theInputFruit');
const addFruitButton = document.querySelector('.addFruitButton');

addFruitButton.addEventListener('click', function(){
    const fruit = theInputFruit.value;
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
})