'use strict';


let leftImageElement = document.getElementById('left-img');
let centerImageElement = document.getElementById('center-img');
let rightImageElement = document.getElementById('right-img');

let maxAttempts = 25; 
let userAttemptsCounter = 0;//to check once user reach max attempts
let images = 3; //Num of images

let leftImageIndex;
let centerImageIndex;
let rightImageIndex;

function product(name, source) {
    this.name = name;
    this.source = source;
    this.shown = 0;
    this.votes = 0;
    product.products.push(this)
}

product.products = [];


new product('bag', 'images/bag.jpg');
new product('banana', 'images/banana.jpg');
new product('bathroom', 'images/bathroom.jpg');
new product('boots', 'images/boots.jpg');
new product('breakfast', 'images/breakfast.jpg');
new product('bubblegum', 'images/bubblegum.jpg');
new product('chair', 'images/chair.jpg');
new product('cthulhu', 'images/cthulhu.jpg');
new product('dog-duck', 'images/dog-duck.jpg');
new product('dragon', 'images/dragon.jpg');
new product('pen', 'images/pen.jpg');
new product('pet-sweep', 'images/pet-sweep.jpg');
new product('scissors', 'images/scissors.jpg');
new product('shark', 'images/shark.jpg');
new product('sweep', 'images/sweep.png');
new product('tauntaun', 'images/tauntaun.jpg');
new product('unicorn', 'images/unicorn.jpg');
new product('usb', 'images/usb.gif');
new product('wine-glass', 'images/wine-glass.jpg');


function generateRandomIndex(imgnum) {

    let threerandom = []
    while (threerandom.length < imgnum) {
        let round = Math.floor(Math.random() * product.products.length);
        if (threerandom.indexOf(round) === -1) {
            threerandom.push(round);
        }
    }

    return threerandom;

}



function render() {

    let newgenerator = generateRandomIndex(images)

    leftImageIndex = newgenerator[0]
    centerImageIndex = newgenerator[1]
    rightImageIndex = newgenerator[2]


    leftImageElement.src =
        product.products[leftImageIndex].source
product.products[leftImageIndex].shown = product.products[leftImageIndex].shown + 1


    centerImageElement.src =
        product.products[centerImageIndex].source
  product.products[centerImageIndex].shown = product.products[centerImageIndex].shown + 1

    rightImageElement.src =
        product.products[rightImageIndex].source
  product.products[rightImageIndex].shown = product.products[rightImageIndex].shown + 1


}

render() // first vote before first click
maxAttempts--
console.log(maxAttempts)


let onclicck = document.getElementById('imgcontainer')

onclicck.addEventListener('click', handleclick)

function handleclick(event) {

    if (userAttemptsCounter < maxAttempts) {
        if (event.target.id === 'left-img') {
            product.products[leftImageIndex].votes = product.products[leftImageIndex].votes + 1
            userAttemptsCounter++


        }



        else if (event.target.id === 'center-img') {
            product.products[centerImageIndex].votes = product.products[centerImageIndex].votes + 1
            userAttemptsCounter++


        }



        else if (event.target.id === 'right-img') {
            product.products[rightImageIndex].votes = product.products[rightImageIndex].votes + 1
                userAttemptsCounter++


        }

        render()
    }


    else if (userAttemptsCounter === maxAttempts){

        if (event.target.id === 'left-img') {
            product.products[leftImageIndex].votes = product.products[leftImageIndex].votes + 1
            userAttemptsCounter++
        }



        else if (event.target.id === 'center-img') {
            product.products[centerImageIndex].votes = product.products[centerImageIndex].votes + 1
            userAttemptsCounter++
        }



        else if (event.target.id === 'right-img') {
            product.products[rightImageIndex].votes = product.products[rightImageIndex].votes + 1
            userAttemptsCounter++
        }

        onclicck.removeEventListener('click', handleclick)
        onclicck.style.display = "none"

        let buttonRes = document.getElementById('results')
        buttonRes.style.visibility = "visible";

        buttonRes.addEventListener('click', result)

    }

}

function result() {


    let parent = document.getElementById('list');
    parent.style.padding = "0.5%"

    let ulElement = document.createElement('ul')
    parent.appendChild(ulElement);

    let liElement = ''
    let total = 0;

    for (let i = 0; i < product.products.length; i++) {
        liElement = document.createElement('li')
        ulElement.appendChild(liElement)
        liElement.textContent = (`${product.products[i].name} 
    had ${product.products[i].votes}
     and was seen ${product.products[i].shown} times  `)



        total = total + product.products[i].votes
        console.log(total)
    }
    console.log(`all total test = ${total}`)
}

