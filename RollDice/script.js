function rollDice(){

    //an array holding path of all the dice images
    const images = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
    
    //two variables with random numbers
    var randomNumber1 = Math.floor(Math.random()*6);
    var randomNumber2 = Math.floor(Math.random()*6);

    //variables to target image tags
    var imgSrc1 = document.querySelector("img.img1");
    var imgSrc2 = document.querySelector("img.img2");

    //variable to target h1 to show message
    const winMessage = document.querySelector("h1");

    winMessage.style.fontSize = "5rem";

    //changing images using random numbers
    imgSrc1.setAttribute("src", images[randomNumber1]);
    imgSrc2.setAttribute("src", images[randomNumber2]);

    //conditin to display message
    if(randomNumber1 > randomNumber2){
        winMessage.innerHTML = "⛳ Player 1 Wins!";
    }else if(randomNumber1 < randomNumber2){
        winMessage.innerHTML = "Player 2 Wins! ⛳";
    }else{
        winMessage.innerHTML = "It's ⛳ Draw";
    }
}

rollDice();