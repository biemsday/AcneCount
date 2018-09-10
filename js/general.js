button.onclick = start_button;

function start_button () {
    button = document.getElementById('button');
    button.remove();
    card("right");
    card("left");
}

function card(style) {
    var card = document.createElement('div');
    card.id = "card";
    card.className = style;
    card.onclick = card_open;
    document.body.appendChild(card);
}

function text_card(side) {
    all_card = document.getElementsByTagName('div');
    lr_card = document.getElementsByClassName(side);
    for (var i = 0; i < all_card.length; i++){
        if (lr_card[0].classList[0] == 'right'){
            var rndNumber = Math.floor(Math.random() * (6 - 3)) + 3;
            lr_card = document.getElementsByClassName('right');
            lr_card[0].innerHTML = '<p>'+rndNumber+'</p>'
        }else {
            var rndNumber = Math.floor(Math.random() * (6 - 3)) + 3;
            lr_card = document.getElementsByClassName('left');
            lr_card[0].innerHTML = '<p>'+rndNumber+'</p>'
        }
    }
}

function card_open() {
    card = document.querySelectorAll('#card');
    document.body.onclick = function (event) {
        t = event.target || event.srcElement;
        if (t.classList == 'left' && t.classList != 'l-revert') {
            card[1].classList.add("l-revert");
            text_card('left');
            setTimeout(function() {
                    card[1].firstChild.style = "visibility: visible";
                }, 1000);
        }
        if (t.classList == 'right' && t.classList != 'r-revert') {
            text_card('right');
            card[0].classList.add("r-revert");
            setTimeout(function() {
                card[0].firstChild.style = "visibility: visible";
            }, 1000);
        }
    };
}