function yes() {
    alert("<3");
}

function no(button) {
    const no = this;
    const screenWidth = window.innerWidth; //Độ rộng màn hình
    const screenHeight = window.innerHeight; //Độ cao màn hình

    const randomX = Math.random() * (screenWidth - button.offsetWidth);
    const randomY = Math.random() * (screenHeight - button.offsetHeight);

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}