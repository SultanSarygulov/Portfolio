var score = 0;
function clicker(){
    score += 1;
    document.getElementById("score").innerHTML = score;

    // Change image 
    switch(score) {
        case 5:
            document.getElementById("image").src = "img/abiy5.jpg";
            break;
        case 10:
            document.getElementById("image").src = "img/abiy10.jpg";
            break;
        case 50:
            document.getElementById("image").src = "img/abiy50.jpg";
            break;
        case 100:
            document.getElementById("image").src = "img/abiy100.jpg";
            break;
    }         
}