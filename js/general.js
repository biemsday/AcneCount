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
    card.innerHTML = '<p style="visibility: hidden">'+rndNumber+'</p>';
    document.body.appendChild(card);
}

var rndNumber = Math.floor(Math.random() * (6 - 3)) + 3;

function card_open() {
    document.body.onclick = function (event) {
        t = event.target || event.srcElement;
        if (t.id == 'left') {
            t.classList.add("revert");
            t.firstChild.style = "visibility: visible";
        } else {
            t.classList.add("revert");
            t.firstChild.style = "visibility: visible";
        };
    };
};