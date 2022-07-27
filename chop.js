//count
var btnsPlus = document.querySelectorAll(".qt-plus");
var btnsMinus = document.querySelectorAll(".qt-minus");
var counts = document.querySelectorAll(".count");
var fullprices = document.querySelectorAll(".full-price")
var prices = document.querySelectorAll(".price");
var priceTotal = document.querySelector(".total");
var hearts = document.querySelectorAll('.fa-heart');
var removeBtns = document.querySelectorAll(".fa-trash-o");
var contents = document.querySelectorAll(".product")

for (let i = 0; i < btnsMinus.length; i++) {
    btnsPlus[i].addEventListener("click", function() {
        counts[i].innerText++;
        fullprices[i].innerText = counts[i].innerText * prices[i].innerText
        total()
    });
    btnsMinus[i].addEventListener("click", function() {
        if (counts[i].innerText > 0) {
            counts[i].innerText--;
            fullprices[i].innerText = counts[i].innerText * prices[i].innerText
            total()
        }
    });
}

function total() {
    fullprices = document.querySelectorAll(".full-price")
    var sum = 0
    for (let i = 0; i < fullprices.length; i++) {
        sum = sum + Number(fullprices[i].innerText)
    }

    priceTotal.innerText = sum

}

for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", function() {
        if (hearts[i].style.color != 'red') {
            hearts[i].style.color = 'red';
        } else {
            hearts[i].style.color = 'black';
        }

    })

}
for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener("click", function() {

        contents[i].remove();
        total();
        console.log(counts);
    })
}