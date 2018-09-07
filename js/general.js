button.onclick = start_button;

function start_button () {

    button = document.getElementById('button');
    button.style.display="none";

    var deck = document.createElement('div');
    deck.id = "deck";
    deck.className = "deck";
    document.body.appendChild(deck);

    deck = document.getElementById('deck');

    var rndNumber = Math.floor(Math.random() * (6 - 3)) + 3;

    function card_open() {
        document.body.onclick = function (event) {
            t = event.target || event.srcElement;
            if (t.id == 'first') {
                t.firstChild.style = "visibility: visible";
                deck.removeChild(second);
                deck.className = "choosen"
            } else {
                t.firstChild.style = "visibility: visible";
                deck.removeChild(first);
                deck.className = "choosen"
            };
        };
    };

    /*card-1*/
    var card_1 = document.createElement('div');
    card_1.id = "first";
    card_1.className = "card";
    card_1.onclick = card_open;
    card_1.innerHTML = '<p style="visibility: hidden">'+rndNumber+'</p>';
    deck.appendChild(card_1);

    /*card-2*/
    var card_2 = document.createElement('div');
    card_2.id = "second";
    card_2.className = "card";
    card_2.onclick = card_open;
        if (rndNumber == '5'){
            var rndNumber = Math.floor(Math.random() * (6 - 3)) + 3;
            card_2.innerHTML = '<p style="visibility: hidden">'+rndNumber+'</p>';
        }else{
            card_2.innerHTML = '<p style="visibility: hidden">5</p>';
        };
    deck.appendChild(card_2);

}
