const min = 1;
const max = 100;
const result = Math.floor(Math.random() * (max - min +1));
let attempt = 0;
let guess;
let running = true;
while (running==true) {
     guess = window.prompt(`guess the number between ${min} - ${max}`)
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert(`please enter a valid number`)
    }
    else if(guess>max || guess<min){
        window.alert(`choose between the given number`)
    }
    else{
        attempt++;}
    
    if (guess<result) {
        window.alert(`guess is too low`);
    }
    else if(guess>result){
        window.alert(`guess is too high`);
    }
    else{
        window.alert(`guessed the correct answer in ${attempt} attempts`);
        running=false;
    }

}