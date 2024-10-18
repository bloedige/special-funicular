const flags = document.querySelectorAll('.flag');
const positions = [];
const bodyColor = getComputedStyle(document.body).backgroundColor; 
const isOverlapping = (newRect) => {
    return positions.some(rect => (
        newRect.left < rect.right &&
        newRect.right > rect.left &&
        newRect.top < rect.bottom &&
        newRect.bottom > rect.top
    ));
};

flags.forEach((flag, index) => {
    let position;
    do {
        const fontSize = Math.floor(Math.random() * 20) + 15; 
        flag.style.fontSize = fontSize + 'px';

        const left = Math.random() * (window.innerWidth - 100); 
        const top = Math.random() * (window.innerHeight - 50); 
        position = {
            left: left,
            top: top,
            width: flag.offsetWidth,
            height: flag.offsetHeight,
            right: left + flag.offsetWidth,
            bottom: top + flag.offsetHeight
        };
    } while (isOverlapping(position));

    positions.push(position);
    flag.style.left = position.left + 'px';
    flag.style.top = position.top + 'px';

    if (index === (25 - 6 + 3 - 3)) {
        flag.style.backgroundColor = bodyColor; 
        flag.style.color = bodyColor; 
    }
});
