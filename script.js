function func(x){
    x.style.animation = "mouse_anime 2s infinite ease-in-out";
}
function func2(x){
    x.style.animation = "";
}
function func3(card) {
    const image = card.querySelector('img');
    const paragraph = card.querySelector('p');
    image.style.display = 'none';
    paragraph.style.display = 'block';
}
function func4(card) {
    const image = card.querySelector('img');
    const paragraph = card.querySelector('p');
    image.style.display = 'block';
    paragraph.style.display = 'none';
}