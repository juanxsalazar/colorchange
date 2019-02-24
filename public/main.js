changeBgColor = () => {
    let rgb = ['#']
    for (let i=0; i < 3; i++)
    rgb.push(Math.floor(Math.random() * 99));
    changeBg = rgb.join('')
    document.body.style.background = changeBg
}

document.querySelector('.change').addEventListener('click', changeBgColor)