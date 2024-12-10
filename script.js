// Inizio il ciclo For con conteggio da 1 a 100
for(let i = 1; i <= 100; i++){
        if((i % 3 == 0) && (i % 5 == 0)){//Verifica se il 3 e 5 hanno multipli in comune
            console.log("Fizzbuzz")//Ritornare "Fizzbuzz"
        } else if(i % 3 == 0){ //Verificare multipli di 3
            console.log("Fizz");//Ritornare "Fizz"
        } else if(i % 5 == 0){ //Verificare multipli di 5
            console.log("Buzz");//Ritornare "Buzz""
        } else{
            console.log(i);//Altrimenti stampa i numeri rimanenti
        }
        
    }
